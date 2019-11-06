<template>
    <div class="app">
       <!-- 顶部标题 -->
        <div class="head_top">
            <div class="gb">
                <img src="../../assets/Stone-arrow-back.png" class="return-menu" @click="tz">
                <div class="cancel">
                    <img src="../../assets/del.png" @click="del">
                </div>
            </div>
            <div class="title">
                <span class="name">悠悠南国</span>
                <span class="place">台位{{id}}</span>
            </div>
        </div>
       <!-- 中间订单详情 -->
        <div class="cart">
            <div style="width:100%;height:40px"></div>
            <div class="cart-item" v-for="(item,i) of list" :key="i">
                <div class="leftText">
                    <div class="lname">{{item[i].spname}}</div>
                    <div class="price">￥{{item[i].price}}</div>
                    <div class="ctrl-d">
                        <button class="ctrl minus" @click="sub" :data-count="item.count" :data-i="i">-</button>
                        <input class="ctrl quantity" type="text" :value="item[i].num" @change="cgi"/>
                        <button class="ctrl plus" @click="add" :data-count="item.count" :data-i="i">+</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="bzd">
            <input class="bz" type="text" placeholder="请输入要备注的内容">
        </div>
        <div class="con">
            <div class="con-d">
                总价:￥<span class="con-t">{{total}}</span>
            </div>
        </div>
        <div class="k"></div>
        <div class="cporder">
            <div class="orderpay">
                <img src="../../assets/order_normal.png">
                <span>下单</span>
            </div>
            <div class="cashorder" @click="cash">
                <img src="../../assets/cashierpay_normal.png">
                <span>服务</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            id:"001",
            list:[
            ],
            total:0
        }
    },
    created(){
        this.loadMore()
    },
    methods:{
        tz(){
            this.$router.push("/public")
        },
        cgi(){
        },
        del(event){
            this.$messagebox.confirm("亲，确定要清空菜单吗")
            .then(action=>{this.list = [],
            //console.log(event.target.dataset)
            this.loadMore(),
            this.$router.push("/public")
            })
            .catch(err=>{

            })
            
        },
        cash(){
            this.$toast("亲，小二正飞奔而来^o^");
        },
        add(event){
            var count = event.target.dataset.count;
            var i = event.target.dataset.i;
            count++;
            this.list[i].count = count;
            this.loadMore();
            // console.log(event.target.dataset)
        },
        sub(event){
            var count = event.target.dataset.count;
            var i = event.target.dataset.i;
            count--;
            this.list[i].count = count;
            this.loadMore();
            if(count<1){
                this.list.splice(i, 1);
                console.log(this.list[i]);
            }
        },
        loadMore(){
            // var url = "http://zhaoyunchong.applinzi.com/food";
            // this.axios.get(url).then(res=>{
            //     if(res.data.code>0){
            //         this.list = res.data.data;
            //         console.log(res.data.data)
            //         this.total = 0;
            //         for(var i=0;i<this.list.length;i++){
            //         this.total+=this.list[i].price*this.list[i].count
            //         console.log(this.list[i].price)
            //         console.log(this.list[i].count)
            //         }
            //     }
            // })
            this.list = this.$store.state.list;
            console.log(this.list)
            for(var i=0;i<this.list.length[0];i++){
                this.total+=this.list[0][i].price*this.list[0][i].numx
            }
        }
    }
}
</script>
<style scoped>
.app{
    padding-right:5px;
}
.head_top {
    width: 100%;
    height: 40px;
    background:#fff;
    z-index: 5;
    position: fixed;
    top: 0px;
}
.gb{
    width: 100%;
    height: 20px;
    line-height: 20px;
    position: fixed;
    left: 0;
    top: 0;
    background:#fff
}
.return-menu {
    width: 40px;
    position: absolute;
    left: 0%;
    top: -2px;
}
.cancel {
    float: right;
    height: 40px;
    position: relative;
    top: -7%;
    right: 10px;
}
.cancel img {
    width: 30px;
    height: 30px;
    float: left;
}
.title{
    display: flex;
    width: 98%;
    height: 30px;
    line-height: 30px;
    margin: 0 5px;
    position: absolute;
    position: fixed;
    left: 0;
    top: 30px;
    border-bottom: 1px solid #e9e5dd;
    margin-top: 9px;
    z-index: 1;
    background:#fff
}
.name{
    margin-left: 3%;
    font-size: 20px;
    color: #605e5a;
}
.place{
    position: absolute;
    right: 5%;
    color: #8c8881;
    font-size: 14px;
}
.cart{
    margin-top:25px;
}
.cart-item{
    display:flex;/*弹性布局*/
    justify-content: space-between;/*两端对齐*/
    align-items:center;/*垂直居中*/
}
.leftText{
    display:flex;
    align-items:center;
    margin-top:10%;
    width:100%;
    justify-content: space-between;
}
.lname{
    margin-left:25px;
    color:#333;
    width:30%;
}
.price{
    color:red;
}
.ctrl-d{
    float:right;
}
.ctrl{
    top: 0;
    display: inline-block;
    height: 24px;
    border: 0;
    width: 27px;
    text-align: center;
    background-color: #eee;
    line-height: 24px;
    color:darkgoldenrod;
}
.minus{
    left: 0;
    border-right: 1px solid #ddd;
    border-radius: 20px 0 0 20px;
    cursor: pointer;
}
.plus{
    right: 0;
    border-left: 1px solid #ddd;
    border-radius: 0 20px 20px 0;
    cursor: pointer;
}
.quantity{
    width:24px;
}
.bzd{
    margin-top: 30px;
    padding-left: 10px;
    padding-right: 10px;
}
.bz{
    height: 20px;
    border: 1px solid rgb(208, 208, 208);
    font-size: 15px;
    border-radius: 10px;
    width: 92%;
    padding: 15px;
}
.con{
    width: 100%;
    height: 20px;
    margin-top: 28px;
}
.con-d{
    font-size: 16px;
    color: #605e5a;
    float: right;
}
.con-t{
    color: #ef763a;
    font-size: 16px;
}
.orderpay{
    height: 50px;
    border-radius: 5px;
    line-height: 50px;
    text-align: center;
    font-size: 16px;
    color: #ffffff;
    background-color: #E9E4DE;
    float: left;
    margin-left: 1.5%;
    width: 48%;
    display: block;
}
.orderpay img{
    margin-left: 23%;
    width: 50px;
    height: 50px;
    margin-top: 0px;
    float: left;
}
.orderpay span{
    float: left;
    color: #f5956b;
    margin-left: 2%;
    font-size: 16px;
}
.cashorder{
    margin-left: 1%;
    width: 48%;
    display: block;
    height: 50px;
    border-radius: 5px;
    line-height: 50px;
    text-align: center;
    font-size: 16px;
    color: #ffffff;
    background-color: #E9E4DE;
    float: left;
    margin-right: 2px;
}
.cashorder img{
    margin-left: 23%;
    width: 50px;
    height: 50px;
    margin-top: 0px;
    float:left;
}
.cashorder span{
    float: left;
    color: #f5956b;
    margin-left: 2%;
    font-size: 16px;
}
.cporder{
    position: fixed;
    bottom:0%;
    width:100%;
    margin-top:20px;
    background:#fff
}
.k{
    height:70px;
    background:#fff
}
</style>
