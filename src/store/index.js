/**
 * Created by shenalfred on 17/5/14.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    companyClasses: {}
  },
  getters: {
    getAllCompanyClasses (state) {
      return state.companyClasses;
    }
  },
  mutations: {
    addCompanyClasses (state, obj) {
      state.companyClasses[obj.id] = obj;
    },
    pushArticle (state, obj) {
      for(var i=0; i<obj.articles.length; i++) {
        state.companyClasses[obj.id].articles.push(obj.articles[i]);
      }
    }
  },
  actions: {

  }
})

export default store
