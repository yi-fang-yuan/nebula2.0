<template>

<div>
<div id="mySidebar" class="sidebar">
        <h3 class="mt-5">NEBULA AI</h3>
    <b-menu>
     <b-menu-list>
         <div class="mt-5">

      <b-menu-item >
            <template slot="label" >
          <p id="words" class="word">总览</p>
        </template>
      </b-menu-item>
      </div>
      <div class="mt-5">
       <b-menu-item >
            <template slot="label" >
          <p id="words" class="word">综合监控</p>
        </template>
      </b-menu-item>
      </div>
      <b-menu-item class="mt-5">
        <template slot="label">
          <p id="mySidebar" class="word">业务监控</p>
        </template>
        
        <b-menu-item id="words" label="业务管理"></b-menu-item>
        <b-menu-item id="words" label="业务列表"></b-menu-item>
         <b-menu-item id="words" label="业务方块"></b-menu-item>
          <b-menu-item id="words" label="业务分析"></b-menu-item>
           <b-menu-item id="words" label="告警设置"></b-menu-item>
      </b-menu-item>
    </b-menu-list>
  </b-menu>
    </div>

    <div id="main" class="openSideBar">
        <button v-on:click="openClose" class="is-size-5">☰</button>
        <div class="rightSideNav">
            <a href="#" class="mr-2">管理员</a>
            <p class="mr-4">欢迎登录!</p>
            <i class="fa fa-bell"></i>
            <i class="fa fa-power-off ml-2" aria-hidden="true"></i>
        </div>  
    </div>
    </div>
    


</template>

<script>
export default {
     data() {
    return {
      isActive: true,
      open: true,
      hasLabel:false
    }
  },
  methods:{
      openClose:function(){
          if(this.open){
              document.getElementById("mySidebar").style.width = "0";
                document.getElementById("main").style.marginLeft= "0";
                this.open = false
          }
          else{
               document.getElementById("mySidebar").style.width = "9%";
                document.getElementById("main").style.marginLeft = "9%";
                this.open = true
               
          }
      }
  }
}
</script>

<style>

.sidebar h3{
    color:white;
   
}
.sidebar{
    height:100%;
    width: 9%;
    position:fixed;
    background-color: #0C0440;
    display:flex;
    flex-direction: column;
     align-items:center;
}
.word{
    color:white !important;
}
.b-menu-list{
    margin: 5%;
}
.openSideBar{
 margin-left: 9%;
 top:0;
 width:100%;
 height: 5%;
 left:0;
 position: absolute;
 background-color: #0C0440;
 display:flex;
 align-items:center;
 justify-content: space-between;
}
.openSideBar a{
    color:green !important;
    text-decoration: underline;
}
.rightSideNav{
    display:flex;
    color:white;
    position:fixed;
    right:1.5%;
    align-items:center;
}
</style>