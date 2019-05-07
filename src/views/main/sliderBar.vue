<template>
  <div id="sliderBar">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="(item,idx) in photos" class="swiper-slide">
          <a :href=item.url target="_blank">
            <img :src="require(`../../assets/images/scenery/${idx+1}.jpg`)">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import Swiper from '_swiper@4.5.0@swiper'

  export default {
    name: "sliderBar",
    data () {
      return {
        photos: [
          {"src" : "1.jpg","url":"www.baidu.com"},
          {"src" : "1.jpg","url":"www.baidu.com"},
          {"src" : "1.jpg","url":"www.baidu.com"},
          {"src" : "1.jpg","url":"www.baidu.com"},
          {"src" : "1.jpg","url":"www.baidu.com"},
          {"src" : "1.jpg","url":"www.baidu.com"},
          {"src" : "1.jpg","url":"www.baidu.com"},
          {"src":"slider1","url":"www.baidu.com"},
          {"src":"slider2","url":"www.baidu.com"}
        ]
      }
    },
    mounted(){
      new Swiper ('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
      })
    }
  }
</script>
<style scoped>
  .swiper-container {
    width: 1100px;
    height: 650px;
    margin:20px auto;
    color:white;
    font-size: 30px;
  }
  .swiper-slide img{
    width: 100%;
    height: 100%;
  }
</style>
