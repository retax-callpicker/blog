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
        state.info.payload.push(response.payload);
      },

      deletePost(state, id) {

        const posts = state.info.payload;

        state.info.payload.forEach((post, index) => {
          if(id == post.Post.id) {
            state.info.payload.splice(index, 1);
          }
        });

      }

    }

});