const posts = function() {

    const template = /*html*/`
    <div class="my-5 px-5">

        <b-modal id="confirm" hide-footer title="¿Confirmar eliminación?">
            <p class="my-4">Estás a punto de eliminar el post <b>{{ deletion.title }}</b>. Esta acción no se puede deshacer. ¿Realmente quieres eliminarlo?</p>

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
                @click="confirmDelete"
            >Eliminar</b-button>

        </b-modal>

        <router-link 
            :to="{name: 'postCreate'}"
        >
            <b-button>Agregar Post</b-button>
        </router-link>

        <b-table :items="table" :busy="isBusy" class="mt-3" outlined>

            <template #cell(title)="data">
                <router-link 
                    :to="{
                        name: 'post',
                        params: {
                            id: data.value.id
                        }
                    }"
                >{{ data.value.title }}</router-link>
            </template>

            <template #cell(actions)="data">

                <router-link 
                    :to="{
                        name: 'editPost',
                        params: {
                            id: data.value.id
                        }
                    }"
                >
                    <b-button type="button" variant="primary">Editar post</b-button>
                </router-link>

                <b-button type="button" variant="danger" @click="deletePost(data.value)">Eliminar post</b-button>

            </template>

            <template #table-busy>
                <div class="text-center text-danger my-2">
                <b-spinner class="align-middle"></b-spinner>
                <strong>Loading...</strong>
                </div>
            </template>

        </b-table>

    </div>
    `;

    return Vue.component('posts', {

        data() {
            return {
                deletion: {
                    title: "",
                    id: null
                },
                isBusy: true,
                table: []
            }
        },

        mounted () {
            fetch('https://black.digitum.com.mx/retax/blog/practica/posts')
                .then(response => response.json())
                .then(response => {
                    store.commit("setInfo", { response });
                })
        },

        methods: {

            deletePost(data) {
                this.deletion = data;
                this.$bvModal.show("confirm");
            },

            hideModal() {
                this.deletion = {
                    title: "",
                    id: null
                };

                this.$bvModal.hide("confirm");
            },

            confirmDelete() {
                
                this.$bvModal.hide("confirm");
                const id = this.deletion.id;

                fetch(`https://black.digitum.com.mx/retax/blog/practica/posts/${id}`, {
                    method: 'DELETE'
                })
                .then(response => {

                    if (response.status === 204) {
                        store.commit("deletePost", id);
                    }
                    else {
                        alert("Error dels ervidor :(");
                    }

                    this.deletion = {
                        title: "",
                        id: null
                    };

                });

            }

        },

        computed: {
            ...Vuex.mapState(["info"])
        },

        watch: {

            info: {
                handler() {
                    this.table = [];
                    this.info.payload.forEach(post => {
                        this.table.push({
                            title: {
                                title: post.Post.title,
                                id: post.Post.id,
                            },
                            body: post.Post.body,
                            actions: {
                                id: post.Post.id,
                                title: post.Post.title,
                            }
                        });
                    });
    
                    this.isBusy = false;
                },
                deep: true
            }
        
        },

        template

    });
    
}();