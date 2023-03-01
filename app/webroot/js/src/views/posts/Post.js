const post = function() {

    const template = /*html*/`
    <div class="my-5 px-5">

        <div class="text-center" v-if="isLoading">
            <b-spinner variant="primary" label="Cargando..."></b-spinner><br>
            <span>Cargando...</span>
        </div>

        <div class="max-container" v-else>
        
            <b-card
                :title="post.title"
                :img-src="'/retax/blog/practica/files/' + post.image"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-2"
            >

                <stars 
                    :users_rating="parseInt(post.users_rating)"
                    :users_who_rated="parseInt(post.users_who_rated)"
                ></stars>

                <b-card-text>{{ post.body }}</b-card-text>

                <router-link 
                    :to="{name: 'posts'}"
                >
                    <b-button variant="primary">Regresar</b-button>
                </router-link>

            </b-card>

            <rate-post
                :postId="parseInt(post.id)"
                @updateRating="updateRating"
            ></rate-post>

            <coments
                :postId="parseInt(post.id)"
                :comentsList="comentsList"
            ></coments>
        
        </div>

    </div>
    `;

    return Vue.component('post', {

        data() {
            return {
                post: null,
                isLoading: true,
                comentsList: []
            }
        },

        mounted () {

            fetch(`https://black.digitum.com.mx/retax/blog/practica/posts/${this.$route.params.id}`)
                .then(response => response.json())
                .then(response => {

                    if (!response.payload) {
                        this.$router.push({
                            name: 'NotFound'
                        });
                    }
                    else {
                        this.post = response.payload.Post;
                        this.comentsList = response.payload.Coment;
                        this.isLoading = false;
                    }

                });

        },

        methods: {

            updateRating(users_rating, users_who_rated) {
                this.post.users_rating = users_rating;
                this.post.users_who_rated = users_who_rated;
            }

        },

        template

    });
    
}();