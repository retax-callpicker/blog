const postCreate = function() {

    const template = /*html*/`
    <div class="my-5 px-5">

        <router-link 
            to="/create"
        >
            <b-button>Agregar Post</b-button>
        </router-link>

        <b-table :items="table" :busy="isBusy" class="mt-3" outlined>
            <template #table-busy>
                <div class="text-center text-danger my-2">
                    <b-spinner class="align-middle"></b-spinner>
                    <strong>Loading...</strong>
                </div>
            </template>
        </b-table>

    </div>
    `;

    return Vue.component('post-create', {
        
        data: function () {
            return {
                count: 0
            }
        },

        template

    });
    
}();