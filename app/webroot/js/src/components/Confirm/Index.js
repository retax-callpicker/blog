(function() {
    const template = /*html*/`
    <b-modal id="confirm" ref="confirm" hide-footer title="¿Confirmar eliminación?">
        <p class="my-4" v-html="modalText"></p>

        <b-button 
            class="mt-3" 
            type="button" 
            variant="primary"
            @click="hideModal"
        >Cancelar</b-button>

        <b-button 
            class="mt-3" 
            type="button" 
            variant="danger"
            @click="confirm"
        >Eliminar</b-button>

    </b-modal>
    `;

    Vue.component('confirm', {

        methods: {

            hideModal() {
                store.commit("confirm/resetConfirm");
            },
        
            confirm() {
                store.commit("confirm/clickConfirm");
            }
            
        },
        
        computed: {
            ...Vuex.mapState("confirm", ["modalText"])
        },
        
        template

    });
}())