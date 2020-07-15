<template>
  <div>
    <div>
      <div class="home mt-5" style="display:flex; align-items:center">
           <i class="fa fa-home" style="color:white !important" aria-hidden="true"></i> <h3 class="pl-2">NEBULA AI</h3>
      </div>
        
    
      <b-menu>
        <b-menu-list>
          <div class="mt-5">
            <b-menu-item>
              <template slot="label">
                <div class="flexgod">
                   <i
            class="fa fa-address-book"
            style="color:white !important; font-size:27px !important; "
            aria-hidden="true"
          ></i><p id="words" class="word">总览</p>
                  </div>
              </template>
            </b-menu-item>
          </div>
          <div class="mt-5">
            <b-menu-item>
              <template slot="label">
                <div class="flexgod">
                   <i
            class="fa fa-heartbeat"
            style="color:white !important; font-size:27px !important"
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
            class="fa fa-cog"
            style="color:white !important; font-size:27px !important"
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
  methods: {
    // openClose: function() {
    //   if (this.open) {
    //     document.getElementById("mySidebar").style.width = "4vw";
    //      console.log(this.open);
    //     this.open = false;
    //   } else {
    //     document.getElementById("mySidebar").style.width = "9vw";
    //     console.log(this.open);
    //     this.open = true;

    //   }
    // }
  }
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
}
@media only screen and (max-width: 768px) {
 .home {
   font-size:10px;
  }
  .word{
  font-size:10px;
}

}
</style>