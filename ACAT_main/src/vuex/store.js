import Vue from "vue"
import Vuex from 'vuex'
Vue.use(Vuex);

//此处放值
const state = {
    //照片墙向照片展示组件传值
    value:'',
    picstate:''
}

//此处为方法
const mutations = {
    change(state,value){
        state.value = value[0]
        state.picstate = value[1]
    }
}

export default new Vuex.Store({
    state,
    mutations
})