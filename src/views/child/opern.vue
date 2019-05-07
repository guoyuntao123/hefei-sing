<template>
  <div class="opern">
      <div class="search-div">
        <input type="text" placeholder="请输入歌名"/><span class="span-btn">乐谱</span><span class="span-btn">搜索</span>
      </div>
      <div class="opern-div">
        <div class="box-div type-one">
          <span class="label-span">
            <span v-for="(txt,i) in lables"
                  @click="changeClass(i)"
                  :class="{activeLabel:i===isActive}">
              {{txt}}
            </span>
          </span>
          <div :class="{isDispaly:0===isActive}">
            <ul>
              <li v-for="(pic,i) in pictures" >
                <a class='list-item' target="_blank" :href="pic.url">
                  <span class="list-num" :class="{hotOne:i===0,hotTwo:i===1,hotThree:i===2}">{{i+1}}</span>
                  <span class="list-name">{{pic.name}}</span>
                  <span class="list-author">{{pic.author}}</span>
                </a>
              </li>
            </ul>
          </div>
          <div :class="{isDispaly:1===isActive}">
            <ul>
              <li v-for="(txt,i) in txts">
                <a class='list-item' target="_blank" :href="txt.url">
                  <span class="list-num" :class="{hotOne:i===0,hotTwo:i===1,hotThree:i===2}">{{i+1}}</span>
                  <span class="list-name">{{txt.name}}</span>
                  <span class="list-author">{{txt.author}}</span>
                </a>
              </li>
            </ul>
          </div>
          <div :class="{isDispaly:2===isActive}">
            <ul>
              <li v-for="(uk,i) in uks">
                <a class='list-item' target="_blank" :href="uk.url">
                  <span class="list-num" :class="{hotOne:i===0,hotTwo:i===1,hotThree:i===2}">{{i+1}}</span>
                  <span class="list-name">{{uk.name}}</span>
                  <span class="list-author">{{uk.author}}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="box-div type-two">
          <span class="label-span">
             <span v-for="(txt,dex) in lables2"
                   @click="changeClass2(dex)"
                   :class="{activeLabel:dex===isActive2}">
              {{ txt}}
            </span>
          </span>
          <div :class="{isDispaly:0===isActive2}">
            <ul>
              <li v-for="(chi,i) in chinese">
                <a class='list-item' target="_blank" :href="chi.url">
                  <span class="list-num" :class="{hotOne:i===0,hotTwo:i===1,hotThree:i===2}">{{i+1}}</span>
                  <span class="list-name">{{chi.name}}</span>
                  <span class="list-author">{{chi.author}}</span>
                </a>
              </li>
            </ul>
          </div>
          <div :class="{isDispaly:1===isActive2}">
            <ul>
              <li v-for="(eng,i) in english">
                <a class='list-item' target="_blank" :href="eng.url">
                  <span class="list-num" :class="{hotOne:i===0,hotTwo:i===1,hotThree:i===2}">{{i+1}}</span>
                  <span class="list-name">{{eng.name}}</span>
                  <span class="list-author">{{eng.author}}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="box-div type-three" >
          <span class="label-span">
               <span class="cell-span activeLabel" style="width: 280px;">推荐教程</span>
          </span>
          <ul>
            <li v-for="(lea,i) in learns">
              <a class='list-item' target="_blank" :href="lea.url">
                <span class="list-num" :class="{hotOne:i===0,hotTwo:i===1,hotThree:i===2}">{{i+1}}</span>
                <span class="list-name">{{lea.name}}</span>
                <span class="list-author">{{lea.author}}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
    export default {
        name: "opern",
        data() {
          return{
            isActive:0,
            lables:[
                "图片谱(热门榜)","文本谱","UK谱"
              ],
            isActive2:0,
            lables2:[
              "中文歌谱","英文歌谱"
            ],
            pictures:[
              {"name":"像我这样的人吉他谱_毛不的人吉他谱_毛不易_C调原版弹",author:'admin',"url":"https://www.baidu.com"},
              {"name":"像我这样的人吉他谱_毛不的人吉他谱_毛不易_C调原版弹",author:'admin',"url":"https://www.baidu.com"},
              {"name":"像我这样的人吉他谱_毛不的人吉他谱_毛不易_C调原版弹",author:'admin',"url":"https://www.baidu.com"},
              {"name":"像我这样的人吉他谱_毛不的人吉他谱_毛不易_C调原版弹",author:'admin',"url":"https://www.baidu.com"},
              {"name":"像我这样的人吉他谱_毛不的人吉他谱_毛不易_C调原版弹",author:'admin',"url":"https://www.baidu.com"},
              {"name":"像我这样的人吉他谱_毛不的人吉他谱_毛不易_C调原版弹",author:'admin',"url":"https://www.baidu.com"},
              {"name":"像我这样的人吉他谱_毛不的人吉他谱_毛不易_C调原版弹",author:'admin',"url":"https://www.baidu.com"},
              {"name":"像我这样的人吉他谱_毛不的人吉他谱_毛不易_C调原版弹",author:'admin',"url":"https://www.baidu.com"},
              {"name":"像我这样的人吉他谱_毛不的人吉他谱_毛不易_C调原版弹",author:'admin',"url":"https://www.baidu.com"},
              {"name":"像我这样的人吉他谱_毛不的人吉他谱_毛不易_C调原版弹",author:'admin',"url":"https://www.baidu.com"},
              {"name":"像我这样的人吉他谱_毛不的人吉他谱_毛不易_C调原版弹",author:'admin',"url":"https://www.baidu.com"},
              {"name":"像我这样的人吉他谱_毛不的人吉他谱_毛不易_C调原版弹",author:'admin',"url":"https://www.baidu.com"},
              {"name":"像我这样的人吉他谱_毛不的人吉他谱_毛不易_C调原版弹",author:'admin',"url":"https://www.baidu.com"},
              {"name":"像我这样的人吉他谱_毛不的人吉他谱_毛不易_C调原版弹",author:'admin',"url":"https://www.baidu.com"},
              {"name":"像我这样的人吉他谱_毛不的人吉他谱_毛不易_C调原版弹",author:'admin',"url":"https://www.baidu.com"},
              {"name":"像我这样的人吉他谱_毛不的人吉他谱_毛不易_C调原版弹",author:'admin',"url":"https://www.baidu.com"},
              {"name":"像我这样的人吉他谱_毛不的人吉他谱_毛不易_C调原版弹",author:'admin',"url":"https://www.baidu.com"},
              {"name":"像我这样的人吉他谱_毛不的人吉他谱_毛不易_C调原版弹",author:'admin',"url":"https://www.baidu.com"},
              {"name":"像我这样的人吉他谱_毛不的人吉他谱_毛不易_C调原版弹",author:'admin',"url":"https://www.baidu.com"},
              {"name":"像我这样的人吉他谱_毛不的人吉他谱_毛不易_C调原版弹",author:'admin',"url":"https://www.baidu.com"},
              {"name":"彩虹",author:'admin',"url":"https://www.baidu.com"},
            ],
            txts:[
              {"name":"Killer Queen",author:'admin',"url":"https://www.baidu.com"},
              {"name":"Killer Queen",author:'admin',"url":"https://www.baidu.com"},
              {"name":"Killer Queen",author:'admin',"url":"https://www.baidu.com"},
              {"name":"Killer Queen",author:'admin',"url":"https://www.baidu.com"},
              {"name":"Killer Queen",author:'admin',"url":"https://www.baidu.com"},
              {"name":"Killer Queen",author:'admin',"url":"https://www.baidu.com"},
              {"name":"Killer Queen",author:'admin',"url":"https://www.baidu.com"},
              {"name":"Killer Queen",author:'admin',"url":"https://www.baidu.com"},
              {"name":"Killer Queen",author:'admin',"url":"https://www.baidu.com"},
              {"name":"Killer Queen",author:'admin',"url":"https://www.baidu.com"},
              {"name":"Killer Queen",author:'admin',"url":"https://www.baidu.com"},
              {"name":"Killer Queen",author:'admin',"url":"https://www.baidu.com"},
              {"name":"Killer Queen",author:'admin',"url":"https://www.baidu.com"},
              {"name":"Killer Queen",author:'admin',"url":"https://www.baidu.com"},
              {"name":"Killer Queen",author:'admin',"url":"https://www.baidu.com"},

              {"name":"Killer Queen",author:'admin',"url":"https://www.baidu.com"},
              {"name":"Killer Queen",author:'admin',"url":"https://www.baidu.com"},
              {"name":"Killer Queen",author:'admin',"url":"https://www.baidu.com"},
              {"name":"Killer Queen",author:'admin',"url":"https://www.baidu.com"},
              {"name":"love of my life","url":"https://www.baidu.com"},
              {"name":"we are the champions","url":"https://www.baidu.com"}
            ],
            uks:[
              {"name":"小手拉大手",author:'admin',"url":"https://www.baidu.com"},
              {"name":"乌克丽丽",author:'admin',"url":"https://www.baidu.com"},
              {"name":"奇妙能力歌",author:'admin',"url":"https://www.baidu.com"}
            ],
            english:[
              {"name":"Killer Queen",author:'admin',"url":"https://www.baidu.com"},
              {"name":"Killer Queen",author:'admin',"url":"https://www.baidu.com"},
              {"name":"Killer Queen",author:'admin',"url":"https://www.baidu.com"},
              {"name":"Killer Queen",author:'admin',"url":"https://www.baidu.com"},
              {"name":"Killer Queen",author:'admin',"url":"https://www.baidu.com"},
              {"name":"Killer Queen",author:'admin',"url":"https://www.baidu.com"},
              {"name":"Killer Queen",author:'admin',"url":"https://www.baidu.com"},
              {"name":"Killer Queen",author:'admin',"url":"https://www.baidu.com"},
              {"name":"Killer Queen",author:'admin',"url":"https://www.baidu.com"},
              {"name":"Killer Queen",author:'admin',"url":"https://www.baidu.com"},
              {"name":"Killer Queen",author:'admin',"url":"https://www.baidu.com"},
              {"name":"Killer Queen",author:'admin',"url":"https://www.baidu.com"},
              {"name":"Killer Queen",author:'admin',"url":"https://www.baidu.com"},
              {"name":"Killer Queen",author:'admin',"url":"https://www.baidu.com"},
              {"name":"Killer Queen",author:'admin',"url":"https://www.baidu.com"},
              {"name":"Killer Queen",author:'admin',"url":"https://www.baidu.com"},
              {"name":"Killer Queen",author:'admin',"url":"https://www.baidu.com"},
              {"name":"Killer Queen",author:'admin',"url":"https://www.baidu.com"},
              {"name":"Killer Queen",author:'admin',"url":"https://www.baidu.com"},
              {"name":"Killer Queen",author:'admin',"url":"https://www.baidu.com"},
              {"name":"Killer Queen",author:'admin',"url":"https://www.baidu.com"},
              {"name":"Killer Queen",author:'admin',"url":"https://www.baidu.com"},
              {"name":"Killer Queen",author:'admin',"url":"https://www.baidu.com"}
            ],
            chinese:[
              {"name":"成都",author:'admin',"url":"https://www.baidu.com"},
              {"name":"成都",author:'admin',"url":"https://www.baidu.com"},
              {"name":"成都",author:'admin',"url":"https://www.baidu.com"},
              {"name":"成都",author:'admin',"url":"https://www.baidu.com"},
              {"name":"成都",author:'admin',"url":"https://www.baidu.com"},
              {"name":"成都",author:'admin',"url":"https://www.baidu.com"},
              {"name":"成都",author:'admin',"url":"https://www.baidu.com"},
              {"name":"成都",author:'admin',"url":"https://www.baidu.com"},
              {"name":"成都",author:'admin',"url":"https://www.baidu.com"},
              {"name":"成都",author:'admin',"url":"https://www.baidu.com"},
              {"name":"成都",author:'admin',"url":"https://www.baidu.com"},
              {"name":"成都",author:'admin',"url":"https://www.baidu.com"},
              {"name":"成都",author:'admin',"url":"https://www.baidu.com"},
              {"name":"成都",author:'admin',"url":"https://www.baidu.com"},
              {"name":"成都",author:'admin',"url":"https://www.baidu.com"},
              {"name":"成都",author:'admin',"url":"https://www.baidu.com"},
              {"name":"成都",author:'admin',"url":"https://www.baidu.com"},
              {"name":"成都",author:'admin',"url":"https://www.baidu.com"},
              {"name":"成都",author:'admin',"url":"https://www.baidu.com"},
              {"name":"成都",author:'admin',"url":"https://www.baidu.com"},
              {"name":"成都",author:'admin',"url":"https://www.baidu.com"},
              {"name":"成都",author:'admin',"url":"https://www.baidu.com"},
              {"name":"成都",author:'admin',"url":"https://www.baidu.com"},
              {"name":"成都",author:'admin',"url":"https://www.baidu.com"},
              {"name":"成都",author:'admin',"url":"https://www.baidu.com"},
              {"name":"彩虹",author:'admin',"url":"https://www.baidu.com"},
              {"name":"纸短情长",author:'admin',"url":"https://www.baidu.com"},
              {"name":"安河桥",author:'admin',"url":"https://www.baidu.com"}
            ],
            learns:[
              {"name":"成都",author:'admin',"url":"https://www.baidu.com"},
              {"name":"成都",author:'admin',"url":"https://www.baidu.com"},
              {"name":"成都",author:'admin',"url":"https://www.baidu.com"},
              {"name":"成都",author:'admin',"url":"https://www.baidu.com"},
              {"name":"彩虹",author:'admin',"url":"https://www.baidu.com"},
              {"name":"纸短情长",author:'admin',"url":"https://www.baidu.com"},
              {"name":"安河桥",author:'admin',"url":"https://www.baidu.com"}
            ]
          }
      },
      methods:{
        changeClass: function(index){
          this.isActive=index;
        },
        changeClass2: function(index){
          this.isActive2=index;
        }
      }
    }
</script>

<style scoped>
  .opern{
    margin:10px 10px 30px 10px;
    width: 1200px;
    height: 850px;
    margin:0 auto;
  }
.search-div{
  width: 1200px;
  padding:20px;
  text-align: center;
}
.search-div input{
  width:700px;
  height:30px;
  font-size: 15px;
  text-indent: 2px;
  display: inline-block;
  margin-right: -1px;
  border:1px solid #D56464;
}
.search-div .span-btn{
  background-color:#D56464;
  color:#FFF;
  padding:10px 10px 8px 14px;
  cursor: pointer;
  text-align: center;
}
.search-div .span-btn:hover{
  background-color:#E56464;
}
.label-span{
  color:#584D4D;
  font-weight: bold;
  cursor: pointer;
  display: inline-block;
  border-bottom:1px solid #D56464;
}
.label-span span{
  width: 160px;
  height:30px;
  line-height:30px;
  display: inline-block;
  text-align: center;
}
.activeLabel{
  background-color: #D56464;
  color:#FFF;
}
.box-div{
  border:1px solid #D56464;
  display: inline-block;
  float: left;
  height: 750px;
  overflow: hidden;
}
.box-div div{
  display: none;
}
.isDispaly{
    display: block !important;
  }
.opern-div{
  width:1088px;
  margin: 0 auto;
}
.opern-div ul{
  padding:5px;
}
.opern-div ul,li{
  margin:0;
}
  .list-item{
    border-bottom: 1px solid #EEE;
    font-size: 14px;
    color:#000000;
    text-decoration: none;
    margin-top:5px;
  }
  .list-num{
    background-color: #AAA;
    width: 20px;
    height: 20px;
    line-height: 21px;
    text-align: center;
    display: inline-block;
    border-radius: 10px;
    color:white;
    vertical-align: 50%;
    margin:0 5px;
    font-size: 13px;
  }
  .list-name{
    display: inline-block;
    height: 30px;
    line-height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    white-space: nowrap;
  }
  .list-author{
    display: inline-block;
    width:75px;
    height: 30px;
    line-height: 30px;
    padding-left:60px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
  }
  .type-one .list-name{
    width: 298px;
  }
  .type-two .list-name{
    width: 130px;
  }
  .type-three .list-name{
    width: 96px;
  }
  .hotOne{
    background-color: #F56C6C;
  }
  .hotTwo{
    background-color: #E6A23C;
  }
  .hotThree{
    background-color: #67C23A;
  }
</style>
