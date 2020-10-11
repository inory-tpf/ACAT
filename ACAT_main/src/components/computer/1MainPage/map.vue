<template>
    <div class="main">
        <div class="mespage"></div>
    </div>    
</template>
<script>
export default {
    
}
</script>
<style scoped>
.main{
    width: 100%;
    height: 100%;
    background-color: silver;
    overflow: hidden;
}
.mespage{
    width: 100%;
    height: 120%;
    background-color: skyblue;
    transform: rotateZ(-80deg);
    margin-left: 55%;
    box-shadow: 0 0 15px rgb(0, 0, 0,.27);
}
</style>