<template>
    <div id="main">
      <Header></Header>
      <Nav :index="index"></Nav>
      <div class="content">
        <SliderBar></SliderBar>
      </div>
      <Bottom></Bottom>
    </div>
</template>

<
<script>

  import Header from '@/components/header'
  import Nav from '@/components/nav'
  import SliderBar from '@/views/main/sliderBar'
  import Bottom from '@/components/bottom'

  export default {
    name: 'Main',
    data(){
      return {
        index:0
      }
    },
    components: {
      Header,
      Nav,
      SliderBar,
      Bottom
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
  body,*{margin:0;}
  .content{
    width: 1200px;
    margin:0 auto;
    padding-bottom: 15px;
    padding-top: 25px;
  }
  ul{
    list-style-type: none;
    margin: 0 auto;
  }
</style>
