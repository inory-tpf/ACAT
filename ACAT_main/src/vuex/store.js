import Vue from "vue"
import Vuex from 'vuex'
Vue.use(Vuex);

//此处放值
const state = {
    //照片墙向照片展示组件传值
    value:'',
    picstate:'',

    //组别介绍中判断后台组选择界面
    groupState:'true',
}

//此处为方法
const mutations = {
    //修改照片墙数据
    change(state,value){
        state.value = value[0]
        state.picstate = value[1]
    },

    //修改组别选择数据
    groupChange(state , value){
        if(value == 'close'){
            state.groupState = "false"
        }
        if(value == 'open'){
            state.groupState = "true"
        }
    },
}

export default new Vuex.Store({
    state,
    mutations
})