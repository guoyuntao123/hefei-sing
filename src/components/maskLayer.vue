<template>
    <div id="maskDiv"></div>
</template>

<script>
    export default {
      name: "MaskLayer"
    }
</script>

<style scoped>
#maskDiv{
  position:absolute;
  top:0;left:0;
  background-color: #000000;
  opacity:0.7;
  width: 100%;
  height: 100%;
  z-index: 9;
}
</style>
