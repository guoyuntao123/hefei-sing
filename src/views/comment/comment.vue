<template>
  <div>
    <Header></Header>
    <Nav :index="4"></Nav>
    <div class="content">
      评论区
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
  import Header from '@/components/header'
  import Nav from '@/components/nav'
  import Bottom from '@/components/bottom'

  export default {
    name: "comment",
    components: {
      Header,
      Nav,
      Bottom
    }
  }
</script>

<style scoped>

</style>
