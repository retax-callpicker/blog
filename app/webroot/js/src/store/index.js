const store = new Vuex.Store({

    state: {
      posts: []
    },

    mutations: {

      setPosts(state, { posts }) {
        state.posts = posts;
      },

      addPost(state, { response }) {
        state.posts.push(response.payload);
      },

      deletePost(state, id) {

        state.posts.forEach((post, index) => {
          if(id == post.Post.id) {
            state.posts.splice(index, 1);
          }
        });

      }

    }

});