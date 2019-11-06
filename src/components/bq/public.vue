<template>
    <!--最外围div-->
    <div class="cantent">
        <!-- 顶部商家背景图片 -->
        <div class="bg-img "></div>
        <!-- 商家点名卡片以及活动 -->
        <div class="merchant" >
            <!-- 商家店名 -->
            <div class="merchant-title">悠悠南国(硅谷广场)</div>
            <!-- 右边浮动的图片 -->
            <div class="merchant-img">
                <img src="../../assets/zhu_3.jpg" alt="">
            </div>
            <!-- 商家店铺自介绍 -->
            <div  class="merchant-declare" v-show="alert">店家宣：</div >
            <div  class="merchant-intro" v-show="alert" @click="show = true">
                本店主营各地特色、网红甜点，以特色经营为基础，以服务满意为保证。倡导绿色消费健康饮食，本客栈以诚信为本、品质为先的经营理念，向广大顾客郑重承诺：保证所有食物新鲜，足斤足量，却一赔十。
            </div>
            <!--本店活动-->
            <div v-show="alert" @click="show = true" class="merchant-scheme">活动:</div>
            <div v-show="alert" @click="show = true" class="merchant-scheme-cont">本店推出会员制:可享受会员8.8折</div>
            <!-- 打开详情的按钮-->
            <div class="merchant-open"  @click="show1">
                <a href="#">
                    <img src="../../assets/xia.png" >
                </a>
            </div>           
            <!-- 详情内的内容 -->
            <div class="merchant-details" v-show="show">
                <div >本店推出会员制:可享受会员8.8折</div>
                <div class="merchant-declare1">公告</div>
                <div >本店主营各地特色、网红甜点，以特色经营为基础，以服务满意为保证。倡导绿色消费健康饮食，本客栈以诚信为本、品质为先的经营理念，向广大顾客郑重承诺：保证所有食物新鲜，足斤足量，却一赔十。</div>
                <div >另外本店还推出：呼叫小二点你喜欢听的音乐喔</div>
                <div class=".merchant-img1"  @click="show2">
                    <a href="#">
                        <img src="../../assets/shang.png" >
                    </a>
                </div>
            </div>
        </div>
        <!-- 遮罩层组件 -->
            <van-overlay :show="show" @click="show2" />
        <!-- 轮播展示图 -->
        <van-swipe :autoplay="3000" indicator-color="white" style="height:150px;">
            <van-swipe-item>
                <img class="swipt-img" src="../../assets/1.jpg" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img class="swipt-img" src="../../assets/2.jpg" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img class="swipt-img" src="../../assets/3.jpg" alt="">
            </van-swipe-item>
            <van-swipe-item>
                  <img class="swipt-img" src="../../assets/4.jpg" alt="">
            </van-swipe-item>
        </van-swipe>
        <!-- 公告栏    滑动固定定位 -->
        <van-notice-bar  text="一个人的房间，漆黑的夜晚，看着你的故事和你的朋友圈，谁会喜欢孤单，只是不想人看穿" left-icon="volume-o"/>
        <!-- 下半部分背景 -->
        <div class="bottom-cantent">
            <!-- 侧边栏组件 -->
            <div class="cantent-item1">
                <div class="abc" v-for="(item,i) of food" :key="i" >
                    <van-sidebar v-model="sidebar">
                        <van-sidebar-item class="cantent-sidebar" :title="item.type" :href="food[i].anchor" @click="xz(i)" @change="changeC(i)"/>
                    </van-sidebar>
                </div>
            </div> 
            <!--右边模班  -->   
            <div class="cantent-item2"> 
                               <!--全部d 锚点  -->
                <!-- <div v-for="(item,i) of food" :key="i">
                    <div :id="item.anchor">{{item.type}}</div>
                    </div> -->
                <!-- 商品卡片 -->   
                <all v-show="alert1"  :data="data" @changeComponent1Data="component1DataChange"></all>    <!--全部  -->                       
                <entree v-show="alert2" ></entree><!--主菜  -->     
                <stalefood v-show="alert3"></stalefood><!--主食  -->
                <sweetmeats v-show="alert4"></sweetmeats><!--甜品  -->
                <drinks v-show="alert5"></drinks>      <!--酒水  --> 
        <div class="kong"></div>        
            </div>                       
        </div> 
        <!-- 购物车 -->
        <div>
            <van-goods-action>
                <van-goods-action-icon icon="chat-o" text="呼叫" @click="call"/>
                <van-goods-action-icon icon="cart-o" text="购物车" :info="str" @click="showPopup"/>
                <van-goods-action-button color="#f9bda3" type="danger" text="立即下单" @click="tz"/>
            </van-goods-action>
        </div>
        <!-- 购物车 -->
        
        <van-popup class="nanshou"
        v-model="exec"
        closeable
        position="bottom"
        :style="{ height: '35%' }">
        <div v-for="(item,i) of nn" :key="i">
        <div><img style="width:30px;height:30px;border-radius: 50%;" src="require('../../assets/shang.png')"/></div>
            <div class="i_l">{{item[i].spname}}</div>
            <div class="i_p">{{item[i].price}}</div>
            <div class="i_n">{{item[i].num}}</div>
        </div>               
        </van-popup>
    </div>
</template>
<script>
 import All from './common/All.vue';
 import Drinks from './common/Drinks.vue';
import Entree from './common/Entree.vue';
import StaleFood from './common/StaleFood.vue';
import Sweetmeats from './common/Sweetmeats.vue';
export default {
  data() {
    return {
        data:0,
        str:0,
        exec: false,
        sidebar: 0, 
        show: false,
        alert:true,
        alert1:true,
        alert2:false,
        alert3:false,
        alert4:false,
        alert5:false,        
         food:[  {type:"特惠",anchor:"#list"},
             {type:"主菜",anchor:"#entree"},
             {type:"主食",anchor:"#stapleFood"},
             {type:"甜品",anchor:"#sweetmeats"},
             {type:"酒水",anchor:"#drinks"}],
         com:[
             {isSelect:true},
             {isSelect:false},
             {isSelect:false},
             {isSelect:false},
             {isSelect:false}
         ],
         nn:[]
    };
  },
 components:{
       "all":All,
      "drinks":Drinks,
     "entree":Entree,
     "stalefood":StaleFood,
     "sweetmeats":Sweetmeats
  },
  created(){
      this.loadMore()
  },
//   beforeUpdate(){
//       this.loadMore()
//   },
//   updated(){
//       this.loadMore()
//   },
  methods:{
      component1DataChange(params) {
        this.data += params;
        this.loadMore()
        // this.created();
        console.log(this)
        // location. reload()
      },
      tz(){
          this.$router.push("/order")
      },
      showPopup(str) {
      this.exec = true;
    //   this.str=data
      console.log(str)
    },
      loadMore(){
        //   var url = "http://172.242.18.4:5050/food"
        //   this.axios.get(url).then(res=>{
        //       console.log(res.data);
        //   })
    this.nn = this.$store.state.list;
    this.str = this.$store.state.list.length;
    console.log(this.$store.state.list)
    console.log(this.nn)
      },
      changeC(n){
          var a = document.querySelectorAll(".cantent-sidebar");
          var d = document.querySelectorAll(".van-sidebar");
          for(var i=0;i<this.com.length;i++){
              if(n==i){
                  this.com[i].isSelect = true;
              }else{
                  this.com[i].isSelect = false;
              }
          }
          if(this.com[i]){
              a[i].style.borderColor = "#f8b79b";
              d[i].style.backgroundColor = "#fff";
              a[i].style.backgroundColor = "#fff";
          }else{
              a[i].style.borderColor = "#ccc";
              a[i].style.backgroundColor = "#ccc";
          }
      },
      xz(n){
          for(var i=0;i<this.food.length;i++){
              var a = document.querySelectorAll(".cantent-sidebar");
              var d = document.querySelectorAll(".van-sidebar");
              if(n==i){
                  a[i].style.borderColor = "#f8b79b";
                  d[i].style.backgroundColor = "#fff";
                  a[i].style.backgroundColor = "#fff";
                  a[i].style.color="#f8b79b";
                //   console.log(i)
              }else{
                  a[i].style.borderColor = "#f9f8f2";
                  a[i].style.backgroundColor = "#f9f8f2";
                  a[i].style.color="#000";
              }                      
          };
            if(n!==0){
                this.alert1=false;
            }else{
                this.alert1=true;
            };
            if(n==1){
                this.alert2=true;
            }else{
                this.alert2=false;
            };
            if(n==2){
                this.alert3=true;              
            }else{
                this.alert3=false;
            };
            if(n==3){
                this.alert4=true;
            }else{
                this.alert4=false;
            };
            if(n==4){
                this.alert5=true;
            }else{
                this.alert5=false;
            }; 

      },
      show1(){ 
          this.show=true;
          if(this.show){
              this.alert=false;
          }
          },
      show2(){
          this.show=false;
          if(!this.show){
              this.alert=true;
          }
          },
      call(){
          this.$toast('亲，小二正在向您飞奔而来');
        // console.log(1111)
      }
  }
};
// dom写滚动定位
window.onscroll=function(){
    var scrollLeft=document.body.scrollTop||document.documentElement.scrollTop;
    var cantentItem1 = document.querySelectorAll(".cantent-item1")
    var abc = document.querySelector(".abc")
    // console.log(cantentItem1)
    if(scrollLeft>396){ 
        for(var i=0;i<cantentItem1.length;i++){
            // cantentItem1[i].style.height='50%';
            cantentItem1[i].style.width='24%';
            cantentItem1[i].style.position='fixed';
            cantentItem1[i].style.top='0';
        }
    }else if(scrollLeft<396){
        for(var i=0;i<cantentItem1.length;i++){
            cantentItem1[i].style.position='none';
            cantentItem1[i].style.top='none';
            cantentItem1[i].style.position='absolute';
            cantentItem1[i].style.top='';
        }
    }
    // console.log(scrollLeft)
}
</script>
<style scoped>
.kong{
    width: 100%;
    height:100px;
}
/*最外层div*/
.cantentent{
    padding: 0;
    margin: 0 ;
}
/*顶部背景图片*/
.bg-img{
    width: 100%;
    height: 8rem;
    background:url("../../assets/background.jpg") no-repeat 0 0;
    /* background:url("../../img/bg_img.jpg") no-repeat 0 0; */
    background-size: 100% 100%;
}
/*背景图片一下内容*/
.bottom-cantent{
    background-color:#fff;/*背景为白色*/
    position: relative;
    display: flex;
    justify-content: space-between;
}
.bottom-cantent:after{
    content:"";
    display: block;
    clear: both;
}
/*左侧侧边栏的定位*/
.cantent-item1{
    width: 24%;
    position: relative;
    padding:0;
    text-align: center;
}
.cantent-sidebar{
    display: bloack;
    border-color:#f9f8f2;
}
/*右边商品*/
.cantent-item2{
    width: 75%;/*宽度设置百分百让其充满*/
    text-align:left;
    /* float: right; */
    position:absolute;
    right:0;
}
.van-sidebar-item,.van-sidebar{
    width: 100%;
    background-color: #f9f8f2;
}
/*轮播*/
.swipt-img{
    width: 100%;
    height: 100%;
}

.merchant{
    width: 90%;
    /* height: 100px; */
    padding:8px;
    margin: -50px 10px 10px;
    position: absolute;
    border-radius: 6px;
    border: solid 1px #e8e3d3;    
    box-shadow: 0 0 5px rgba(198, 198, 198, 0.4);
    background-color: #f9f8f2;
    z-index: 5;
}
.merchant-title{
    text-align: left;
    font-size:22px;
    font-weight: 500;
    line-height: 40px;
}
.merchant-img{
    float: right;
    margin-top:-65px;
}
.merchant-img>img{
    width: 65px;
    height: 55px;
    border-radius: 6px;
}
.merchant-declare{
    float: left;
    font-size:12px;
    color:#867f6f;
}
.merchant-scheme{
    font-size:12px;
    color:#867f6f;
}
.merchant-intro,.merchant-scheme-cont{
    width: 80%;
    font-size:12px;
    color:#867f6f;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-left:50px; 
}
.merchant-open{
    text-align: right;
}
.merchant-details>div{
    font-size: 18px;
}
.merchant-details>div+div{
    margin-top:30px;
}
.merchant-img1>img{
margin: 0 auto
}
.nanshou{
    padding-top:40px;
}
.nanshou>div{
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    padding: 5px;
}
.i_l{
    width: 170px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.i_p{
    width: 20px;
}
.i_n{
    width: 10px;
}
.van-popup--bottom{
    bottom:50px;
}
.cantent .nanshou .van-overlay{
    height: 97% !important;
}
</style>

