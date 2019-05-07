<template>
    <div id="nav" v-model="isActive">

      <div class="nav-bar">
        <ul class="">
          <li ref="navLi" v-for="(item,index) in items"
              @click="changeClass(index,item.type)"
              :class="{activeColor:index===isActive}"
              v-bind:type="item.type">
            {{ item.message }}
          </li>
        </ul>
        <div class="div-search">
          <span><i class="fa fa-search fa-lg"></i></span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <router-link to="/register">
            <span>注册</span>
          </router-link>
          <router-link to="/logon">
            <span>登录{{index}}</span>
          </router-link>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        props:['index'],
        data () {
          return {
              isShow:false,
              isActive:0,
              items: [
                { message: '首页', type:"index" },
                { message: '吉他谱' , type:"guitar" },
                // { message: '尤克里里谱' },
                { message: '歌手/乐队' ,type:"singer"  },
                { message: '吉他教程'  ,type:"course" },
                { message: '给我们留言'  ,type:"comment" },
                { message: '官方商城'  ,type:"shopping" },
                { message: '帮助中心'  ,type:"help" }
              ]
            }
        }	,
        methods: {
          changeClass: function(index,type){
            this.isActive = index;
            this.$router.push('/'+type);
            this.$emit("send-index",index);
          },
          showRegister:function () {
            this.isShow = true;
          },
          hideMask:function () {
            this.isShow = false;
          }
        },
      mounted:function(){
          this.isActive = this.index;
          //console.log('---->'+this.index);
         // this.isActive = this.index;
      },
      components:{

      }
    }
</script>

<style>
  #nav{
    background-color: #584D4D;
    height: 39px;
    text-align: center;
    color: #FFF;
    cursor: pointer;
  }
  .nav-bar{width: 1250px;margin: 0 auto;}

  #nav ul li{
    float: left;
    padding:9px 15px;
  }

  #nav ul li:hover{
    background-color: #D56464;
  }
 .activeColor{
   background-color: #D56464;
 }
  .div-search span{
    padding:9px 15px;
    display: inline-block;
    color:#FFF;
  }
  .div-search{
    float: right;
  }
  .div-search span:hover{
    background-color: #D56464;
  }
</style>
