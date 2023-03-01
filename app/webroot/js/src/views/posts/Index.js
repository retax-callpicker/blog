const posts = function() {

    const template = /*html*/`
    <div class="my-5 px-5">

        <main>

            <section class="px-4 pt-5 my-5 text-center border-bottom">

                <h1 class="display-4 fw-bold">🖋 Blog It!</h1>

                <div class="col-lg-6 mx-auto">

                    <p class="lead mb-4">Este blog fue desarrollado con Vue 2. Implementa tecnologías como <b>Vuex</b>, <b>Vue Router</b> y <b>Bootstrap Vue</b> para funcionar. Esta aplicación es renderizada por un método de CakePHP y hace uso de Hash Routes para evitar el problema de configuración de NGINX. Puedes consultar el código <a href="https://github.com/retax-callpicker/blog" target="_blank">aquí.</a></p>

                    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                        <router-link 
                            :to="{name: 'postCreate'}"
                        >
                            <b-button class="btn btn-lg px-4 me-sm-3" variant="primary">¡Agrega tu post!</b-button>
                        </router-link>
                    </div>

                </div>

            </section>
        
            <section id="blogs-container" class="max-container">
            
                <b-card
                    v-for="post in posts"
                    :key="post.Post.id"
                    :title="post.Post.title"
                    :img-src="'/retax/blog/practica/files/' + post.Post.image"
                    img-alt="Image"
                    img-top
                    tag="article"
                    class="mb-2"
                >

                    <stars 
                        :users_rating="parseInt(post.Post.users_rating)"
                        :users_who_rated="parseInt(post.Post.users_who_rated)"
                    ></stars>

                    <b-card-text class="text-truncate">{{ post.Post.body }}</b-card-text>

                    <router-link
                        :to="{
                            name: 'post',
                            params: {
                                id: post.Post.id
                            }
                        }"
                    >
                        Leer post completo...
                    </router-link>

                    <div class="d-flex justify-content-between align-items-center mt-3">

                        <router-link 
                            :to="{
                                name: 'editPost',
                                params: {
                                    id: post.Post.id
                                }
                            }"
                        >
                            <b-icon icon="pencil" variant="primary"></b-icon>
                        </router-link>

                        <b-icon icon="trash" variant="danger" @click="deletePost(post.Post.id, post.Post.title)" style="cursor: pointer;"></b-icon>

                    </div>
                </b-card>
            
            </section>
        
        </main>

    </div>
    `;

    return Vue.component('posts', {

        mounted () {
            fetch('https://black.digitum.com.mx/retax/blog/practica/posts')
                .then(response => response.json())
                .then(response => {
                    store.commit("post/setPosts", {
                        posts: response.payload
                    });
                })
        },

        methods: {

            deletePost(id, title) {
                this.askConfirm(`Estás a punto de eliminar el post <b>${title}</b>. Esta acción no se puede deshacer. ¿Realmente quieres eliminarlo?`)
                    .then(() => {
                        fetch(`https://black.digitum.com.mx/retax/blog/practica/posts/${id}`, {
                            method: 'DELETE'
                        })
                        .then(response => {
                            if (response.status === 204)
                                store.commit("post/deletePost", id);
                            else
                                this.showMessage("Error", "Error del servidor :(", 3);
                        });
                    }).catch(() => null);
            }

        },

        computed: {
            ...Vuex.mapState("post", ["posts"])
        },

        mixins: [confirmMixin, messagesMixin],

        template

    });
    
}();