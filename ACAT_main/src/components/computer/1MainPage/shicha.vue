<template>
    <div class="main">
        <div class="fonts" ref="fonts">ACAT永远是友爱的“一家人”</div>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    methods: {
        show() {
            this.$refs.fonts.style.opacity = ".9";
        },
        hide() {
            this.$refs.fonts.style.opacity = "0";
        },
    },
};
</script>
<style scoped>
.main {
    position: relative;
    width: 100%;
    height: 100%;
}
.fonts {
    width: 40%;
    height: 5vw;
    background-color: rgb(60, 66, 78);
    color: rgb(255, 255, 255);
    font-size: 2vw;
    font-weight: 600;
    line-height: 5vw;
    margin-top: 23vw;
    z-index: 99;
    transition: 1s ease-in-out;
    opacity: 0;
    opacity: .9;
}
</style>