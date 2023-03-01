(function() {
    const template = /*html*/`
    <b-modal id="messages" ref="messages" hide-footer :title="title">
        <p class="my-4" v-html="text"></p>

        <b-button 
            class="mt-3" 
            type="button" 
            variant="primary"
            @click="hideModal"
        >Ok</b-button>

    </b-modal>
    `;

    Vue.component('messages', {

        methods: {

            hideModal() {
                store.commit("messages/hideMessage");
            },
            
        },
        
        computed: {
            ...Vuex.mapState("messages", ["title", "text"])
        },
        
        template

    });
}())