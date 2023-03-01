const confirmModule = {

    namespaced: true,

    state: {
      vm: null,
      modalText: "",
      confirmed: null,
      canceled: null
    },

    mutations: {

      showConfirm(state, { text, vm, confirmed, canceled }) {
        state.vm = vm;
        state.modalText = text;
        state.confirmed = confirmed;
        state.canceled = canceled;
        state.vm.$bvModal.show("confirm");
      },

      clickConfirm(state) {
        state.vm.$bvModal.hide("confirm");
        state.confirmed();
      },

      resetConfirm(state) {
        state.vm.$bvModal.hide("confirm");
        state.modalText = "";
        state.confirmed = null;
        state.canceled();
        state.vm = null;
      }

    }

}