<template>
  <div class="shopHeader">
    <div class="heade" >
      <div>img</div>
      <div class="head-desc">查真伪,找曲谱,寻视频,奏名曲尽在合肥卖场小分队</div>
      <div>img</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "shopHeader",
    data() {
      return {
        msg: "welcome caopp"
      };
    }
  }
</script>

<style scoped>
  .heade{
    height: 70px;
    background: #2DA9A9;
  }
  .heade div{
    float: left;
    margin-left:170px;
  }
  .head-desc{
    font-size: 18px;
  }
</style>
