<template>
  <div>
    <Header></Header>
    <Nav :index="3"></Nav>
    <div class="content">
      <div class="course-body">
        <div class="course-item" v-for="(item,index) in datas">
            <div class="title-img">
              <img :src="require(`../../assets/images/course/${item.imgUrl}`)">
            </div>
            <div class="title-div">
              <h4>{{item.title}}</h4>
              <div class="title-text">{{item.text}}</div>
              <div class="auth-div">
                <span class="muted"><i class="fa fa-user" aria-hidden="true"></i><a href="###">{{item.auth}}</a></span>
                <span class="muted"><i class="fa fa-clock-o" aria-hidden="true">&nbsp;{{item.time}}</i></span>
                <span class="muted"><i class="fa fa-eye" aria-hidden="true"></i>{{item.scan}}</span>
                <span class="muted"><i class="fa fa-comments-o" aria-hidden="true"></i><a href="###">{{item.comments}}评论</a></span>
                <span class="muted span-heart-o"><i class="fa fa-heart-o" aria-hidden="true"></i>{{item.likes}}喜欢</span>
              </div>
            </div>
        </div>
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
    name: "course",
    data() {
      return{
        datas:[
          {title:"为什么弹吉他要使用节拍器？",imgUrl:"1.jpeg",auth:"郭云涛",time:"2天前",scan:"100",comments:"5",likes:"4",text:"我们在弹吉他的时候，尤其是初学者，经常会遇到抢拍或是拖拍的情况，其实这都是没有重视节拍器的表现。其实对于职业乐手和演奏大师，他们在录音或现场都需要这个工具，保持演奏的节奏水准。何况是我们这种业余小青年。我们弹吉他大多是练习弹唱，或者加一点指弹，甚至是自学。其实大部分朋友的节拍有问题：要么明显快，要么明显慢，要么忽快忽慢，甚至可以说没"},
          {title:"为什么弹吉他要使用节拍器？",imgUrl:"2.jpg",auth:"许敏",time:"2天前",scan:"100",comments:"5",likes:"4",text:"我们在弹吉他的时候，尤其是初学者，经常会遇到抢拍或是拖拍的情况，其实这都是没有重视节拍器的表现。其实对于职业乐手和演奏大师，他们在录音或现场都需要这个工具，保持演奏的节奏水准。何况是我们这种业余小青年。我们弹吉他大多是练习弹唱，或者加一点指弹，甚至是自学。其实大部分朋友的节拍有问题：要么明显快，要么明显慢，要么忽快忽慢，甚至可以说没"},
          {title:"为什么弹吉他要使用节拍器？",imgUrl:"3.jpg",auth:"张三",time:"2天前",scan:"100",comments:"5",likes:"4",text:"我们在弹吉他的时候，尤其是初学者，经常会遇到抢拍或是拖拍的情况，其实这都是没有重视节拍器的表现。其实对于职业乐手和演奏大师，他们在录音或现场都需要这个工具，保持演奏的节奏水准。何况是我们这种业余小青年。我们弹吉他大多是练习弹唱，或者加一点指弹，甚至是自学。其实大部分朋友的节拍有问题：要么明显快，要么明显慢，要么忽快忽慢，甚至可以说没"},
          {title:"为什么弹吉他要使用节拍器？",imgUrl:"4.jpg",auth:"李四",time:"2天前",scan:"100",comments:"5",likes:"4",text:"我们在弹吉他的时候，尤其是初学者，经常会遇到抢拍或是拖拍的情况，其实这都是没有重视节拍器的表现。其实对于职业乐手和演奏大师，他们在录音或现场都需要这个工具，保持演奏的节奏水准。何况是我们这种业余小青年。我们弹吉他大多是练习弹唱，或者加一点指弹，甚至是自学。其实大部分朋友的节拍有问题：要么明显快，要么明显慢，要么忽快忽慢，甚至可以说没"},
          {title:"为什么弹吉他要使用节拍器？",imgUrl:"5.jpg",auth:"郭云涛",time:"2天前",scan:"100",comments:"5",likes:"4",text:"我们在弹吉他的时候，尤其是初学者，经常会遇到抢拍或是拖拍的情况，其实这都是没有重视节拍器的表现。其实对于职业乐手和演奏大师，他们在录音或现场都需要这个工具，保持演奏的节奏水准。何况是我们这种业余小青年。我们弹吉他大多是练习弹唱，或者加一点指弹，甚至是自学。其实大部分朋友的节拍有问题：要么明显快，要么明显慢，要么忽快忽慢，甚至可以说没"},
          {title:"为什么弹吉他要使用节拍器？",imgUrl:"6.jpg",auth:"郭云涛",time:"2天前",scan:"100",comments:"5",likes:"4",text:"我们在弹吉他的时候，尤其是初学者，经常会遇到抢拍或是拖拍的情况，其实这都是没有重视节拍器的表现。其实对于职业乐手和演奏大师，他们在录音或现场都需要这个工具，保持演奏的节奏水准。何况是我们这种业余小青年。我们弹吉他大多是练习弹唱，或者加一点指弹，甚至是自学。其实大部分朋友的节拍有问题：要么明显快，要么明显慢，要么忽快忽慢，甚至可以说没"},
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
  body{
    font-family: "Microsoft Yahei","Helvetica Neue",Helvetica,Arial,sans-serif;
  }
  a{
    text-decoration: none;
  }
  .muted{
    color:#999;
    margin-right: 20px;
  }
  .course-item{
    width: 1000px;
    margin: 0 auto;
    margin-top: 20px;
    float: left;
  }
  .course-body{
    height: 1800px;
    width: 1000px;
    margin: 0 auto;
  }
  .title-img {
    float: left;
  }

.title-img img{
  width: 210px;
  height: 140px;
  border-radius: 5px;
  margin-right: 5px;
}
  .title-div{
    width: 760px;
    padding:10px;
    float: left;
  }
  .title-div h4:hover{color: #D56464;cursor: pointer;}
  .title-text{
    margin: 10px 0 6px 0;
    font-size: 14px;
    line-height: 23px;
    color: #888888;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  .auth-div{
    text-align: right;
    font-size: 14px;
  }
  .auth-div .fa{
    margin-right: 6px;
  }
  .auth-div a{
    color:#D56464;
  }
  .auth-div a:hover{
    color:#F56C6C;
  }

  .auth-div .span-heart-o{
    color:#F56C6C;
  }
</style>
