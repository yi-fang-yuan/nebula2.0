<template>
  <div class="container1">
    <div class="thirdContainer ml-4 mr-4">
      <div class="titles ml-5 pl-5 mr-5 pr-5 mb-0">
        <div class="columns is-mobile">
          <div class="column name ml-5 pl-5">
            <p>名称</p>
          </div>
          <div class="column type" style="margin-left:6%;">类型</div>
          <div class="column manipulation is-one-quarter-desktop">操作</div>
        </div>
      </div>
      <hr style="margin-left:3%; color:gray" />
      <div class="columns is-mobile">
        <div class="column" style="margin-left:6%; display:flex; align-items:center">
          <i class="fa fa-angle-down mr-2"></i>
          <p>业务列表</p>
        </div>
        <div class="column company is-6-desktop is-3-mobile pr-5">
          <p>公司</p>
        </div>
        <div class="column is-1-desktop">
          <p class="ml-5">添加业务</p>
        </div>
      </div>

      <hr style="margin-left:3%; color:red" />
      <div class="columns is-mobile">
        <div
          class="column is-7-desktop is-4-mobile"
          style="margin-left:8.5%;  display:flex; align-items:center"
        >
          <i class="fa fa-angle-right mr-2"></i>
          <p>集群业务</p>
        </div>
        <div class="groups">
            <ul>
                <li style="margin-top:4px">添加集群</li>
                <li>添加设备</li>
                <li>添加监测点</li>
                <li>添加集群</li>
                <li>编辑</li>
                <li>移除</li>
            </ul>
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
              <div class="computer">
                <UserComputer />
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>

      <section></section>
    </div>
  </div>
</template>

<script>
import UserComputer from "./UserComputer";
export default {
  name: "mainPage",
  components: {
    UserComputer
  },
  data() {
    return {
      isOpen: 0,
    };
  }
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
  height: 89%;
  overflow: auto;
}
.titles {
  padding-top: 2%;
}
.computer{
    padding-left:1.5rem;
    margin-left:1.5rem;
}
.groups{
    margin-top: -17px;
    padding-left:190px;
    text-align: center;
}
.groups ul{
    display:flex;
    align-items: center;
}
.groups ul li{
    list-style-type: none;
    padding-right:9px;
}
@media only screen and (max-width: 768px) {
  .columns .column {
    font-size: 12px;
  }
  .columns .name {
    margin: 0 !important;
    padding-left: 0 !important;
  }
  .columns .type {
    text-align: center !important;
  }
  .columns .manipulation {
    padding-left: 10px !important;
    text-align: center;
  }
  .company {
    margin-left: 7%;
    padding: 0;
  }
  .thirdContainer {
    padding-top: 5%;
  }

  .columns .column .groups {
    font-size: 6px !important;
    padding: 0 !important;
  }
  .computer{
      margin-left:0 !important ;
      padding-left:0 !important ;
  }
  .groups ul li{
    font-size:6px;
}
.groups{
    margin-top: -15px;
    padding-left:0;
    text-align: center;
}
.groups ul{
    margin-left:0 !important;
}
.groups ul li{
    margin-top:1.5px !important;
}
}
</style>