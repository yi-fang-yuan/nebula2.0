<template>
 <div>
     <section class="allBars">
         
         <div class="columns is-mobile">
             <div class="column is-10-desktop is-12-mobile"> 
                  <div class="bar mt-4">
                      <div v-if="greenAllowed()">
                          <i class="fa fa-square mr-2" style="color:green;" aria-hidden="true"></i>
                      </div>
              <h5>CPU:</h5><progress class="progress is-success ml-3 mr-3" :value="`${getCPU[0]}`" max="100">60%</progress>
              <h5>{{getCPU[1]}} core(s) in use</h5>
         </div>
         <div class="bar mt-4">
             <div v-if="greenAllowed()">
                    <i class="fa fa-square mr-2" style="color:green;" aria-hidden="true"></i>
             </div>
             <h5>RAM: </h5>
            <progress class="progress is-info ml-3 mr-3" :value="`${getRAM[0]}`" max="100">45%</progress>
            <h5>{{getRAM[2]}} GiB/{{getRAM[1]}} GiB</h5>
         </div>
         <div class="bar mt-4">
             <div v-if="greenAllowed()">
                <i class="fa fa-square mr-2" style="color:green;" aria-hidden="true"></i>
             </div>
             <h5>VMEM:</h5><progress class="pigu progress is-warning ml-3 mr-3" :value="`${getVirtual[0]}`" max="100">45%</progress>
             <h5>{{getVirtual[1]}} GiB/{{getVirtual[2]}} GiB</h5>
         </div>
         <div class="bar mt-4" v-if="this.computerData.Info.Resources.GPUs.length > 0">
             <div v-if="greenAllowed()">
                  <i class="fa fa-square mr-2" style="color:green;" aria-hidden="true"></i>
             </div>
             <h5>GPU:  {{this.computerData.Info.Resources.GPUs[0]}}, not used</h5>
         </div>
                 
             </div>
         </div>
     </section>
 </div>
</template>

<script>
export default {
    name:'HardWare',
    methods:{
        greenAllowed(){
            if (window.innerWidth < 700){
                return false;
            }
            else{
                return true
            }
        }
    },
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
.bar h5{
    margin-bottom:0px !important;
}
.allBars{
    display:flex;
    flex-direction: column;
    margin-left:1rem;
    padding-left:1rem;
}
.bar{
    display:flex;
    align-items: center;
    text-align: center;

}
.progress {
    width: 50% !important;
    margin-bottom: 2px !important;
}
@media only screen and (max-width:768px){
.columns .bar{
    font-size: 7px !important;
} 
.progress{
    height: 10px !important;
}
.allBars{
    padding-left:0px;
    margin-left:0px;
}
 }
</style>