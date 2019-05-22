<template>
    <div>
      <Header></Header>
      <Nav :index="2"></Nav>
      <div class="content">
        <div class="first-letter">
          <a href="#A">A</a>
          <a href="#B">B</a>
          <a href="#C">C</a>
          <a href="#D">D</a>
          <a href="#E">E</a>
          <a href="#F">F</a>
          <a href="#G">G</a>
          <a href="#H">H</a>
          <a href="#I">I</a>
          <a href="#J">J</a>
          <a href="#K">K</a>
          <a href="#L">L</a>
          <a href="#M">M</a>
          <a href="#N">N</a>
          <a href="#O">O</a>
          <a href="#P">P</a>
          <a href="#Q">Q</a>
          <a href="#R">R</a>
          <a href="#S">S</a>
          <a href="#T">T</a>
          <a href="#U">U</a>
          <a href="#V">V</a>
          <a href="#W">W</a>
          <a href="#X">X</a>
          <a href="#Y">Y</a>
          <a href="#Z">Z</a>
        </div>
        <div class="tag-body">
            <ul>
              <template v-for="item in datas">
                <li class="char" :id="item.char">
                {{item.char}}
                </li>
                <div class="singers" href="/#/singer-desc" v-for="it in item.singers" >

                  <router-link :to="{name:'singer-desc', params:{id: it.name} }">
                    {{it.name}}({{it.num}})
                  </router-link>
                </div>
              </template>
            </ul>
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
        name: "singer",
        data(){
            return {
                datas:[
                  {char:"A",singers:[{name:"阿肆",num:2},{name:"阿信",num:3}]},
                  {char:"B",singers:[{name:"beyond",num:2},{name:"beatles",num:3}]},
                  {char:"C",singers:[{name:"陈奕迅",num:2},{name:"陈奕迅",num:2},{name:"陈奕迅",num:2},{name:"陈奕迅",num:2},{name:"陈奕迅",num:2},{name:"陈奕迅",num:2},{name:"陈奕迅",num:2},{name:"陈奕迅",num:2},{name:"陈奕迅",num:2},{name:"陈奕迅",num:2},{name:"陈鸿宇",num:3},{name:"陈奕迅",num:2},{name:"陈鸿宇",num:3},{name:"陈奕迅",num:2},{name:"陈鸿宇",num:3}]},
                  {char:"D",singers:[{name:"邓紫棋",num:2},{name:"邓紫棋",num:2},{name:"邓紫棋",num:2},{name:"邓紫棋",num:2},{name:"邓紫棋",num:2},{name:"邓紫棋",num:2},{name:"邓丽君",num:3}]},
                  {char:"E",singers:[{name:"贰佰",num:2},{name:"Eason",num:3}]},
                  {char:"F",singers:[{name:"费玉清",num:2},{name:"范玮琪",num:3}]},
                  {char:"G",singers:[{name:"高晓松",num:2},{name:"郭顶",num:3}]},
                  {char:"H",singers:[{name:"黄渤",num:2},{name:"韩红",num:3}]},
                  {char:"I",singers:[{name:"阿肆",num:2},{name:"阿信",num:3}]},
                  {char:"J",singers:[{name:"阿肆",num:2},{name:"阿信",num:3}]},
                  {char:"K",singers:[{name:"阿肆",num:2},{name:"阿信",num:3}]},
                  {char:"L",singers:[{name:"阿肆",num:2},{name:"阿信",num:3}]},
                  {char:"M",singers:[{name:"阿肆",num:2},{name:"阿信",num:3}]},
                  {char:"N",singers:[{name:"阿肆",num:2},{name:"阿信",num:3}]},
                  {char:"O",singers:[{name:"阿肆",num:2},{name:"阿信",num:3}]},
                  {char:"P",singers:[{name:"阿肆",num:2},{name:"阿信",num:3}]},
                  {char:"Q",singers:[{name:"阿肆",num:2},{name:"阿信",num:3}]},
                  {char:"R",singers:[{name:"阿肆",num:2},{name:"阿信",num:3}]},
                  {char:"S",singers:[{name:"阿肆",num:2},{name:"阿信",num:3}]},
                  {char:"T",singers:[{name:"阿肆",num:2},{name:"阿信",num:3}]},
                  {char:"U",singers:[{name:"阿肆",num:2},{name:"阿信",num:3}]},
                  {char:"V",singers:[{name:"阿肆",num:2},{name:"阿信",num:3}]},
                  {char:"W",singers:[{name:"阿肆",num:2},{name:"阿信",num:3}]},
                  {char:"X",singers:[{name:"阿肆",num:2},{name:"阿信",num:3}]},
                  {char:"Y",singers:[{name:"阿肆",num:2},{name:"阿信",num:3}]},
                  {char:"Z",singers:[{name:"阿肆",num:2},{name:"阿信",num:3}]}
                   ]
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
*{
  font-family: "Open Sans","Hiragino Sans GB","Microsoft YaHei","WenQuanYi Micro Hei",Arial,Verdana,Tahoma,sans-serif;
  color:#D56464;
}
a{
  text-decoration:none;
}
.tag-head{
  padding:10px 20px;
  font-size: 18px;
  background-color: #F8F8F8;
  color:#333;
}
  .tag-body{
    padding-bottom:30px;
  }
  .first-letter{
    padding:10px 20px;
  }
.first-letter{
  margin:0 20px 10px 20px;
  font-weight: bold;
  text-underline:none;
  padding-top:20px;
}
  .first-letter a{
    margin:0 10px;
    font-size:18px;
    font-weight: bolder;
  }
  .char{
    font-size:18px;
    margin:18px 40px 5px 0;
    padding: 0 0 6px 10px;
    border-bottom: 1px solid #EEE;
    font-weight: bolder;
}
  .singers{
    margin:3px 10px;
    display: inline-block;
  }


.singers:hover{
  text-decoration: underline;
}
</style>
