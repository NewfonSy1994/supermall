import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCounter(state, payload) {
      payload.count += 1;
    },
    addCart(state, payload) {
      state.cartList.push(payload);
    }
  },
  actions: {
    addCart(context, payload) {
      let oldShop = context.state.cartList.find(item => item.iid === payload.iid);
      if (oldShop) {
        context.commit("addCounter", oldShop);
      } else {
        payload.count = 1;
        context.commit("addCart", payload);
      }
    }
  },
  modules: {
  }
})
