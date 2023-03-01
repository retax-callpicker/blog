const confirmModule = {

    namespaced: true,

    state: {
      isOpened: false,
      modalText: "",
      confirmed: null
    },

    mutations: {

      showConfirm(state, { text, confirmed }) {
        state.isOpened = true;
        state.modalText = text;
        state.confirmed = confirmed;
      },

      clickConfirm(state) {
        state.isOpened = false;
        state.confirmed();
      },

      resetConfirm(state) {
        state.isOpened = false;
        state.modalText = "";
        state.confirmed = null;
      }

    }

}