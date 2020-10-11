<template>
    <div class="main">
        <div class="frame">
            <div class="fontsPlace"></div>
            <ul class="picPlace">
                <li class="pic1">1</li>
                <li class="pic2">2</li>
                <li class="pic3">3</li>
                <li class="pic4">4</li>
                <li class="pic5">5</li>
                <li class="pic6">6</li>
                <li class="pic7">7</li>
                <li class="pic8">8</li>
                <li class="pic9">9</li>
                <li class="pic10">10</li>
                <div class="mengban"></div>
            </ul>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.main{

    width: 100%;
    height: 100%;
}
.frame{
    overflow: hidden;
    width: 100%;
    height: 40vw;
    margin-top: 5vw;
    box-shadow: 0 0 15px rgb(0, 0, 0,.4);
}
.fontsPlace{
    float: left;
    width: 30%;
    height: 100%;
    background-color: #ffffff;
}   
.picPlace{
    float: left;
    width: 70%;
    height: 100%;
    background-color:#ffffff;
    overflow: hidden;
    margin: 0;
    padding: 0;
}
.pic1,.pic2,.pic3,.pic4,.pic5,.pic6,.pic7,.pic8,.pic9,.pic10{
    float: left;
    width: 20%;
    height: 20%;
    background-color: skyblue;
    list-style: none;
    margin-left: 1%;
    margin-top: .5vw;
    box-shadow: 3px 3px 9px rgb(0, 0, 0,.6);
}
.pic1{
    height: 45%;
}
.pic6{
    height: 45%;
    margin-top: -13.7%;
}
.pic4{
    width: 15%;
    height: 45%;
}
.pic3{
    width: 40%;
    height: 45%;

}
.pic7{
    width: 15%;
    height: 51.1%;
}
.pic8{
    width: 40%;
    height: 25%;
}
.pic9{
    width: 40%;
    height: 25%;
}
.pic10{
    width: 41%;
    height: 29.7%;
    margin-top: -17.3%;
}
@keyframes group1 {
    from{
        transform: rotateX(0deg);
    }
    to{
        transform: rotateX(180deg);
    }
}
/* .mengban{
    position: absolute;
    width: 70%;
    height: 40vw;
    
} */
</style>