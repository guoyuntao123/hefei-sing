<template>
  <div>
    <Header></Header>
    <Nav :index="2"></Nav>
    <div class="singerDesc">
      <div class="singerDesc-left">
        <h1 class="singer-title">
          {{singerId}}
        </h1>
        <div class="singer-desc">
          {{introduction}}
        </div>
       <div class="all-songs"></div>
      </div>
      <div class="hotSinger-right">
        13
      </div>
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
        singerId:"undefine",
        introduction:"        The Beatles,本世纪最知名的英国流行乐队,1956年成立於利物浦,成员包括John Lennon (1940-1980),节奏吉他、键盘乐及主唱；Paul McCartney (1942- ),低音吉他、键盘乐及主唱；以及George Harrison (1943-2001),主吉他、西达琴、钢琴及和音。1962年,Ringo Starr〔原名 Richard Starkey,1940~ )加入,负责鼓及和音。1970年,乐队解散,四人分道扬镳。 　　在1956到1962间,他们吸收美国流行音乐的要素(譬如蓝调,节奏蓝调,摇滚,以及恰克贝瑞 Chuck Berry,猫王 Elvis Presley 及比尔哈利 Bill Haley 等人的音乐),发展成一种跳舞音乐型态的风格。他们早期的作品往往是John Lennon写词,Paul McCartney谱曲,辅以George Harrison创新的主吉他配乐。1962年首先灌制了 Love Me Do 及 P.S I Love You；从第二张唱片 Please Please Me (1963)起,开始了他们一系列迭获赞美、热爱的唱片录制,一直到1970,可称是同时代最受欢迎的乐队。 　1963年初英国本土的旅行演唱使The Beatles乐队陡然窜红,该年十月,他们的声誉到达空前的高度,世界各地激起了Beatlemania的现象,青少年一见到他们便尖叫、哭泣,而且变得歇斯底里。在纽约的一场演出,听众有五万五千人；在澳洲,有三十万以上的人群集欧洲南部的阿得雷城,只为一睹他们到达的风采。在表演事业的前半阶段,The Bealtles主要仍是一支巡回演唱的乐队。1966年8月,他们在旧金山做了他们最后一场舞台演出,此后即退居录音室。 　The Beatles乐队的快速走红以及他们对国际流行音乐的影响是史无前例的。即使在他们解散之后,他们的唱片仍不断再发行,他们的歌曲和风格仍盛行不衰。",
        songs:[{name:"Michelle",title:"Michelle吉他谱(六线谱)_The Beatles(披头士)",src:"1_130531013630_1.jpg",type:"jpg"},
              {name:"Yesterday",title:"Yesterday吉他谱(六线谱)_The Beatles(披头士)",src:"598a7a60e36d2_0.jpg",type:"jpg"}]
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
.singer-title{text-align: center;
color:#D56464}
  .singerDesc-left{
    width: 800px;
    line-height: 32px;
    color:#666;
    background-color: white;
    padding:10px;
    display: inline-block;
  }
  .singerDesc{
    width:1200px;
    margin: 0 auto;
    background-color: white;
    padding:20px;
  }
  .hotSinger-right{
    width:340px;
    display: inline-block;
    background-color: white;
    padding:10px;
  }
</style>
