<template>
    <div>
        <van-tabbar v-model="active">
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
        </van-tabbar>
    </div>
</template>
<script>
export default {
    data(){
        return{
            active:0,
            icon: {
                normal: require('../assets/shouye.png'),
                active: require('../assets/shouye1.png')
            },
            me: {
                normal: require('../assets/yonghu.png'),
                active: require('../assets/yonghu1.png')
            },
            currentIndex:[
                {isSelect:true},
                {isSelect:false},
                {isSelect:false},
                {isSelect:false}
            ]
        }
    },
    methods:{
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
