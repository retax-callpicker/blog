const posts = function() {

    const template = /*html*/`
    <div class="my-5 px-5">

        <router-link 
            to="/create"
        >
            <b-button>Agregar Post</b-button>
        </router-link>

        <b-table :items="table" :busy="isBusy" class="mt-3" outlined>
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
                isBusy: true,
                info: null,
                table: []
            }
        },

        mounted () {
            fetch('https://black.digitum.com.mx/retax/blog/practica/posts')
                .then(response => response.json())
                .then(response => (this.info = response))
        },

        watch: {

            info: function() {

                this.info.payload.forEach(post => {
                    this.table.push({
                        title: post.Post.title,
                        body: post.Post.body
                    });
                });

                this.isBusy = false;

            }
        
        },

        template

    });
    
}();