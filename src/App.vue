<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  background-color:#F2F2F2;
}
body,*{margin:0;}

.content{
    width: 1200px;
    margin:0 auto;
    background-color: #fff;
  }
ul{
  list-style-type: none;
  margin: 0 auto;
}
</style>
