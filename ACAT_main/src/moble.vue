<template>
    <div id="moble">
        <router-view />
    </div>
</template>

<script>
export default {
    name: "moble",
    data() {
        return {};
    },
    created() {
        if (document.getElementById("Loading")) {
            document.body.removeChild(document.getElementById("Loading")); // 加载页面完后移除加载动画
        }
    },
};
</script>

<style>
#moble {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
}
h1 {
    margin: 0;
    padding: 0;
}
h2 {
    margin: 0;
    padding: 0;
}
ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
}
p {
    margin: 0;
}
</style>
