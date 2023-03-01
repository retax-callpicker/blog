const messagesModule = {

    namespaced: true,

    state: {
      title: "",
      text: "",
      bvModal: null
    },

    mutations: {

      showMessage(state, { title, text, hideAfter, bvModal }) {

        state.bvModal = bvModal;
        state.title = title;
        state.text = text;
        state.bvModal.show("messages");

        if (hideAfter > -1)
          setTimeout(() => this.commit("messages/hideMessage"), hideAfter * 1000);

      },

      hideMessage(state) {
        if (state.bvModal) {
          state.bvModal.hide("messages");
          state.title = "";
          state.text = "";
          state.bvModal = null;
        }
      }

    }

}