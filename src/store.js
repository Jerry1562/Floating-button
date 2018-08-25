import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    positionX:0,      //记录document的位置信息
    positionY:0,
    isDown:false,
    isOpen:false,
  },
  mutations: {
    update(state,payload){
      state.positionX = payload.x;
      state.positionY = payload.y;
    },
    isDown(state,payload){
      state.isDown = payload.isDown;
    },
    isOpen(state,payload){
      state.isOpen = payload.isOpen;
    }
  },
  actions: {

  }
})
