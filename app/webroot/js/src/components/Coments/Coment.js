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

                store.commit("confirm/showConfirm", {
                    text: `Estás a punto de eliminar el comentario de <b>${user}</b>. Esta acción no se puede deshacer. ¿Realmente quieres eliminarlo?`,
                    confirmed: () => {
                        fetch(`https://black.digitum.com.mx/retax/blog/practica/coments/${id}`, {
                            method: 'DELETE'
                        })
                        .then(response => {

                            if (response.status === 204) {
                                this.$emit("deleteComent", id);
                            }
                            else {
                                alert("Error dels ervidor :(");
                            }

                        });
                    }
                });
                
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

        template

    });
}());