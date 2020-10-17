<template>
    <div class="main" @mousemove = "move">
        <div class="box1">
            <div class="frame" ref="frame"></div>
            <div class="pic1" ref="pic"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            x:0
        };
    },
   methods: {
       move(e){
           this.$refs.frame.style.marginLeft = .001*e.clientX+'vw'
           this.$refs.frame.style.marginTop = .001*e.clientY+'vw'
           this.$refs.pic.style.marginLeft = 2 + .0007*e.clientX+'vw'
           this.$refs.pic.style.marginTop = 2 + .0007*e.clientY+'vw'
       }
   },
};
</script>

<style scoped>
.main {
    width: 100%;
    height: 100%;
}
.box1 {
    position: absolute;
    width: 10vw;
    height: 10vw;
    margin-left: 10vw;
    margin-top: 15vw;
    transition: ease-in-out;
}
.frame {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(95, 177, 159);
        transition: ease-in-out;
        box-shadow: -1vw 1vw 1vw rgb(22, 22, 22,.45);

}
.pic1{
    position: absolute;
    width: 15vw;
    height: 20vw;
    background-color:  rgb(70, 76, 88);
    margin-left: 2vw;
    margin-top: 2vw;
            box-shadow: -1vw 1vw 1vw rgb(22, 22, 22,.45);

}
</style>