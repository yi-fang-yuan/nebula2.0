<template>
  <div>
    <fullscreen ref="fullscreen" @change="fullscreenChange">
      <div class="boxbox">
         <div id="mySidebar" class="sidebar">
          <div v-if="this.open">
             <SideBar />
          </div>
          <div v-else>
              <CollapseBar />
          </div>
        </div>
        <div class="content">
          <div id="navBar" class="navBar">
            <button v-on:click="openClose" class="magicButton is-size-5">☰</button>
            <NavBar />
          </div>
          <div class="title">
              <h4>业务管理</h4>
              <div class="buttons">
                    <button v-on:click="reloadPage" class="mr-3">刷新</button>
                <button type="button" @click="toggle">全屏</button>
              </div>
          </div>
          <mainPage />
        </div>
      </div>
      <!-- <div class="userInfo mt-3">
            <UserComputer />
      </div>-->
    </fullscreen>
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";
import mainPage from "./components/mainPage";
import NavBar from "./components/NavBar";
import CollapseBar from './components/CollapseBar'

export default {
  name: "App",
  components: {
    SideBar,
    mainPage,
    NavBar,
    CollapseBar
  },
  methods: {
    toggle() {
      this.$refs["fullscreen"].toggle(); // recommended
      // this.fullscreen = !this.fullscreen // deprecated
    },
    fullscreenChange(fullscreen) {
      this.fullscreen = fullscreen;
    },
    reloadPage() {
      window.location.reload();

    },
    openClose: function() {
      if (this.open) {
        document.getElementById("mySidebar").style.width = "4vw";
        document.getElementById("navBar").style.width = "96vw";
        console.log(this.open);
        this.open = false;
        if (window.innerWidth < 700){
          document.getElementById("mySidebar").style.width = "13vw";
          document.getElementById("navBar").style.width = "110vw";
        }
      } else {
        document.getElementById("mySidebar").style.width = "9vw";
        document.getElementById("navBar").style.width = "91vw"
        console.log(this.open);
        this.open = true;
        if (window.innerWidth < 700){
          document.getElementById("mySidebar").style.width = "20vw";
          document.getElementById("navBar").style.width = "100vw";
        }
      }
    }
  },
  data() {
    return {
      fullscreen: false,
      open: true
    };
  }
};
</script>

<style>
.boxbox {
  display: flex;
  background-color: gainsboro;
}
.sidebar {
  background-color: #0c0440;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 9vw;
  height: 100vh;
}
.navBar{
  background-color: #0c0440;
  display: flex;
  justify-content: space-between;
  align-items:center;
  height:5vh;
  width:91vw;
}
.content{
  display:flex;
  flex-direction:column;
}
.title{
  display:flex;
  margin-bottom:0 !important;
}
.title h4{
  margin-bottom:0 !important;
  z-index: 3;
  transform: translate(50px,5px);
}
.title .buttons{
  display: flex;
  justify-content:flex-end;
  width: 80%;
  transform: translate(25px,14px);
  z-index: 3;
}

@media only screen and (max-width: 768px) {
 .sidebar{
   
    width: 20vw;
    height: 100vh;
  }
}
@media only screen and (max-width: 768px) {
 .navBar{
   
    width: 100vw;
  }
}
@media only screen and (max-width: 768px) {
 .title h4{
   font-size:15px !important;
 }
 .title .buttons{
   padding-right:10%;
  }
   .title .buttons button{
    font-size:10px !important;
  }
}
</style>
