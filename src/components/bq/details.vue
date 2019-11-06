<template>
    <div style="margin-bottom:150px">
        <!-- 1.图片名称价格 -->
        <div>
            <!-- 1.1图片 -->
            <div id="image">
                <img src="../../assets/logo.png">
            </div>
            <!-- 1.2数量 -->
            <div></div>
        </div>
        <!-- 1.3名称 -->
        <p id="p1">{{spname}}</p>
        <!-- 1.4价格 -->
        <p id="p2">¥
            <span class="p">{{price}}</span>
        </p>
        <!-- 详情 -->
        <div id="detail">
         <p>好吃美味</p>
        </div>
        <div class="foot">
            <div class="end">已选好</div>
        </div>
        <div class="skip">此商品没有更多选择,点击可到点单页面</div>
    </div>
</template>

<script>

export default {
  data(){
    return {
     spname:"",
     price:""
    }
  },
     created(){
         this.loadMore();
         console.log(11)
     },
   methods:{
     diancai(){
       this.$router.push("/add");
       this.$router.push("/details")
     },
     loadMore(){
         var url = "http://172.242.18.4:5050/food";
         this.axios.get(url).then(res=>{
             var list = res.data.data;
             this.spname = list[1].spname;
             this.price = list[1].price;
             console.log(list)
            //  for(var i=0;i<list.length;i++){}
         })
     }
   }
}
</script>


<style scoped>
#image{
    font-size: 14px;
    color: #333;
    line-height: 1.4;
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    font-family: Arial;
    margin-top: 9px;
    text-align: center;
    position: relative;
    border: 1px solid red;
}
#image img{
    height: 250px;
    width: 95%;
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    border: 0;
    vertical-align: middle;
    border-radius: 15px;
}
#p1 #p2{
   box-sizing: border-box;
   padding: 0px;
   margin: 0 0 10px;
   font-family: Arial;
   margin-top: 10px;
}
#p1{   
    font-size: 1.3em;
    font-family: Arial;
    overflow: hidden;
    word-wrap: break-word;
    word-break: break-all;
    display: inline-block;
    width: 60%;
    margin-left: 5%;
    margin-top: 10px;
    color: #8c8881;
    margin: 0 0 10px;
}
#p2{
    font-size: 1em;
    font-family: Arial;
    color: #54a898;
    float: right;
    margin-right: 5%;
    margin-top: 10px;
}
.p{
    font-family: Arial;
    font-size: 1.3em;
}
.skip{
    position: fixed;
    top: 70%;
    left: 25%;
    z-index: 100;
    width: 200px;
    height: 60px;
    padding: 10px;
    text-align: center;
    font-size: 15px;
    text-align: center;
    color: #fff;
    background: #f5956b;
    border-radius: 10px;
    font-family: Arial;
    box-sizing: border-box;
}
.foot{
    position: fixed;
    bottom: 0;
    z-index: 100000;
    background-color: #FFFFFF;
    width: 100%;
    height: 50px;
}
.end{
    position: absolute;
    left: 40%;
    top: -30px;
    height: 70px;
    width: 70px;
    line-height: 70px;
    text-align: center;
    background-color: #f5956b;
    border-radius: 50%;
    color: #ffffff;
    font-size: 18px;
    font-family: Arial;
}
#detail{
    border: 1px solid #ddd;
    height: 150px;
    border-radius: 10px;
    font-size: 18px;
    font-family: Arial;
}
#detail p{
    margin: 5px 10px;
}
</style>