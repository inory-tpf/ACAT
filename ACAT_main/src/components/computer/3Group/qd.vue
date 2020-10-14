<template>
    <div class="main">
        <div class="fullpage-container">
            <div class="fullpage-wp" v-fullpage="opts" ref="example">
                <div class="page color">1前端</div>
                <div class="page color3">2</div>
                <div class="page color2">3</div>
                <div class="page color3">4</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "qd",
    data() {
        return {
            opts: {
                start: 0,
                dir: "h",
                duration: 300,
                page: 0,
                beforeChange: function (prev, next) {},
                afterChange: function (prev, next) {},
            },
            page: 0,
        };
    },
    methods: {
        changepage(){
            this.$refs.example.$fullpage.moveTo(0)
        }
    },
    watch: {
    },
    components: {},
};
</script>

<style scoped>
.main {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: aqua;
}
.fullpage-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
}
.color {
    background-color: rgb(235, 238, 238);
}
.color2 {
    background-color: springgreen;
}
.color3 {
    background-color: steelblue;
}
</style>