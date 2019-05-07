<template>
    <div class="bottom">
        <div class="bottom-line"></div>
        <div class="bottom-body">
          郭云涛 版权所有 丨 基于VUE构建© 2019丨托管于 腾讯云主机 & 七牛云存储 丨 网站地图
          站长统计 <br>| 今日IP[85] | 今日PV[404] | 昨日IP[166] | 昨日PV[793] | 当前在线[0]
        </div>
    </div>
</template>

<script>
    export default {
        name: "bottom"
    }
</script>

<style scoped>
.bottom .bottom-line{
  height:8px;
  background-color: #D56464;
  clear: both;
}
  .bottom .bottom-body{
    height: 50px;
    padding:15px;
    background-color: #584D4D;
    text-align: center;
    color:white;
    vertical-align: bottom;
    font-size: 13px;
  }
</style>
