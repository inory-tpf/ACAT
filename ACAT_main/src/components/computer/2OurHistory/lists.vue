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
        width: 20%;
        height: 100%;
        right: 0%;
        overflow: hidden;
    }
    .nav_line{
        float: left;
        width: 2%;
        height: 80%;
        background-color:rgb(60,66,78,.7);
        padding: 0;
        margin-top: 40%;
        margin-left: 18vw;
    }
    .item,.item1{
        list-style: none;
        width: 1.3vw;
        height: 1.3vw;
        margin-top: 1.5vw;
        border-radius: 50%;
        margin-left: -.8vw;
        background-color:rgb(235, 238, 238);
        border: .35vw solid rgb(60,66,78,.7);
    }
    .item1{
        margin-top: 25vh;
    }
    .active{
        background-color: rgb(60,66,78);
    }
</style>