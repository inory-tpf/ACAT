<template>
    <div class="main">
        <nav2 class="nav2"></nav2>
        <lists class="lists" :page="page"></lists>
        <div class="title-line">
            <div class="fonts">{{ fonts[page] }}</div>
        </div>
        <div class="fullpage-container">
            <div class="fullpage-wp" v-fullpage="opts" ref="example">
                <div class="page color">
                    <history :page="opts.page"></history>
                </div>
                <div class="page color">
                    <achieve :page="opts.page"></achieve>
                </div>
                <div class="page color">
                    <env :page="opts.page"></env>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import nav2 from "../public/nav_2";
import lists from "./lists";
import achieve from "./achieve";
import history from "./history";
import env from "./environment";
export default {
    data() {
        return {
            opts: {
                start: 0,
                dir: "v",
                duration: 200,
                page: 0,
                beforeChange: function (prev, next) {},
                afterChange: function (prev, next) {
                    this.opts.page = next;
                },
            },
            page: 0,
            fonts: ["ACAT的创始", "实验室成果", "实验室环境"],
        };
    },
    methods: {
        moveNext() {
            this.$refs.example.$fullpage.moveNext();
        },
        move(value) {
            this.$refs.example.$fullpage.moveTo(value);
            this.opts.page = value;
        },
    },
    components: {
        nav2,
        lists,
        history,
        achieve,
        env,
    },
    watch: {
        "opts.page": {
            handler: function () {
                this.page = this.opts.page;
            },
            deep: true,
            immediate: true,
        },
    },
    created() {
        setTimeout(() => {
            if (document.getElementById("Loading")) {
                document.body.removeChild(document.getElementById("Loading")); // 加载页面完后移除加载动画
            }
        }, 500);
    },
};
</script>

<style scoped>
.main {
    width: 100%;
    height: 100vh;
}
.nav2 {
    z-index: 99;
    width: 100%;
    height: 5vw;
}
.lists {
    position: fixed;
    z-index: 99;
}
.page-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}
.color {
    background-color: rgb(235, 238, 238);
}

.title-line {
    position: absolute;
    width: 0.2vw;
    height: 30vw;
    z-index: 99;
    background-color: rgb(60, 66, 78);
    margin-left: 4vw;
    margin-top: 12vw;
}
.fonts {
    position: absolute;
    width: 2vw;
    height: 60%;
    background-color: rgb(235, 238, 238);
    margin-top: 6.5vw;
    margin-left: -0.8vw;
    color: rgb(60, 66, 78);
    font-size: 2vw;
    line-height: 2vw;
    letter-spacing: 0.7vw;
    font-weight: 600;
    writing-mode: vertical-lr;
    text-align: center;
}
</style>