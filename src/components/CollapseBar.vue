<template>
  <div>
    <div class="home1 mt-5">
      <ul>
        <li>
          <i
            class="fa fa-home"
            style="color:white !important; font-size:27px !important"
            aria-hidden="true"
          ></i>
          <h3 class="mt-2">NEBULA AI</h3>
        </li>

        <li>
          <i
            class="fa fa-address-book"
            style="color:white !important; font-size:27px !important"
            aria-hidden="true"
          ></i>
          <h3 class="mt-2">总览</h3>
        </li>

        <li>
            <i
            class="fa fa-heartbeat"
            style="color:white !important; font-size:27px !important"
            aria-hidden="true"
          ></i>
          <h3 class="mt-2">综合监控</h3>
        </li>
        <li>
            <i
            class="fa fa-cog"
            style="color:white !important; font-size:27px !important"
            aria-hidden="true"
          ></i>
          <h3 class="mt-2">业务监控</h3>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.home1 ul li{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom:40px;
}
.home1 h3 {
  font-size: 13px;
}
@media only screen and (max-width: 768px) {
 .home1 ul li h3{
   font-size:8px;
  }
}
</style>