<template>
    <div id="app">
        <transition :name="transitionName">
            <router-view v-if="isRouterAlive"></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            transitionName: "",
            isRouterAlive: true,
        };
    },
    watch: {
        $route(to, from) {
            //如果to索引大于from索引,判断为前进状态,反之则为后退状态
            if (to.meta.index > from.meta.index) {
                //设置动画名称
                this.transitionName = "slide-left";
            } else {
                this.transitionName = "slide-right";
            }
        },
    },
    created() {
        document.body.removeChild(document.getElementById("Loading")); // 加载页面完后移除加载动画
    },
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
::selection {
    background-color: rgb(86, 158, 142, 0.9);
    color: #000;
}
::-webkit-selection {
    background-color: rgb(86, 158, 142, 0.9);
    color: #000;
}
::-moz-selection {
    background-color: rgb(86, 158, 142, 0.9);
    color: #000;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
    will-change: transform;
    transition: all 800ms;
    position: absolute;
}
.slide-right-enter {
    opacity: 0;
}
.slide-right-leave-active {
    opacity: 0;
}
.slide-left-enter {
    opacity: 0;
}
.slide-left-leave-active {
    opacity: 0;
}
</style>
