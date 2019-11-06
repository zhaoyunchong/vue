<template>
    <div>
        <!--酒水 锚点-->
                <div class="card" v-for="(item,i) of drinks" :key="i">         
                    <!-- 左边图片 -->
                    <div class="card-img">
                        <img src="../../../assets/zhu_1.jpg" alt="">
                    </div>
                    <!-- 右边详情 -->
                    <div class="card-title">
                        <div class="card-main">{{item.spname}}</div>
                        <div class="card-minor">{{item.details}}</div>
                        <div class="card-price">¥{{item.price.toFixed(2)}}</div>
                    </div>
                    <!-- 右下角加减 -->
                    <div class="cart-add">
                        <!-- 减号 -->
                        <div class="cart-reduce" @click="sub5"><img src="../../../assets/jian.png" :data-i="i"></div>
                        <span class="cart-inner">0</span>
                        <!-- 加号 -->
                        <div class="cart-push" @click="add5"><img src="../../../assets/jia.png"  :data-i="i"></div>
                    </div>
                </div>
    </div>
</template>
<script>
export default {
    props: {
      //接收父组件传来的值
      data: Number
    },
    data(){
        return {
             drinks:[],
        }
    },
    created(){
          var url = "http://zhaoyunchong.applinzi.com/food";
          var id = 3;
          var obj = {typeid:id}
          this.axios.get(url,{params:obj}).then(res=>{
              console.log(res.data.data);
              var f = res.data.data;
              for(var i=0;i<f.length;i++){
                  if(f[i].typeid==3){
                      this.drinks.push(f[i]);
                  }
              }
            // this.list = res.data.data
              console.log(this.drinks)
          })
    },
    methods:{
        add5(event){
          var num=event.target.parentNode.previousElementSibling.innerHTML;
          console.log(event.target.dataset)
          var i=event.target.dataset.i;
          console.log(i)
          num++;
          event.target.parentNode.previousElementSibling.innerHTML=num;
          if(num>0){
              event.currentTarget.previousElementSibling.style.display="inline-block";
              event.currentTarget.previousElementSibling.previousElementSibling.style.display="inline-block";
          }
          this.drinks.push({"spname":this.list[i].spname,"price":this.list[i].price,"num":event.target.parentNode.previousElementSibling.innerHTML});
          var n = this.drinks.length;
          console.log(n)
        //   console.log(this.all[0].spname)
          for(var a=0;a<n-1;a++){
            if(n>1){
                if(this.drinks[n-1].spname==this.drinks[a].spname){
                    if((n-1)>a){
                    this.drinks.splice(a,1)
                    a+=2
            this.$store.commit('add',this.drinks);
            this.$store.commit('sub',this.drinks);
            this.$emit("changeComponent1Data", 1)
                    }
                }
            }
            }
      },
      sub5(event){
          var num=event.target.parentNode.nextElementSibling.innerHTML;
          var i=event.target.dataset.i;
          var n = this.drinks.length;
          if(num>1){
            num--
            num = num;
              for(var a=0;a<n-1;a++){
                if(n>1){
                if(this.drinks[n-1].spname==this.drinks[a].spname){
                    if((n-1)>a){
                    this.$store.commit('sub1',a-1);
                    a+=2
                    }
                }
            }
            }
            console.log(this.$store.state.list)
            console.log(this.drinks)
          }else{
            event.currentTarget.style.display="none"
            event.currentTarget.nextElementSibling.style.display="none"
            num--;
          }
          event.target.parentNode.nextElementSibling.innerHTML=num;
      },
    }
}
</script>
<style scoped>
.cantent-item2{
    width: 75%;/*宽度设置百分百让其充满*/
    text-align:left;
    /* float: right; */
    position:absolute;
    right:0;
}
/*测试*/
.swipt-img{
    width: 100%;
    height: 100%;
}
/*修改侧边栏原组件的背景*/
.van-sidebar-item,.van-sidebar{
    width: 100%;
    background-color: #ccc;
}
.card{
    width: 100%;
    height: 90px;
    border-top:1px solid #ccc;
    position: relative;
}
.card-img>img{
    height: 90px;
}
.card-title{
    position: absolute;
    left: 135px;
    top:0;
}
.card-main{
    width: 200px;
    font-size: 18px;
    font-weight: 500;
    line-height: 32px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.card-minor{
    width: 100px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.card-minor,.card-price{
    font-size: 14px;
    line-height: 32px;
}
.cart-add{
    position: absolute;
    bottom: 0;
    right: 0;
}
.cart-push{
    display: inline-block;
}
.cart-inner{
    line-height: 20px;
    display: none;
}
.cart-reduce{
    display: none;
}
.cart-reduce>img{
    width: 30px;
    vertical-align:middle;
}
.cart-push>img{
    width: 30px;
    vertical-align:middle;
}
</style>