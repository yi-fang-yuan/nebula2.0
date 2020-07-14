<template>
 <div>
     <section class="allBars ml-4 pl-4">
         <div class="bar mt-4">
             <i class="fa fa-square mr-2" style="color:green;" aria-hidden="true"></i>
              CPU:<progress class="progress is-success ml-3 mr-3" :value="`${getCPU[0]}`" max="100">60%</progress>
              {{getCPU[1]}} core(s) in use
         </div>
         <div class="bar mt-4">
             <i class="fa fa-square mr-2" style="color:green;" aria-hidden="true"></i>
             <p>RAM: </p>
            <progress class="progress is-info ml-3 mr-3" :value="`${getRAM[0]}`" max="100">45%</progress>
            {{getRAM[2]}} GiB/{{getRAM[1]}} GiB
         </div>
         <div class="bar mt-4">
             <i class="fa fa-square mr-2" style="color:green;" aria-hidden="true"></i>
             VMEM:<progress class="pigu progress is-warning ml-3 mr-3" :value="`${getVirtual[0]}`" max="100">45%</progress>
             {{getVirtual[1]}} GiB/{{getVirtual[2]}} GiB
         </div>
         <div class="bar mt-4" v-if="this.computerData.Info.Resources.GPUs.length > 0">
             <i class="fa fa-square mr-2" style="color:green;" aria-hidden="true"></i>
             <p>GPU:  {{this.computerData.Info.Resources.GPUs[0]}}, not used</p>
         </div>
     </section>
 </div>
</template>

<script>
export default {
    name:'HardWare',
    props:["computerData"],
        computed:{
            //Each of the following method calculates the usage of each category including their representation in percentage
            //I made sure to leave only 2 decimal places so it is more user friendly.
            getRAM:function(){
                let ramTotal, ramUsed, ramPercent
                ramTotal = this.computerData.Info.Resources.MemPhysical*(9.3132*10**(-10))
                ramUsed = (this.computerData.Info.Resources.MemReserved + this.computerData.MemUsedMin) *(9.3132*10**(-10))
                ramPercent = (ramUsed/ramTotal) * 100
                ramPercent = ramPercent.toFixed()
                ramTotal = ramTotal.toFixed(2)
                ramUsed = ramUsed.toFixed(2)
                return [ramPercent,ramTotal,ramUsed]
            },
            getCPU (){
                let cpuPercent, cpuUsed
                cpuUsed = this.computerData.CpuUse
                cpuPercent = (this.computerData.CpuUse/ this.computerData.Info.Resources.CPUs) * 100
                return [cpuPercent, cpuUsed]
            },
            getVirtual: function(){
                let virtualPercent, virtualUsed, virtualTotal
                virtualUsed = (this.computerData.Info.Resources.MemReserved + this.computerData.MemUsedMax) * (9.3132*10**(-10))
                virtualTotal =  (this.computerData.Info.Resources.MemPhysical +  this.computerData.Info.Resources.MemSwap) * (9.3132*10**(-10))
                virtualPercent = (virtualUsed/virtualTotal) * 100
                virtualPercent = virtualPercent.toFixed()
                virtualUsed = virtualUsed.toFixed(2)
                virtualTotal = virtualTotal.toFixed(2)
                return [virtualPercent, virtualUsed, virtualTotal]
            },
        }

}
</script>

<style>
.allBars{
    display:flex;
    flex-direction: column;
}
.bar{
    display:flex;
    align-items: center;

}
.progress {
    width: 50% !important;
}
</style>