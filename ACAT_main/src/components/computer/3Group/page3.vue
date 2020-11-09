<template>
    <div class="main">
        <div class="pages">
            <nav_2></nav_2>
            <lineNav @msg="moveto" ref="linenav"></lineNav>
            <div class="page" :id="5" ref="id5">
                <muban ref="move4" :msg="msg.jqxx"></muban>
            </div>
            <div class="page" :id="4" ref="id4">
                <muban ref="move3" :msg="msg.ht"></muban>
            </div>
            <div class="page" :id="3" ref="id3">
                <muban ref="move2" :msg="msg.fwd"></muban>
            </div>
            <div class="page" :id="2" ref="id2">
                <muban ref="move1" :msg="msg.qd"></muban>
            </div>
            <div class="page page1" :id="1" ref="id1">
                <why @pagevalue="moveto2"></why>
            </div>
        </div>
    </div>
</template>
<script>
import nav_2 from "../public/nav_2";
import lineNav from "./lineNav";
import muban from "./template";
import why from "./why";
import store from "../../../vuex/store";
import { mapState } from "vuex";
export default {
    data() {
        return {
            id: 1,
            line: true,
            pre: "",
        };
    },
    components: {
        nav_2,
        lineNav,
        why,
        muban,
    },
    methods: {
        moveto(msg) {
            this.pre = msg.pre;
            this.id = msg.value;
        },
        moveto2(value) {
            this.pre = 1;
            this.id = value;
            this.$refs.linenav.changenowpage(value);
        },
    },
    watch: {
        id(value) {
            this.$refs["id" + value].style.zIndex = "99";
            this.$refs["id" + value].style.marginTop = "0vh";
            for (let i = 1; i < value; i++) {
                this.$refs["id" + i].style.zIndex = "10";
                setTimeout(() => {
                    this.$refs["id" + i].style.marginTop = "-180vh";
                }, 1200);
            }
            for (let i = value + 1; i <= 5; i++) {
                this.$refs["id" + i].style.zIndex = "10";
                setTimeout(() => {
                    this.$refs["id" + i].style.marginTop = "-180vh";
                }, 1200);
            }
        },
        pre(value) {
            if (value != 1) {
                this.$refs["move" + (value - 1)].changepage();
            }
        },
    },
    store,
    computed: {
        ...mapState(["msg"]),
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
.pages {
    width: 100%;
    height: 100vh;
    overflow: hidden;
}
.page {
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: #ebeeee;
    color: black;
    font-size: 10vw;
    margin-top: -180vh;
    transition: 1.2s ease-in-out;
    box-shadow: 0 0 15px rgb(0, 0, 0);
}
.page1 {
    margin-top: 0;
}
</style>