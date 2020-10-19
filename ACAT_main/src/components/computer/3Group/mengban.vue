<template>
    <div class="main" ref="mengban">
        <div class="java" @click="submit('java')">
            <div class="bigfonts">JAVA</div>
            <div class="smallfonts">这里是文字这里是文字</div>
        </div>
        <div class="go" @click="submit('go')">
            <div class="bigfonts">GO</div>
            <div class="smallfonts">这里是文字这里是文字</div>
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
        submit(value){
            this.$parent.switch(value)
            this.$refs.mengban.style.marginTop = "-100vh"
        },
        pull(){
            this.$refs.mengban.style.marginTop = "0"
        }
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
}
.java,
.go {
    float: left;
    width: 50vw;
    height: 100%;
    background-color: aqua;
}
.go {
    background-color: bisque;
}
.bigfonts {
    font-size: 6vw;
    text-align: left;
    margin-top: 20vw;
    margin-left: 5vw;
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
.line{
    position: absolute;
    width: .2vw;
    height: 10vw;
    background-color: rgb(60, 66, 78);
    right: 2vw;
    bottom: -10vw;
}
.pull{
    width: 1vw;
    height: 1vw;
    border-radius: 50%;
    border:.2vw solid rgb(60, 66, 78);
    margin-top: 10vw;
    margin-left: -.6vw;
    cursor: pointer;
}
</style>