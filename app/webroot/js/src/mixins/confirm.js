const confirmMixin = {

    methods: {

        askConfirm(message) {
            return new Promise((resolve, reject) => {
                store.commit("confirm/showConfirm", {
                    text: message,
                    vm: this,
                    confirmed: resolve,
                    canceled: reject
                });
            });
        },

    }

}