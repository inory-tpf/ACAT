<template>
    <div class="main">
        <div class="biaoqian">
            <div class="back">
                <div class="item">实验室简介</div>
            </div>
        </div>
         <div class="border1"></div>
        <div class="border2"></div>
        <div class="border3"></div>
        <div class="border4"></div>
        <div class="logo"></div>
        <div class="logo2"></div>
        <div class="fonts">
            这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
    width: 100%;
    height: 100%;
}
.biaoqian {
    position: relative;
    width: 100%;
    height: 8vw;
}
.back {
    position: absolute;
    width: 15vw;
    height: 3vw;
    background-color: rgb(60, 66, 78);
    box-shadow: 0 0 15px rgb(0, 0, 0, 0.8);
    margin-top: 4vw;
}
.item {
    width: 80%;
    height: 100%;
    background-color: rgb(95, 177, 159);
    margin-left: 5vw;
    margin-top: 1vw;
    color: #fff;
    font-size: 1.5vw;
    font-weight: 600;
    line-height: 3vw;
    letter-spacing: 0.3vw;
    box-shadow: 0 0 15px rgb(0, 0, 0, 0.8);
}
.fonts {
    width: 80vw;
    color: rgb(60, 66, 78);
    font-size: 1.7vw;
    text-align: left;
    margin-left: 10%;
    text-indent: 3vw;
    letter-spacing: 0.15vw;
    line-height: 2.5vw;
    margin-top: 5vw;
}
.border1,.border2,.border3,.border4{
    position: absolute;
    width: .2vw;
    height: 10vw;
    background-color: rgb(60, 66, 78);
    margin-left: 7vw;
    margin-top: 5vw;
        background-color: rgb(95, 177, 159);

}
.border2,.border4{
    width: 25vw;
    height: .2vw;
    margin-left: 8vw;
    margin-top: 3vw;
    background-color: rgb(60, 66, 78);
}
.border3{
    margin-left: 92vw;
    margin-top:8vw;
}
.border4{
    margin-top: 19vw;
    margin-left: 65vw;
}
.logo{
    position: absolute;
    width: 5vw;
    height: 5vw;
    background-image: url("../../../assets/logo/pic.png");
    background-size: 100% auto;
    right: 6vw;
}
.logo2{
    position: absolute;
    width: 10vw;
    height: 5vw;
    background-image: url("../../../assets/logo/text.png");
    background-size: 100% auto;
    margin-top: 17vw;
    margin-left: 3vw;

}
</style>