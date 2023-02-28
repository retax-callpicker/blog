(function() {
    const template = /*html*/`
    <b-card
        title="Comentarios"
        tag="article"
        class="mb-2"
    >
        <b-form @submit="onSubmit" @reset="onReset">
    
            <b-form-group id="input-group-1" label="Nombre" label-for="input-1">
                <b-form-input
                    id="input-1"
                    v-model="newComent.user"
                    placeholder="¿Cuál es tu nombre de usuario?"
                ></b-form-input>
            </b-form-group>
    
            <b-form-group id="textarea-container" label="Comentario" label-for="textarea">
                <b-form-textarea
                    id="textarea"
                    v-model="newComent.text"
                    placeholder="Escribe lo que quieras comentar."
                    rows="3"
                    max-rows="6"
                ></b-form-textarea>
            </b-form-group>
    
            <b-button type="submit" variant="primary">Comentar</b-button>
            <b-button type="reset" variant="danger">Reiniciar comentario</b-button>
    
        </b-form>
        
        <hr>

        <div id="coments-container">
            <b-card
                v-for="coment in comentsList"
                :key="coment.id"
                :title="coment.user"
            >
                <b-card-text>{{ coment.coment }}</b-card-text>
            </b-card>
        </div>

    </b-card>
    `;

    Vue.component('coments', {

        data() {
            return {
                coments: [],
                newComent: {
                    user: "",
                    text: "",
                }
            }
        },

        methods: {

            onSubmit(event) {

                event.preventDefault();

                const data = {
                    post_id: this.postId,
                    user: this.newComent.user,
                    coment: this.newComent.text
                }

                fetch('https://black.digitum.com.mx/retax/blog/practica/coments', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(response => response.json())
                .then(response => {
                    this.comentsList.push(response.payload.Coment);
                    this.newComent.user = ''
                    this.newComent.text = ''
                });

            },

            onReset(event) {

                event.preventDefault()
                // Reset our form values
                this.newComent.user = ''
                this.newComent.text = ''

            }

        },

        props: {
            comentsList: {
                type: Array,
                required: false
            },
            postId: {
                type: Number,
                required: true
            }
        },

        template

    });
}());