<template>
   <div class="openSideBar">
      <div class="rightSideNav mt-5 mr-5">
        <a href="#" class="mr-2">管理员</a>
        <p class="mr-4">欢迎登录!</p>
        <i class="fa fa-bell"></i>
        <i class="fa fa-power-off ml-2" aria-hidden="true"></i>
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
</style>