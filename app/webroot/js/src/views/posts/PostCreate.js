const postsCreate = function() {

    const template = /*html*/`
    <div class="my-5 px-5">

        <b-form @submit="onSubmit" @reset="onReset" >

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

            <b-form-file
                v-model="form.file"
                :state="Boolean(form.file)"
                placeholder="Elige una imagen o arrástrala aquí"
                drop-placeholder="Suelta tu imagen aquí"
            ></b-form-file>
            <div class="my-3">Archivo seleccionado: {{ form.file ? form.file.name : '' }}</div>

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

                const formData = new FormData();
                formData.append("title", this.form.title);
                formData.append("body", this.form.body);
                formData.append("image", this.form.file);

                fetch('https://black.digitum.com.mx/retax/blog/practica/posts', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                    /* store.commit("addPost", { response });
                    this.$router.push({
                        name: "posts"
                    }); */
                });
              
            },

            onReset(event) {

                event.preventDefault()
                // Reset our form values
                this.form.title = ''
                this.form.body = ''
                this.form.file = null;

            }

        },

        template

    });
    
}();