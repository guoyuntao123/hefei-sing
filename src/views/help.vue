<template>
  <div>
    <Header></Header>
    <Nav :index="6"></Nav>
    <div class="content">
      helphelp
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
  import Header from '@/components/header'
  import Nav from '@/components/nav'
  import Bottom from '@/components/bottom'

  export default {
    name: "help",
    components: {
      Header,
      Nav,
      Bottom
    }
  }
</script>

<style scoped>

</style>
