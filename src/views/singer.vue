<template>
    <div>
      <Header></Header>
      <Nav :index="2"></Nav>
      <div class="content">
        歌手区
      </div>
      <Bottom></Bottom>
    </div>
</template>

<script>
  import Header from '@/components/header'
  import Nav from '@/components/nav'
  import Bottom from '@/components/bottom'

    export default {
        name: "singer",
        data(){
            return {

            }
        },
        components: {
          Header,
          Nav,
          Bottom
        }
    }
</script>

<style scoped>

</style>
