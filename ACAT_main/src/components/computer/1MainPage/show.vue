<template>
    <div class="main" ref="pic">
        <div class="back"></div>
        <div class="picplace" @mousewheel.prevent="rollImg">
            <div ref="imgDiv" class="pic">
                <img @mousedown="move" :src="piclist[this.value - 1]" />
            </div>
        </div>
        <div class="close" @click="close"></div>
    </div>
</template>
<script>
import store from "@/vuex/store";
import { mapState } from "vuex";
export default {
    data() {
        return {
            piclist: [
                require("../../../assets/img/照片墙/1.jpg"),
                require("../../../assets/img/照片墙/2.jpg"),
                require("../../../assets/img/照片墙/3.jpg"),
                require("../../../assets/img/照片墙/4.jpg"),
                require("../../../assets/img/照片墙/5.jpg"),
                require("../../../assets/img/照片墙/6.jpg"),
                require("../../../assets/img/照片墙/7.jpg"),
                require("../../../assets/img/照片墙/8.jpg"),
                require("../../../assets/img/照片墙/9.jpg"),
                require("../../../assets/img/照片墙/10.jpg"),
            ],
        };
    },
    store,
    computed: {
        ...mapState(["value", "picstate"]),
    },
    watch: {
        picstate() {
            if (this.picstate == "true") {
                this.$refs.pic.style.cssText += ";display:block";
            }
            if (this.picstate == "false") {
                this.$refs.pic.style.cssText += ";display:none";
            }
        },
    },
    methods: {
        move(e) {
            e.preventDefault();
            // 获取元素
            var left = document.querySelector(".picplace");
            var img = document.querySelector(".pic");
            var x = e.pageX - img.offsetLeft;
            var y = e.pageY - img.offsetTop;

            // 添加鼠标移动事件
            left.addEventListener("mousemove", move);
            function move(e) {
                img.style.left = e.pageX - x + "px";
                img.style.top = e.pageY - y + "px";
                console.log(img.style.left);
            }
            // 添加鼠标抬起事件，鼠标抬起，将事件移除
            img.addEventListener("mouseup", function () {
                left.removeEventListener("mousemove", move);
            });
            // 鼠标离开父级元素，把事件移除
            left.addEventListener("mouseout", function () {
                left.removeEventListener("mousemove", move);
            });
        },
        // 缩放图片
        rollImg() {
            /* 获取当前页面的缩放比 若未设置zoom缩放比，则为默认100%，即1，原图大小 */
            var zoom = parseInt(this.$refs.imgDiv.style.zoom) || 100;
            /* event.wheelDelta 获取滚轮滚动值并将滚动值叠加给缩放比zoom wheelDelta统一为±120，其中正数表示为向上滚动，负数表示向下滚动 */
            zoom += event.wheelDelta / 12;
            /* 最小范围 和 最大范围 的图片缩放尺度 */
            if (zoom >= 80 && zoom < 150) {
                this.$refs.imgDiv.style.zoom = zoom + "%";
            }
            return false;
        },
        close() {
            console.log(this.value);
            this.$store.commit("change", [this.value, "false"]);
            this.$refs.imgDiv.style.cssText += ";left:0%;top:0px";
            this.$refs.imgDiv.style.zoom = "100%";
        },
    },
};
</script>
<style scoped>
.main {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    display: none;
}
.back {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0);
    opacity: 0.3;
}
.picplace {
    width: 60vw;
    height: 35vw;
    margin-left: 50%;
    margin-top: 25%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    overflow: hidden;
}
.pic {
    position: relative;
}
img {
    max-width: 923px;
    max-height: 460px;
}
.close {
    position: absolute;
    width: 3vw;
    height: 3vw;
    cursor: pointer;
    right: 6vw;
    top: 4vw;
    background-image: url("../../../assets/img/icon/关闭.png");
    background-size: 100% 100%;
    transition: 0.3s ease-in-out;
}
.close:hover {
    transform: rotate(90deg);
}
</style>