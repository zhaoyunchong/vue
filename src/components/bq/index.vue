<template>
  <div>
    <div id="main_1">
      <div id="b2">
        <!-- 图片 -->
         <div id="img_1">
           <img src="http://www.oudicai.com//Public/168/2017-08-01/59807c05b5693.jpg">
         </div>
        <!-- 店名 -->
        <div id="name_1">悠悠南国</div>
        </div>
      <!-- 台位 -->
       <p>台位</p>
      <!-- 台位号 -->
        <div id="zuo_id">{{z_id}}</div>
    </div> 
    <!-- 点单 -->
    <div id="main_2">
      <mt-button @click="diancai" size="large"
      type="primary">
        开始点单</mt-button>
    </div>
    <!-- <mt-tab-container class="page-tabbar-container" v-model="active">
        <mt-tab-container-item id="message">
         <index>
         </index>
        </mt-tab-container-item>
        </mt-tab-container> -->
        <!-- <van-tabbar v-model="active">
            <van-tabbar-item info="3" @click.native="changeState(0)">
                <span>主页</span>
                <img
                slot="icon"
                :src="currentIndex[0].isSelect ? icon.active : icon.normal"
                >
            </van-tabbar-item>
            <van-tabbar-item @click.native="changeState(1)">
                <span>主页</span>
                <img
                slot="icon"
                :src="currentIndex[1].isSelect ? icon.active : icon.normal"
                >
            </van-tabbar-item>
            <van-tabbar-item @click.native="changeState(2)">
                <span>我的</span>
                <img
                slot="icon"
                :src="currentIndex[2].isSelect ? me.active : me.normal"
                >
            </van-tabbar-item>
        </van-tabbar> -->
  </div>
</template>

<script>

export default {
  data(){
    return {
      z_id:"001",
    }
  },
   methods:{
     diancai(){
       this.$router.push("/public");
     },
     changeState(n){
            //函数功能:将当前参数下标
            //对应数组值修改true其它修改false
            //1:创建循环,循环数组中内容
            for(var i=0;i<this.currentIndex.length;i++){
                //2:判断如果循环下标与n相等 20
                if(n==i){
                    //3:当前下标元素true 10:22
                    this.currentIndex[i].isSelect=true;
                }else{
                    //4:其它元素修改false
                    this.currentIndex[i].isSelect=false;
                }
            }
        }
   }
}
</script>

<style scoped>
.aa{
  width:100%;
}
*{
    margin: 0px;
    padding: 0px;
    font-family: Arial;
}
#main_1{
  border: 1px solid #e9e5dd;
  border-radius: 10px;
  width: 97%;
  height: 330px;
  margin: 3px auto;
  z-index: 0;
  text-align: center;
}
#b2{
  border: 1px solid #e9e5dd;
  border-radius: 10px;
  width: 95%;
  margin: 10px auto;
  height: 220px;
}
#img_1 img{
  width:100px;height:100px;
  border-radius:50%;
  margin-top: 30px;
  text-align: center;

}
#img_1 p{
  margin-top:15px;
  text-align:center;
  font-size:15px;
  color:#8c8881
}
#zuo_id{
  margin:0px auto;
  font-size:28px;
  color:#605e5a;
  font-weight:bold
}
#name_1{
  margin-top: 15px;
  font-size: 24px;
  color: #605e5a;
}
#main_2{
margin-top: 25px; 
}
</style>