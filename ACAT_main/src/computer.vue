<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {};
    },
    watch: {},
    created() {  
    // document.body.removeChild(document.getElementById('Loading'))   // 加载页面完后移除加载动画
    }
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
</style>
