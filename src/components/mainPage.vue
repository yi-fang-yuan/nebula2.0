<template>
<div class="ownContainer">
        <h1>业务管理</h1>
     <div class="thirdContainer mr-4">
         <hr color="gray"/>
         <div class="titles ml-5 pl-5 mr-5 pr-5 mb-0">
             <div class="columns">
                  <div class="column ml-5 pl-5"><p>名称</p></div>
                    <div class="column" style="margin-left:6%;">类型</div>
                 <div class="column is-one-quarter">操作</div>
             </div>

         </div>
         <hr style="margin-left:3%; color:gray"/>
             <div class="columns">
                  <div class="column" style="margin-left:6%; display:flex; align-items:center"><i class="fa fa-angle-down mr-2"></i><p>业务列表</p></div>
                    <div class="column is-6 pr-5"><p>公司</p></div>
                 <div class="column is-1"><p>添加业务</p></div>
             </div>
         <hr style="margin-left:3%; color:red" />
          <div class="columns">
                  <div class="column" style="margin-left:8.5%;  display:flex; align-items:center"><i class="fa fa-angle-right mr-2"></i><p>集群业务</p></div>
                    <div class="column is-3 pr-5"><p></p></div>
                 <div class="column is-4">
                     <div class="groupColumn">
                         <p>添加集群</p>
                         <p>添加设备</p>
                         <p>添加监测点</p>
                         <p>编辑</p>
                         <p>跳转</p>
                         <p>移除</p>
                         </div>
                </div>
             </div>
                  <hr style="margin-left:3%; color:red" />
               <div class="columns">
                  <div class="column" style="margin-left:10%; display:flex; align-items:center"><i class="fa fa-angle-right mr-2"></i><p>P1处理服务器</p></div>
             </div>
             <hr style="margin-left:3%;" />
              <div class="columns">
                  <div class="column" style="margin-left:10%; display:flex; align-items:center"><i class="fa fa-angle-down mr-2"></i><p>P2处理服务器 01</p></div>
             </div>

     </div>
</div>
</template>

<script>
export default {
    name:'mainPage',
}
</script>

<style>
.ownContainer h1{
    font-size: 2rem;
    font-weight:bold;
     position:fixed;
    left:14%;
    top:6.4%;
    z-index:1;

}
.thirdContainer{
    position:fixed;
    z-index:0;
    top:9%;
    left:11%;
    right:2%;
    bottom:2%;
    background-color:white;
     border-radius: 10px;
}
.ownContainer{
  top:5%;
  left:0;
  right:0;
  width:100%;
  height:100%;
  position:fixed;
  background-color: gainsboro;
  z-index: -1;
}

.groupColumn{
    display:flex;
    justify-content: space-evenly;
}
</style>