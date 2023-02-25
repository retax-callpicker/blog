const store = new Vuex.Store({

    state: {
      info: {
        payload: []
      }
    },

    mutations: {

      setInfo(state, { response }) {
        state.info = response;
      },

      addPost(state, { response }) {
        console.log(state.info);
        state.info.payload.push(response.payload);
      },

    }

});