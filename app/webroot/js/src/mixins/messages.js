const messagesMixin = {

    methods: {

        showMessage(title, message, hideAfter = -1) {
            store.commit("messages/showMessage", {
                title: title,
                text: message,
                hideAfter: hideAfter,
                bvModal: this.$bvModal
            });
        }

    }

}