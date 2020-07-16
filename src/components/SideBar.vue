<template>
  <div>
    <div >
      <div class="flexgod mt-1">
           <i class="icons fa fa-home" style="color:white !important" aria-hidden="true"></i> <h3 class="word pl-2">NEBULA AI</h3>
      </div>
        
    
      <b-menu>
        <b-menu-list>
          <div class="mt-5">
            <b-menu-item>
              <template slot="label">
                <div class="flexgod">
                   <i
            class="icons fa fa-address-book"
            style="color:white !important; "
            aria-hidden="true"
          ></i><p id="words" class="word is-size-7-mobile ">总览</p>
                  </div>
              </template>
            </b-menu-item>
          </div>
          <div class="mt-5">
            <b-menu-item>
              <template slot="label">
                <div class="flexgod">
                   <i
            class="icons fa fa-heartbeat"
            style="color:white !important;"
            aria-hidden="true"
          ></i>
           <p id="words" class="word">综合监控</p>
                </div>
          
              </template>
            </b-menu-item>
          </div>
          <b-menu-item class="mt-5">
            <template slot="label">
              <div class="flexgod">
                 <i
            class="icons fa fa-cog"
            style="color:white !important;"
            aria-hidden="true"
          ></i>
           <p id="mySidebar" class="word">业务监控</p>
              </div>
             
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      hasLabel: false
    };
  },
 
};
</script>

<style>
h3{
  color:white !important;
}
.word {
  color: white !important;
}
.b-menu-list {
  margin: 5%;
}
.magicButton{
  height:50%;
}
.buttonToClick{
  display:flex;
  align-items: center;
}
.flexgod{
  display:flex;
  align-items: center;
  justify-content: space-around;
  padding-top:5%;
}
.flexgod .icons{
  font-size:27px;
}
@media only screen and (max-width: 768px) {
 .flexgod{
   flex-direction: column;
   font-size:20px;
   margin:0;
 } 
 .word{
  font-size:10px;
  padding-left:0;
  text-align:center;
}

  

}
</style>