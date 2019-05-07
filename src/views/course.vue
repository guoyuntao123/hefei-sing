<template>
  <div>
    <Header></Header>
    <Nav :index="3"></Nav>
    <div class="content">
      course
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
  import Header from '@/components/header'
  import Nav from '@/components/nav'
  import Bottom from '@/components/bottom'

  export default {
    name: "course",
    components: {
      Header,
      Nav,
      Bottom
    }
  }
</script>

<style scoped>

</style>
