(function() {
    const template = /*html*/`
    <b-card :title="coment.user">
        <b-card-text>{{ coment.coment }}</b-card-text>
        <b-button v-if="showDelete" type="button" variant="danger" @click="deleteComent(coment.id, coment.user)">Eliminar comentario</b-button>
    </b-card>
    `;

    Vue.component('coment', {

        methods: {

            deleteComent(id, user) {
                this.askConfirm(`Estás a punto de eliminar el comentario de <b>${user}</b>. Esta acción no se puede deshacer. ¿Realmente quieres eliminarlo?`)
                    .then(() => {
                        fetch(`https://black.digitum.com.mx/retax/blog/practica/coments/${id}`, {
                            method: 'DELETE'
                        })
                        .then(response => {
                            if (response.status === 204)
                                this.$emit("deleteComent", id);
                            else
                                this.showMessage("Error", "Error del servidor :(", 3);
                        });
                    }).catch(() => null);
            }

        },

        props: {
            coment: {
                type: Object,
                required: true
            },
            showDelete: {
                type: Boolean,
                default: false,
                required: false
            }
        },

        mixins: [confirmMixin, messagesMixin],

        template

    });
}());