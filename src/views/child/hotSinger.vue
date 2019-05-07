<template>
    <div id="hot">
      <div class="hot-singer-div">
        <div class="hot-singer-tag">热门艺人</div>
        <div class="hot-singer-list">
            <ul>
              <li v-for="(item,idx) in singers">
                <span>
                  <a :href="item.url" target="_blank">
                    <img :src="require(`../../assets/images/singers/${item.src}.jpg`)">
                  </a>
                  </span>
                <span>{{item.name}}</span>
              </li>
            </ul>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "hotSinger",
        data() {
          return {
            singers: [
              { 'src': 'zjl',"name":"周杰伦",url:"https://www.baidu.com"},
              { 'src': 'wyt',"name":"五月天",url:"https://www.baidu.com"},
              { 'src': 'ljr',"name":"梁静茹" ,url:"https://www.baidu.com"},
              { 'src': 'xw',"name":"许巍",url:"https://www.baidu.com"},
              { 'src': 'lrh',"name":"李荣浩" ,url:"https://www.baidu.com"},
              { 'src': 'cyx',"name":"陈奕迅" ,url:"https://www.baidu.com"},
              { 'src': 'wf',"name":"汪峰" ,url:"https://www.baidu.com"},
              { 'src': 'zjl',"name":"周杰伦" ,url:"https://www.baidu.com"},
              { 'src': 'zjl',"name":"周杰伦",url:"https://www.baidu.com"}
            ]
          }
        }
    }
</script>

<style scoped>
.hot-singer-div{
  height: 116px;
  width: 1100px;
  margin:0 auto;
  border:1px solid #D56464;
}
.hot-singer-div div{float: left;}
.hot-singer-tag{
    width:145px;
    background-color: #D56464;
    height: 100%;
    color:white;
    font-size: 20px;
    line-height: 116px;
    text-align: center;
}
.hot-singer-div ul li{
  float: left;
  margin: 18px;
}
.hot-singer-div ul li span{
  display: block;
  text-align: center;
  font-size: 14px;
}
</style>
