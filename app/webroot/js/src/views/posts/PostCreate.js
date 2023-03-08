const postsCreate = function() {

    const template = /*html*/`
    <div class="my-5 px-5 max-container">

        <h1 class="mb-4">Crea un nuevo post:</h1>

        <b-form @submit="onSubmit" @reset="onReset" >

            <b-form-group id="input-group-1" label="Título" label-for="input-1">
                <b-form-input
                    id="input-1"
                    v-model="form.title"
                    placeholder="Introduce el título del post"
                    @keydown="validateLength"
                    required
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
                    required
                ></b-form-textarea>
            </b-form-group>

            <b-form-file
                v-model="form.file"
                :state="Boolean(form.file)"
                placeholder="Elige una imagen o arrástrala aquí"
                drop-placeholder="Suelta tu imagen aquí"
                required
            ></b-form-file>

            <div class="my-3">
                <b-img 
                    ref="uploaded-image"
                    v-if="form.file" 
                    thumbnail fluid 
                    :src="imagePreview" 
                    :alt="form.title"
                    style="maxWidth: 500px; width: 100%"
                ></b-img>
           </div>

            <b-button type="submit" variant="primary">Agregar post</b-button>
            <b-button type="reset" variant="danger">Reiniciar formulario</b-button>
            <router-link 
                :to="{name: 'posts'}"
            >
                <b-button type="button">Regresar</b-button>
            </router-link>

        </b-form>

    </div>
    `;

    return Vue.component('posts', {

        data() {
            return {
                form: {
                    title: '',
                    body: '',
                    file: null
                }
            }
        },

        methods: {

            onSubmit(event) {

                event.preventDefault();

                if (this.form.title && this.form.body && this.form.file) {

                    const imageValidation = this.validateImage(this.$refs["uploaded-image"], this.form.file);

                    if (imageValidation.pass) {

                        const formData = new FormData();
                        formData.append("title", this.trimTitle(this.form.title));
                        formData.append("body", this.form.body);
                        formData.append("image", this.form.file);
        
                        fetch('https://black.digitum.com.mx/retax/blog/practica/posts', {
                            method: 'POST',
                            body: formData
                        })
                        .then(() => {
                            this.$router.push({
                                name: "posts"
                            });
                        });

                    }
                    else {
                        this.showMessage("¡Un momento!", imageValidation.message, 3);
                        this.form.file = null;
                    }

                }
                else {
                    this.showMessage("¡Un momento!", "¡Completa todos los campos!", 3);
                }
              
            },

            onReset(event) {

                event.preventDefault()
                // Reset our form values
                this.form.title = ''
                this.form.body = ''
                this.form.file = null;

            }

        },

        mixins: [messagesMixin, stringsMixin, imagesMixin],

        template

    });
    
}();