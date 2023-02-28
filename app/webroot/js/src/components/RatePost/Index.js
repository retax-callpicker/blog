(function() {
    const template = /*html*/`

    <b-card
        v-if="!ratedPosts.includes(postId)"
        tag="article"
        class="mb-2"
    >

        <p class="mb-0">¿Qué calificación le darías a este post?</p>
        <b-form-rating v-model="rate"></b-form-rating>

        <b-button class="mt-3" type="button" variant="primary" @click="sendRate">Calificar</b-button>
        
    </b-card>

    <b-alert v-else class="mb-2" variant="success" show>¡Gracias por haber calificado este post!</b-alert>
    `;

    Vue.component('rate-post', {

        data() {
            return {
                rate: null,
                ratedPosts: []
            }
        },

        mounted() {
            this.ratedPosts = this.getRatedPosts();
        },

        methods: {

            sendRate() {

                if (this.rate != null) {

                    const data = {
                        rate: this.rate,
                        post_id: this.postId
                    }
                    
                    fetch('https://black.digitum.com.mx/retax/blog/practica/posts/rate', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    })
                    .then(response => response.json())
                    .then(response => {
                        this.ratedPosts = this.getRatedPosts();
                        this.$emit("updateRating", response.payload.users_rating, response.payload.users_who_rated);
                    });

                }
                else {
                    alert("Debes elegir una calificación!");
                }

            },

            getRatedPosts() {

                let posts_rated = this.fixedEncodeURI( this.getCookie("posts_rated") );

                if (!posts_rated)
                    posts_rated = "[]";

                return JSON.parse(posts_rated);

            },

            // TODO: Convertir en un helper
            getCookie(cname) {
                let name = cname + "=";
                //let decodedCookie = decodeURIComponent(document.cookie);
                let ca = document.cookie.split(';');
                for(let i = 0; i <ca.length; i++) {
                    let c = ca[i];
                    while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                    }
                }
                return "";
            },

            fixedEncodeURI (str) {
                return str.replace(/%5B/g, '[').replace(/%5D/g, ']').replace(/%2C/g, ',');
            }

        },

        props: {
            postId: {
                type: Number,
                required: true
            }
        },

        template

    });
}());