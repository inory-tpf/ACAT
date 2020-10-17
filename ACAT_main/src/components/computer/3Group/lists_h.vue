<template>
    <div class="main">
            <ul class="nav_line">
                <li @click="moveto(0)" class="item1" :class="{'active':page==0}"></li>
                <li class="item" @click="moveto(1)" :class="{'active':page==1}"></li>
                <li class="item" @click="moveto(2)" :class="{'active':page==2}"></li>
                <li class="item" @click="moveto(3)" :class="{'active':page==3}"></li>
            </ul>    
    </div>    
</template>
<script>
export default {
    data() {
        return {
        }
    },
    methods:{
        moveto(value){
            this.$parent.move(value)
        }
    },
    props:{
        page : Number
    }
}
</script>
<style scoped>
    .main{
        position: absolute;
        width: 10vw;
        height: 3vw;
        left: 50%;
        margin-left: -5vw;
        z-index: 99;
        bottom: 0;
    }
    .nav_line{
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
    }
    .item,.item1{
        list-style: none;
        float: left;
        width: .5vw;
        height: .5vw;
        border-radius: 50%;
        background-color:rgb(235, 238, 238);
        border: .15vw solid rgb(60,66,78,.7);
        margin-left: 1.3vw;
        margin-top: 1vw;
    }
    .item1{

    }
    .active{
        background-color: rgb(60,66,78);
    }
</style>