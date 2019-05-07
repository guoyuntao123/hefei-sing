<template>
  <div>
    <Header></Header>
    <Nav></Nav>
    <div class="content">
      Ukulele
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
  import Header from '@/components/header'
  import Nav from '@/components/nav'
  import Bottom from '@/components/bottom'

  export default {
    name: "Ukulele",
    components: {
      Header,
      Nav,
      Bottom
    }
  }
</script>

<style scoped>

</style>
