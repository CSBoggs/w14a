import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    joke: "'Click Reload Joke!'"
  },
  mutations: {
    setJoke(state, payload) {
      state.joke = payload;
    }
  },
  actions: {
    getNewJoke(state) {
      state.commit("setJoke", 'loading a fresh 2010 joke, bear with us')
      axios.request({
        url: "https://geek-jokes.sameerkumar.website/api?format=json",
        method: "GET"
      }).then((response) => {
        state.commit("setJoke", response.data.joke);
      }).catch((error) => {
        console.error("there was an error: " + error);
      })
    }
  },
  getters: {
    getJoke(state) {
      return state.joke;
    }
  },
});
