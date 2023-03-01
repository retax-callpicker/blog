const confirmModule = {

    namespaced: true,

    state: {
      bvModal: null,
      modalText: "",
      confirmed: null,
      canceled: null
    },

    mutations: {

      showConfirm(state, { text, bvModal, confirmed, canceled }) {
        state.bvModal = bvModal;
        state.modalText = text;
        state.confirmed = confirmed;
        state.canceled = canceled;
        state.bvModal.show("confirm");
      },

      clickConfirm(state) {
        state.bvModal.hide("confirm");
        state.confirmed();
      },

      resetConfirm(state) {
        state.bvModal.hide("confirm");
        state.modalText = "";
        state.confirmed = null;
        state.canceled();
        state.bvModal = null;
      }

    }

}