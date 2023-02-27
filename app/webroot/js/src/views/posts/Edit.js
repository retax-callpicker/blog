const edit = function() {

    const template = /*html*/`
    <div class="my-5 px-5">

        <div class="text-center" v-if="isLoading">
            <b-spinner variant="primary" label="Cargando..."></b-spinner><br>
            <span>Cargando...</span>
        </div>

        <b-form @submit="onSubmit" @reset="onReset" v-else>

            <b-form-group id="input-group-1" label="Título" label-for="input-1">
                <b-form-input
                    id="input-1"
                    v-model="form.title"
                    placeholder="Introduce el título del post"
                    required
                ></b-form-input>
            </b-form-group>

            <b-form-group 
                id="input-group-2"
                label="Descripción"
                label-for="input-2"
                description="Escribe toda la descripción de tu post."
            >
                <b-form-textarea
                    id="textarea"
                    v-model="form.body"
                    placeholder="Escribe tu post"
                    rows="3"
                    max-rows="6"
                ></b-form-textarea>
            </b-form-group>

            <b-button type="submit" variant="primary">Editar post</b-button>
            <b-button type="reset" variant="danger">Reiniciar formulario</b-button>

        </b-form>

    </div>
    `;

    return Vue.component('posts', {

        data() {
            return {
                isLoading: true,
                form: {
                    title: '',
                    body: ''
                }
            }
        },

        mounted () {

            fetch(`https://black.digitum.com.mx/retax/blog/practica/posts/${this.$route.params.id}`)
                .then(response => response.json())
                .then(response => {
                    this.form.title = response.payload.Post.title;
                    this.form.body = response.payload.Post.body;
                    this.isLoading = false;
                });

        },

        methods: {

            onSubmit(event) {

                event.preventDefault();

                fetch(`https://black.digitum.com.mx/retax/blog/practica/posts/${this.$route.params.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.form)
                })
                .then(response => response.json())
                .then(response => {
                    store.commit("addPost", { response });
                    this.$router.push({
                        name: "posts"
                    });
                });
              
            },

            onReset(event) {

                event.preventDefault()
                // Reset our form values
                this.form.title = ''
                this.form.body = ''

            }

        },

        template

    });
    
}();