const edit = function() {

    const template = /*html*/`
    <div class="my-5 px-5">

        <div class="text-center" v-if="isLoading">
            <b-spinner variant="primary" label="Cargando..."></b-spinner><br>
            <span>Cargando...</span>
        </div>

        <div class="max-container" v-else>
            <h1 class="mb-4">Edita este post:</h1>
            <b-form @submit="onSubmit" @reset="onReset">
            
                <b-form-group id="input-group-1" label="Título" label-for="input-1">
                    <b-form-input
                        id="input-1"
                        v-model="form.title"
                        placeholder="Introduce el título del post"
                        @keydown="validateLength"
                    ></b-form-input>
                    <b-form-text>Máximo 50 caracteres.</b-form-text>
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
            
                <b-form-file
                    v-model="form.file"
                    placeholder="Elige una imagen o arrástrala aquí"
                    drop-placeholder="Suelta tu imagen aquí"
                ></b-form-file>
                <div class="my-3">Archivo seleccionado: {{ form.file ? form.file.name : '' }}</div>
            
                <b-button type="submit" variant="primary">Editar post</b-button>
                <b-button type="reset" variant="danger">Reiniciar formulario</b-button>
                <router-link 
                    :to="{name: 'posts'}"
                >
                    <b-button type="button">Regresar</b-button>
                </router-link>
            
            </b-form>
            
            <hr>
            
            <h3 class="mb-4">Administra los comentarios de este post:</h3>
            <div id="coments-container" v-if="comentsList.length > 0">
                <coment
                    v-for="coment in comentsList"
                    :key="coment.id"
                    :coment="coment"
                    :showDelete="Boolean(true)"
                    @deleteComent="deleteComent"
                ></coment>
            </div>
            <b-alert v-else show>No hay comentarios en este post.</b-alert>
        </div>

    </div>
    `;

    return Vue.component('posts', {

        data() {
            return {
                isLoading: true,
                comentsList: [],
                form: {
                    title: '',
                    body: '',
                    file: null
                }
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
                        this.form.title = response.payload.Post.title;
                        this.form.body = response.payload.Post.body;
                        this.isLoading = false;
                        this.comentsList = response.payload.Coment;
                    }
                    
                });

        },

        methods: {

            onSubmit(event) {

                event.preventDefault();

                const formData = new FormData();
                
                if (this.form.title || this.form.body || this.form.file) {

                    if(this.form.title)
                        formData.append("title", this.trimTitle(this.form.title));
                    
                    if(this.form.body)
                        formData.append("body", this.form.body);
                    
                    if(this.form.file)
                        formData.append("image", this.form.file);

                    fetch(`https://black.digitum.com.mx/retax/blog/practica/posts/${this.$route.params.id}`, {
                        method: 'POST',
                        body: formData
                    })
                    .then(response => {
                        this.$router.push({
                            name: "posts"
                        });
                    });

                }
                else {
                    this.showMessage("¡Un momento!", "¡Debes rellenar al menos un campo!", 3);
                }
              
            },

            onReset(event) {

                event.preventDefault()
                // Reset our form values
                this.form.title = ''
                this.form.body = ''
                this.form.file = null

            },

            deleteComent(id) {
                this.comentsList.forEach((coment, index) => {
                    if(id == coment.id)
                        this.comentsList.splice(index, 1);
                });
            }

        },

        mixins: [messagesMixin, stringsMixin],

        template

    });
    
}();