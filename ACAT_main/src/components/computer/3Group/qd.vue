<template>
    <div class="main">
        <lists :page="page" ref="list"></lists>
        <div class="fullpage-container">
            <div class="fullpage-wp" v-fullpage="opts" ref="example">
                <div class="page color"><mainpage></mainpage></div>
                <div class="page color3"><page1></page1></div>
                <div class="page color2"><page2></page2></div>
                <div class="page color3"><page3></page3></div>
            </div>
        </div>
    </div>
</template>

<script>
import mainpage from "./前端/mainpage"
import page1 from "./前端/page1"
import page2 from "./前端/page2"
import page3 from "./前端/page3"
import lists from "./lists_h"
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
                    this.opts.page = next
                },
            },
            page: 0,
        };
    },
    methods: {
        changepage(){
            this.$refs.example.$fullpage.moveTo(0)
            this.$refs.list.change()
        },
        move(value){
            this.$refs.example.$fullpage.moveTo(value)
            this.page = value
        }
    },
    watch: {
        "opts.page"(){
            this.page = this.opts.page
        }
    },
    components: {
        mainpage,
        page1,
        page2,
        page3,
        lists,
    },
};
</script>

<style scoped>
.main {
    position: relative;
    width: 100%;
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