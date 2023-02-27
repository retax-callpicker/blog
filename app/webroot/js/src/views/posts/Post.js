const post = function() {

    const template = /*html*/`
    <div class="my-5 px-5">

        <div class="text-center" v-if="isLoading">
            <b-spinner variant="primary" label="Cargando..."></b-spinner><br>
            <span>Cargando...</span>
        </div>

        <b-card
            v-else
            :title="post.title"
            img-src="https://fastly.picsum.photos/id/145/1920/1080.jpg?hmac=745bp388SbDWrZpgXUHM5uRK5D4vdEC6XuPZPp9TvRs"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2"
        >

            <b-card-text>{{ post.body }}</b-card-text>

            <router-link 
                :to="{name: 'posts'}"
            >
                <b-button variant="primary">Regresar</b-button>
            </router-link>

        </b-card>

    </div>
    `;

    return Vue.component('post', {

        data() {
            return {
                post: null,
                isLoading: true
            }
        },

        mounted () {

            fetch(`https://black.digitum.com.mx/retax/blog/practica/posts/${this.$route.params.id}`)
                .then(response => response.json())
                .then(response => {
                    this.post = response.payload.Post;
                    this.isLoading = false;
                });

        },

        template

    });
    
}();