<template>
  <div>
       <div class="userName" v-for="(value,name) in this.user" v-bind:key="value.info">
                <div class="user mt-1 ">
                    <i class="fa fa-square mr-2" style="color:green;" aria-hidden="true"></i><h1>Worker  {{name}}, host {{value.Info.Hostname}} </h1>
                    </div>
                <div class="mb-5 pb-5">
                    <HardWare v-bind:computerData="value" />
                </div>

<!--   Each ComputerData represents a user-->

  </div>
  </div>
  
</template>

<script>
import HardWare from "./HardWare";
import userInfo from '../assets/data.json'
export default {
    name: "UserComputer",
    components:{
        HardWare
    },
     data() {
         return {
          user: {},
         }
        },

    async created(){
           let stringified = JSON.stringify(userInfo)
           let obj = JSON.parse(stringified);
           this.user = obj['result']
        // const config = {
        //       headers:{
        //         Accept: "application/json"
        //       }
        //     };
        //     try {
        //       const res = await axios.post("https://nbtest.free.beeceptor.com/miner",config);
        //       console.log(res.data.result)
        //       this.user = res.data.result
            
        //     }catch(err){
        //       console.log(err);
        //     }

    }

}
</script>

<style>
.user{
    display:flex;
    align-items: center;
}
.userName{
    display:flex;
    flex-direction: column;

}
@media only screen and (max-width:768px){
.user h1{
    font-size: 10px !important;
} 
 }
</style>