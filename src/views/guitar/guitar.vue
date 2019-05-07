<template>
  <div>
    <Header></Header>
    <Nav :index="index"></Nav>
    <div class="content">
      <HotSinger></HotSinger>
      <Opern></Opern>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
  import Header from '@/components/header'
  import Nav from '@/components/nav'
  import Bottom from '@/components/bottom'
  import Opern from '@/views/guitar/opern'
  import HotSinger from '@/views/guitar/hotSinger'

  export default {
    name: "guitar",
    data() {
      return{
        index:1
      }
    },
    components: {
      Header,
      Nav,
      Bottom,
      HotSinger,
      Opern
    },
    methods:{

    },
    mounted:function(){

    }
  }
</script>

<style scoped>

</style>
