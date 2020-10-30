<template>
    <div class="main">
        <div class="show"></div>
        <div class="biaoqian">
            <div class="back">
                <div class="item">照片墙</div>
            </div>
        </div>
        <div class="frame">
            <div class="fontsPlace">
                <div class="font1">匆匆岁月</div>
                <div class="font2">时光剪影</div>
            </div>
            <ul class="picPlace">
                <li
                    v-for="index of 10"
                    :class="'pic' + index"
                    :key="index"
                    @mouseleave="leave"
                    @click="show(index)"
                >
                    <div
                        class="mengban"
                        :ref="'judge' + index"
                        @mouseenter="trans(index)"
                    ></div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import store from "@/vuex/store"
import {mapState} from "vuex"
export default {
    data() {
        return {};
    },
    methods: {
        trans(value) {
            this.$refs["judge" + value][0].style.cssText +=
                ";background-color:transparent;";
            for (let i = 1; i < value; i++) {
                this.$refs["judge" + i][0].style.cssText +=
                    ";background-color:rgb(0,0,0);";
            }
            for (let i = value + 1; i <= 10; i++) {
                this.$refs["judge" + i][0].style.cssText +=
                    ";background-color:rgb(0,0,0);";
            }
        },
        leave() {
            for (let i = 1; i <= 10; i++) {
                this.$refs["judge" + i][0].style.cssText +=
                    ";background-color:transparent;";
            }
        },
        show(value){
            this.$store.commit('change',[value,'true'])
        }
    },
    computed:mapState(['value']),
    store
};
</script>
<style scoped>
.main {
    width: 100%;
    height: 100%;
}

.frame {
    width: 100%;
    height: 40vw;
    margin-top: 1vw;
    box-shadow: 0 0 15px rgb(100, 100, 100);
}
.fontsPlace {
    float: left;
    width: 30%;
    height: 100%;
    background-color: rgb(60, 66, 78);
}
.picPlace {
    float: left;
    width: 70%;
    height: 100%;
    background-color: rgb(60, 66, 78);
    margin: 0;
    padding: 0;
}
.pic1,
.pic2,
.pic3,
.pic4,
.pic5,
.pic6,
.pic7,
.pic8,
.pic9,
.pic10 {
    float: left;
    width: 20%;
    height: 20%;
    background-color: skyblue;
    list-style: none;
    margin-left: 1%;
    margin-top: 0.5vw;
    box-shadow: 0 0 15px rgb(0, 0, 0);
    transition: 0.3s ease-in-out;
}
.pic1 {
    height: 45%;
    background-image: url("../../../assets/img/照片墙/1.jpg");
    background-size: 100% auto;
}
.pic6 {
    height: 45%;
    margin-top: -13.7%;
    background-image: url("../../../assets/img/照片墙/6.jpg");
    background-size: auto 100%;
}
.pic4 {
    width: 15%;
    height: 45%;
    background-image: url("../../../assets/img/照片墙/4.jpg");
    background-size: auto 100%;
}
.pic3 {
    width: 40%;
    height: 45%;
    background-image: url("../../../assets/img/照片墙/3.jpg");
    background-size: 100% auto;
}
.pic7 {
    width: 15%;
    height: 51.1%;
    background-image: url("../../../assets/img/照片墙/7.jpg");
    background-size: auto 100%;
    background-position: 70% 0;
}
.pic8 {
    width: 40%;
    height: 25%;
    background-image: url("../../../assets/img/照片墙/8.jpg");
    background-size: 100% auto;
    background-position: 0 40%;
}
.pic9 {
    width: 40%;
    height: 25%;
    background-image: url("../../../assets/img/照片墙/9.jpg");
    background-size: 100% auto;
    background-position: 0 80%;
}
.pic10 {
    width: 41%;
    height: 29.7%;
    margin-top: -17.3%;
    background-image: url("../../../assets/img/照片墙/10.jpg");
    background-size: 100% auto;
    background-position: 0 50%;
}
.pic5 {
    background-image: url("../../../assets/img/照片墙/5.jpg");
    background-size: 100% auto;
    background-position: 0 80%;
}
.pic2 {
    background-image: url("../../../assets/img/照片墙/2.jpg");
    background-size: 100% auto;
    background-position: 0 40%;
}
@keyframes group1 {
    from {
        transform: rotateX(0deg);
    }
    to {
        transform: rotateX(180deg);
    }
}
.pic1:hover,
.pic2:hover,
.pic3:hover,
.pic4:hover,
.pic5:hover,
.pic6:hover,
.pic7:hover,
.pic8:hover,
.pic9:hover,
.pic10:hover {
    cursor: pointer;
    transform: scale(1.05);
}
.mengban {
    width: 100%;
    height: 100%;
    opacity: 0.2;
    transition: 0.3s ease-in-out;
    background-color: transparent;
}

.biaoqian {
    position: relative;
    width: 100%;
    height: 8vw;
}
.back {
    position: absolute;
    width: 15vw;
    height: 3vw;
    background-color: rgb(60, 66, 78);
    bottom: 2vw;
    box-shadow: 0 0 15px rgb(100, 100, 100);
    left: 50%;
    margin-left: -7.5vw;
}
.item {
    width: 100%;
    height: 100%;
    background-color: rgb(95, 177, 159);
    margin-left: 1vw;
    margin-top: 1vw;
    color: #fff;
    font-size: 1.5vw;
    font-weight: 600;
    line-height: 3vw;
    letter-spacing: 0.3vw;
    box-shadow: 0 0 15px rgb(100, 100, 100);
}
.font1,
.font2 {
    float: left;
    width: 4vw;
    height: 20vw;
    font-size: 2.6vw;
    font-weight: 600;
    color: rgb(255, 255, 255);
    margin-left: 8vw;
    margin-top: 8vw;
    opacity: 0.8;
}
.font2 {
    margin-left: 2vw;
}
</style>