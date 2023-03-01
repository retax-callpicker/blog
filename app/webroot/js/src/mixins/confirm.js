const confirmMixin = {

    methods: {

        askConfirm(message) {
            return new Promise((resolve, reject) => {
                store.commit("confirm/showConfirm", {
                    text: message,
                    bvModal: this.$bvModal,
                    confirmed: resolve,
                    canceled: reject
                });
            });
        },

    }

}