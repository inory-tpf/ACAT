<template>
    <div class="main" ref="mengban">
        <div class="java" @click="submit('java')">
            <!-- <div class="bigfonts">JAVA</div>
            <div class="smallfonts">这里是文字这里是文字</div> -->
            <div class="mengban1" ref="mb1"></div>
        </div>
        <div class="go" @click="submit('go')">
            <!-- <div class="bigfonts"></div>
            <div class="smallfonts">这里是文字这里是文字</div> -->
            <div class="mengban2" ref="mb2"></div>
        </div>
        <div class="line" @click="pull">
            <div class="pull"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        submit(value) {
            this.$parent.switch(value);
            this.$refs.mengban.style.marginTop = "-100vh";
        },
        pull() {
            this.$refs.mengban.style.marginTop = "0";
        },
        // hover(value){
        //     if(value==1){
        //         this.$refs.mb1.style.height = "100%"
        //         this.$refs.mb2.style.height = "0%"
        //     }

        //     if(value==2){
        //         this.$refs.mb2.style.height = "100%"
        //         this.$refs.mb1.style.height = "0%"
        //     }
        // }
    },
};
</script>

<style scoped>
.main {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 999;
    transition: 1s ease-in-out;
    background-color: rgb(235, 238, 238);
}
.java,
.go {
    position: relative;
    float: left;
    width: 50vw;
    height: 100%;
    background-image: url("../../../assets/img/组别/后台/java/logo2.png");
    background-size: auto 80%;
    background-repeat: no-repeat;
    background-position: -2vw 5vw;
}
.go {
    background-image: url("../../../assets/img/组别/后台/go/logo.png");
    background-position: 0 15vw;
    background-size: auto 50%;
}
.mengban1,
.mengban2 {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(60, 66, 78);
    opacity: 0.2;
    transition: 0.5s ease-in-out;
}
.java:hover .mengban1,
.go:hover .mengban2 {
    opacity: 0;
    cursor: pointer;
}
.bigfonts {
    font-size: 6vw;
    text-align: left;
    margin-top: 30vw;
    margin-left: 3vw;
    font-weight: 600;
    color: rgb(60, 66, 78);
}
.smallfonts {
    font-size: 3.5vw;
    text-align: left;
    margin-left: 8vw;
    font-weight: 600;
    color: rgb(60, 66, 78);
    letter-spacing: 0.3vw;
}
.line {
    position: absolute;
    width: 0.2vw;
    height: 10vw;
    background-color: rgb(60, 66, 78);
    right: 2vw;
    bottom: -10vw;
}
.pull {
    width: 1vw;
    height: 1vw;
    border-radius: 50%;
    border: 0.2vw solid rgb(60, 66, 78);
    margin-top: 10vw;
    margin-left: -0.6vw;
    cursor: pointer;
}
</style>