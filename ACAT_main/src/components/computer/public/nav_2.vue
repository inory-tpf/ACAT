<template>
<div class="main">
    <div class="nav">
            <div class="logo" @click="tp(0)"></div>
            <ul class="nav-list">
                <li class="item" @click="tp(1)">了解我们</li>
                <li class="item" @click="tp(2)">组别介绍</li>
                <li class="item" @click="tp(3)">博客</li>
                <li class="item" @click="tp(4)">加入我们</li>
            </ul>
        </div>    
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    methods:{
        tp(num){
            if(num === 0){
                this.$router.replace('/')
            }
            if(num === 1){
                this.$router.replace('/history')
            }
            if(num === 2){
                this.$router.replace('/group')
            }
            if(num === 3){
                //跳转至博客
            }
            if(num === 4){
                //跳转至纳新界面
            }
        }
    }
}
</script>
<style scoped>
.main{
    position: absolute;
    width: 100%;
    height: 5vw;
}
.nav{
    position: relative;
    width: 100%;
    height: 5vw;
    z-index: 999;
    background-color:rgb(60,66,78,.9);
    box-shadow: 0 0 15px rgb(60,66,78,.8);
}
.logo{
    width: 13%;
    height: 4vw;
    margin-top: .5vw;
    margin-left: 1%;
    float: left;
    background-image: url("../../../assets/logo/acatw.png");
    background-size: auto 100%;
    background-repeat: no-repeat;
}
.nav-list{
    float: left;
    width: 70vw;
    height: 4vw;
    margin-top: .5vw;
}   
.item{
    float: left;
    width: 10vw;
    list-style: none;
    height: 100%;
    margin-left: 1vw;
    font-size: 1.5vw;
    text-align: center;
    line-height: 4vw;
    color: rgb(255, 255, 255,.85);
    font-weight: 600;
    transition: .5s ease-in-out;
}
.item:hover{
    cursor: pointer;
    color: rgb(255, 255, 255);
}
</style>