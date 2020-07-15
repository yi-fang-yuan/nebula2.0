<template>
  <div class="container1">
    <div class="thirdContainer ml-4 mr-4">
      <div class="titles ml-5 pl-5 mr-5 pr-5 mb-0">
        <div class="columns is-mobile">
          <div class="column ml-5 pl-5">
            <p>名称</p>
          </div>
          <div class="column" style="margin-left:6%;">类型</div>
          <div class="column is-one-quarter-desktop">操作</div>
        </div>
      </div>
      <hr style="margin-left:3%; color:gray" />
      <div class="columns is-mobile">
        <div class="column" style="margin-left:6%; display:flex; align-items:center">
          <i class="fa fa-angle-down mr-2"></i>
          <p>业务列表</p>
        </div>
        <div class="column is-6-desktop pr-5">
          <p>公司</p>
        </div>
        <div class="column is-1-desktop">
          <p class="ml-5">添加业务</p>
        </div>
      </div>

      <hr style="margin-left:3%; color:red" />
      <div class="columns is-mobile">
        <div
          class="column is-7-desktop is-5-mobile"
          style="margin-left:8.5%;  display:flex; align-items:center"
        >
          <i class="fa fa-angle-right mr-2"></i>
          <p>集群业务</p>
        </div>
        <div class="columns ml-5 is-mobile is-three-quarters-mobile">
          <div class="column is-3-desktop is-1-mobile">添加集群</div>
          <div class="column is-3-desktop is-1-mobile">添加设备</div>
          <div class="column is-3-desktop is-1-mobile">添加监测点</div>
          <div class="column is-2-desktop is-1-mobile">编辑</div>
          <div class="column is-2-desktop is-1-mobile">跳转</div>
          <div class="column is-2-desktop is-1-mobile">移除</div>
        </div>
      </div>
      <hr style="margin-left:3%; color:red" />
      <div class="columns is-mobile">
        <div class="column" style="margin-left:10%;">
            
            <el-collapse v-model="activeName" accordion>
  <el-collapse-item title="P1处理服务器" name="1">
    <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
    <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
  </el-collapse-item>
  <el-collapse-item title="P2处理服务器01" name="2">
    <div class="pl-5 ml-5"><UserComputer /></div>
  </el-collapse-item>
  
</el-collapse>


        </div>
      </div>
      <!-- <hr style="margin-left:3%;" />
      <div class="columns is-mobile">
        <div class="column" style="margin-left:10%; display:flex; align-items:center">
          <i class="fa fa-angle-down mr-2"></i>
          <p>P2处理服务器 01</p>
        </div>
      </div> -->


        <section>

       
    </section>


    </div>
  </div>
</template>

<script>
import UserComputer from './UserComputer'
export default {
  name: "mainPage",
  components:{
      UserComputer
  },
  data() {
            return {
                isOpen: 0,
                collapses: [
                {
                    title: 'Title 1',
                    text: 'Text 1'
                },
                {
                    title: 'Title 2',
                    text: ""
                },
                ]
            }
        },
};
</script>

<style>
.container1 {
  background-color: gainsboro;
  width: 100%;
  height: 100vh;
  z-index: 2;
}
.thirdContainer {
  z-index: 0;
  background-color: white;
  border-radius: 10px;
  height:89%;

}
.titles{
    padding-top:2%;
}
@media only screen and (max-width: 768px) {
  .columns .column {
    font-size: 10px !important;
  }
}
@media only screen and (max-width: 768px) {
  .columns .column {
    font-size: 10px !important;
  }
}
@media only screen and (max-width: 768px) {
  .thirdContainer {
    padding-top:5%;
  }
}
</style>