<template>
    <ul class="nav" @click="change()">
        <li class="line" ref="line1"></li>
        <li class="line line2" ref="line2"></li>
        <li class="line line3" ref="line3"></li>
        <ul class="lists" ref="lists">
            <li class="listFont" :class="{'active':page == 1}" @click="moveto(1)">首页</li>
            <li class="listFont" :class="{'active':page == 2}" @click="moveto(2)">前端组</li>
            <li class="listFont" :class="{'active':page == 3}" @click="moveto(3)">服务端组</li>
            <li class="listFont" :class="{'active':page == 4}" @click="moveto(4)">后台组</li>
            <li class="listFont" :class="{'active':page == 5}" @click="moveto(5)">机器学习</li>
        </ul>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            line: true,
            page: 1,
        };
    },
    methods: {
        change() {
            if (this.line) {
                this.$refs.line1.style.transform = "rotateZ(45deg)";
                this.$refs.line2.style.transform = "rotateZ(-45deg)";
                this.$refs.line3.style.transform = "rotateZ(45deg)";
                this.$refs.lists.style.cssText +=
                    ";display:block;opacity: 1;margin-top: .3vw;";
                return (this.line = false);
            }
            this.$refs.line1.style.transform = "rotateZ(0deg)";
            this.$refs.line2.style.transform = "rotateZ(0deg)";
            this.$refs.line3.style.transform = "rotateZ(0deg)";
            this.$refs.lists.style.cssText += ";opacity: 0;margin-top: -20vw;";
            this.line = true;
        },
        moveto(value) {
            this.page = value;
            this.$emit("value", value);
        },
    },
};
</script>

<style scoped>
.nav {
    position: absolute;
    width: 5vw;
    height: 5vw;
    z-index: 999;
    margin-top: 6vw;
    margin-left: 1vw;
    padding: 0;
    cursor: pointer;
}
.line {
    width: 55%;
    height: 6%;
    background-color: rgb(60, 66, 78, 0.9);
    margin-top: 0.45vw;
    list-style: none;
    margin-left: 12.5%;
    transition: 0.3s ease-in-out;
    transform: rotateZ(0deg);
    transform-origin: 20% 140%;
}
.line2 {
    transform-origin: 50% 50%;
}
.line3 {
    transform-origin: 83% -60%;
}
.lists {
    position: absolute;
    width: 0.3vw;
    height: 20vw;
    background-color: rgb(60, 66, 78, 0.9);
    margin-left: 1vw;
    transition: 0.3s ease-in-out;
    opacity: 0;
    margin-top: -20vw;
    padding: 0;
}
.listFont {
    width: 7vw;
    height: 2vw;
    list-style: none;
    border-bottom: 0.2vw solid rgb(60, 66, 78, 0.9);
    margin-top: 1.3vw;
    font-size: 1.3vw;
    transition: 0.3s ease-in-out;
    margin-left: 0.3vw;
}
.listFont:hover {
    border-bottom: 0.4vw solid rgb(86, 158, 142, 0.9);
    color: rgb(86, 158, 142, 0.9);
    cursor: pointer;
}
.active {
    color: rgb(86, 158, 142, 0.9);
        border-bottom: 0.4vw solid rgb(86, 158, 142, 0.9);

}
</style>