<template>
   <div class="openSideBar">
      <div class="rightSideNav mt-5 mr-5">
        <a href="#" class="mr-2">管理员</a>
        <p class="mr-4">欢迎登录!</p>
        <i class="icons fa fa-bell"></i>
        <i class="icons fa fa-power-off ml-2" aria-hidden="true"></i>
      </div>
    </div>
</template>

<script>
export default {
    name:"NavBar"
}
</script>

<style>
.openSideBar a {
  color: green !important;
  text-decoration: underline;
}
.rightSideNav {
  display: flex;
  color: white;
  align-content: center;
  
}
@media only screen and (max-width: 768px){
 .rightSideNav a{
     font-size:13px;
 }
 .rightSideNav p{
     font-size: 13px;
 }
 .icons{
     font-size:13px;
 }
}
</style>