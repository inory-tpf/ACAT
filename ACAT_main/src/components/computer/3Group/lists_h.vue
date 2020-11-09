<template>
    <div class="main2">
        <ul class="nav_line">
            <li
                @click="moveto(0)"
                class="item1"
                :class="{ active: ownpage == 0 }"
            ></li>
            <li
                class="item"
                @click="moveto(1)"
                :class="{ active: ownpage == 1 }"
            ></li>
            <li
                class="item"
                @click="moveto(2)"
                :class="{ active: ownpage == 2 }"
            ></li>
            <li
                class="item"
                @click="moveto(3)"
                :class="{ active: ownpage == 3 }"
            ></li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            ownpage: "",
        };
    },
    methods: {
        moveto(value) {
            this.$parent.move(value);
        },
        change() {
            this.ownpage = 0;
        },
    },
    props: {
        page: Number,
    },
    watch: {
        page(value) {
            this.ownpage = value;
        },
    },
};
</script>
<style scoped>
.main2 {
    position: absolute;
    width: 10vw;
    height: 3vw;
    left: 50%;
    margin-left: -5vw;
    z-index: 9999;
    bottom: 0;
}
.nav_line {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}
.item,
.item1 {
    list-style: none;
    float: left;
    width: 0.5vw;
    height: 0.5vw;
    border-radius: 50%;
    background-color: rgb(235, 238, 238);
    border: 0.15vw solid rgb(60, 66, 78);
    margin-left: 1.3vw;
    margin-top: 1vw;
    cursor: pointer;
}
.active {
    background-color: rgb(60, 66, 78);
}
</style>