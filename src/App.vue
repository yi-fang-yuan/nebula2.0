<template>
  <div>
    <fullscreen ref="fullscreen" @change="fullscreenChange">
    
          <SideBar></SideBar>

        <mainPage />
        
         <div class="fullscreenButton">
          <button v-on:click="reloadPage" class="mr-3">刷新</button>
          <button type="button" @click="toggle" >全屏</button>
          </div>
          <div class="userInfo mt-3">
            <UserComputer />
          </div>
           </fullscreen>
  </div>
    
</template>

<script>
import SideBar from './components/SideBar.vue'
import mainPage from './components/mainPage'
import UserComputer from './components/UserComputer'

export default {
  name: 'App',
  components: {
    SideBar,
    mainPage,
    UserComputer,
  },
  methods:{
     toggle () {
        this.$refs['fullscreen'].toggle() // recommended
        // this.fullscreen = !this.fullscreen // deprecated
      },
      fullscreenChange (fullscreen) {
        this.fullscreen = fullscreen
      },
      reloadPage(){
        window.location.reload()
      }
  },
   data() {
      return {
        fullscreen: false
      }
    }
}
</script>

<style>
.fullscreenButton{
  position:fixed;
  right:5%;
  top:7.9%;
}

.userInfo{
  position:fixed;
  top:50%;
  left:35%;
  width:48%;
}

@media only screen and (max-width:768px){
.userInfo{
    position:fixed;
    top:52%;
    left:15%;
    width:74%;
} 
 }
</style>
