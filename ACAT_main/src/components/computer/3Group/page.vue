<template>
    <div class="main">
        <nav_2></nav_2>
        <div class="pages">
            <lineNav @value="moveto"></lineNav>
            <div class="page" :id="5" ref="id5">5</div>
            <div class="page" :id="4" ref="id4">4</div>
            <div class="page" :id="3" ref="id3">3</div>
            <div class="page" :id="2" ref="id2">2</div>
            <div class="page page1" :id="1" ref="id1">1</div>
        </div>
    </div>
</template>
<script>
import nav_2 from "../public/nav_2";
import lineNav from "./lineNav";
export default {
    data() {
        return {
            id: 1,
            line: true,
        };
    },
    components: {
        nav_2,
        lineNav,
    },
    methods: {
        moveto(value) {
            this.id = value;
            console.log(this.id);
        },
    },
    watch: {
        id(value) {
            this.$refs["id" + value].style.zIndex = "99";
                this.$refs["id" + value].style.marginTop = "0vh";
            for (let i = 1; i < value; i++) {
                this.$refs["id" + i].style.zIndex = "10";
                setTimeout(() => {
                    this.$refs["id" + i].style.marginTop = "-200vh";
                }, 1500);
            }
            for (let i = value + 1; i <= 5; i++) {
                this.$refs["id" + i].style.zIndex = "10";
                setTimeout(() => {
                    this.$refs["id" + i].style.marginTop = "-200vh";
                }, 1500);
            }
        },
    },
};
</script>
<style scoped>
.pages {
    width: 100%;
    height: 100vh;
}
.page {
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: rgb(235, 238, 238);
    color: black;
    font-size: 10vw;
    margin-top: -200vh;
    transition: 1.5s ease-in-out;
    box-shadow: 0 0 15px rgb(0, 0, 0);
}
.page1{
    margin-top: 0;
}

</style>