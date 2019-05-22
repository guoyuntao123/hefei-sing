<template>
  <div>
    <Header></Header>
    <Nav :index="2"></Nav>
    <div class="content">
      歌手详情{{singerId}}
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
  import Header from '@/components/header'
  import Nav from '@/components/nav'
  import Bottom from '@/components/bottom'

  export default {
    name: "singerDesc",
    data(){
      return{
        singerId:"undefine"
      }
    },

    components: {
      Header,
      Nav,
      Bottom
    },
    mounted() {
      this.singerId = this.$route.params.id;
    }
  }
</script>

<style scoped>

</style>
