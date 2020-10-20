<template>
    <div class="main">
        <ul class="nav_line">
            <li
                @click="moveto(0)"
                class="item1"
                :class="{ active: page == 0 }"
            ></li>
            <li
                class="item"
                @click="moveto(1)"
                :class="{ active: page == 1 }"
            ></li>
            <li
                class="item"
                @click="moveto(2)"
                :class="{ active: page == 2 }"
            ></li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    methods: {
        moveto(value) {
            this.$parent.move(value);
        },
    },
    props: {
        page: Number,
    },
};
</script>
<style scoped>
.main {
    position: absolute;
    width: 20%;
    height: 100%;
    right: 0%;
    overflow: hidden;
}
.nav_line {
    float: left;
    width: 2%;
    height: 80%;
    padding: 0;
    margin-top: 40%;
    margin-left: 18vw;
}
.item,
.item1 {
    list-style: none;
    width: 0.5vw;
    height: 0.5vw;
    margin-top: 1.5vw;
    border-radius: 50%;
    margin-left: -0.8vw;
    background-color: rgb(235, 238, 238);
    border: 0.15vw solid rgb(60, 66, 78, 0.7);
}
.item1 {
    margin-top: 25vh;
}
.active {
    background-color: rgb(60, 66, 78);
}
</style>