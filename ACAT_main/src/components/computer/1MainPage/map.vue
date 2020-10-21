<template>
    <div class="main">
        <div class="biaoqian">
            <div class="back">
                <div class="item">联系我们</div>
            </div>
        </div>
        <div class="map">
            <div class="mespage" ref="back"></div>
            <div class="mes" ref="msg">
                <div class="logo"></div>
                <div class="logo2"></div>
                <div class="name">计算机应用技术协会</div>
                <div class="place">地点：西区图书馆一楼</div>
                <div class="fonts">纳新群号：88888888</div>
                <div class="fonts">微信公众号：ACAT实验室</div>
                <div class="qq_erwei"></div>
                <div class="wx_erwei"></div>
            </div>
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
        show(){
            this.$refs.back.style.marginLeft = "55%"
            this.$refs.msg.style.opacity= "1"
        },
        hide(){
            this.$refs.back.style.marginLeft = "100%"
            this.$refs.msg.style.opacity= "0"

        },
    }
};
</script>
<style scoped>
.main {
    width: 100%;
    height: 100%;
}
.mespage {
    position: absolute;
    width: 100%;
    height: 120%;
    background-color: rgb(60, 66, 78);
    transform: rotateZ(-80deg);
    margin-left: 100%;
    box-shadow: 0 0 15px rgb(100, 100, 100);
    transition: 1s ease-in-out;
}

.back {
    position: absolute;
    width: 15vw;
    height: 3vw;
    background-color: rgb(60, 66, 78);
    box-shadow: 0 0 15px rgb(100, 100, 100);
    margin-top: 1vw;
    z-index: 99;
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
    box-shadow: 0 0 15px rgb(100, 100, 100);
}
.map {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url("../../../assets/img/联系我们/map.png");
    background-size: 100% auto;
    overflow: hidden;
    box-shadow: 0 0 15px rgb(100, 100, 100);
}
.mes {
    position: absolute;
    width: 20vw;
    height: 40vw;
    /* background-color: rgb(95, 177, 159); */
    z-index: 99;
    right: 0;
    bottom: 0;
    opacity: 0;
    transition: 1s ease-in-out;
}
.logo{
    width: 10vw;
    height: 10vw;
    background-image: url("../../../assets/img/logo/catw.png");
    background-size: 100% 100%;
    margin-left: 4vw;
}
.logo2{
    width: 10vw;
    height: 4vw;
    background-image: url("../../../assets/img/logo/acatw.png");
    background-size: 100% auto;
    margin-left: 4vw;
    background-repeat: no-repeat;
}
.name,.place,.fonts{
    width: 100%;
    height: 2vw;
    color: #fff;
    text-align: left;
    margin-left: 3vw;
    font-size: 1.3vw;
}
.place{
    margin-left: 1.5vw;
    margin-top: 3vw;
}
.fonts{
    margin-left: 1.5vw;

}
.qq_erwei,.wx_erwei{
    float: left;
    width: 8vw;
    height: 10vw;
    background-image: url("../../../assets/img/联系我们/qq纳新二维码.jpg");
    background-size: 100% auto;
    margin-top: 2vw;
}
.wx_erwei{
    margin-left: 1vw;
}
</style>