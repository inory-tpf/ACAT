<template>
    <div class="main">
        <lists :page="page" ref="list"></lists>
        <mengban v-if="msg.id == 3"></mengban>
        <div class="fullpage-container">
            <div class="fullpage-wp" v-fullpage="opts" ref="example">
                <div class="page"><mainpage :msg="msg2"></mainpage></div>
                <div class="page"><page1 :msg="msg2"></page1></div>
                <div class="page"><page2 :msg="msg2"></page2></div>
                <div class="page"><page3 :msg="msg2"></page3></div>
            </div>
        </div>
    </div>
</template>

<script>
import mainpage from "./模板页面/mainpage";
import page1 from "./模板页面/page1";
import page2 from "./模板页面/page2";
import page3 from "./模板页面/page3";
import lists from "./lists_h";
import mengban from "./mengban";
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
                afterChange: function (prev, next) {
                    this.opts.page = next;
                },
            },
            page: 0,
            msg2: "",
        };
    },
    methods: {
        changepage() {
            this.$refs.example.$fullpage.moveTo(0);
            this.$refs.list.change();
        },
        move(value) {
            this.$refs.example.$fullpage.moveTo(value);
            this.page = value;
        },
        switch(value) {
            this.msg2 = ''
            this.msg2 = this.msg[value];
            this.changepage()
        },
    },
    watch: {
        "opts.page"() {
            this.page = this.opts.page;
        },
    },
    components: {
        mainpage,
        page1,
        page2,
        page3,
        lists,
        mengban,
    },
    props: ["msg"],
    mounted() {
        this.msg2 = this.msg;
    },
};
</script>

<style scoped>
.main {
    position: relative;
    width: 100vw;
    height: 100%;
}
.fullpage-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
}
</style>