import Vuex from "vuex";
import Vue from "vue";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    // userInfo: null,
    userInfo: {
      address: "",
      age: "",
      birthday: "",
      branchId: "",
      count: 0,
      disabled: 0,
      education: "",
      header: "",
      hometown: "",
      id: 2,
      idCard: "",
      jobRank: "",
      joinPartyTime: "",
      lastPayTime: "",
      leadPerson: "",
      nation: "",
      partyStatus: "",
      phone: "",
      qqNum: "",
      salary: "",
      sex: "",
      special: "",
      totalScore: "",
      username: "",
      wxNum: ""
    },
    token: "",
    commentList: ""
  },
  actions: {},
  mutations: {
    CHANGE_USER(state, payload) {
      state.userInfo = payload;
    },
    CHANGE_TOKEN(state, payload) {
      state.token = payload;
    },
    CHANGE_COMMENT(state, payload) {
      state.commentList = payload;
    }
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => sessionStorage.getItem(key),
        // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
        setItem: (key, value) => sessionStorage.setItem(key, value),
        removeItem: key => sessionStorage.removeItem(key)
      }
    })
  ]
});

export default store;
