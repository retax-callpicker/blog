const notFound = function() {

    const template = /*html*/`
    <div class="d-flex align-items-center justify-content-center vh-100">
        <div class="text-center">
            <h1 class="display-1 fw-bold">404</h1>
            <p class="fs-3"> <span class="text-danger">¿Te perdiste? 👀</span> Esa página no existe 😞.</p>
            <p class="lead">
                No tengo esa página, pero siempre puedes continuar leyendo el resto de los posts 😉.
            </p>
            <router-link 
                :to="{name: 'posts'}"
            >
                <b-button type="button" variant="primary">¡Muéstrame los posts!</b-button>
            </router-link>
        </div>
    </div>
    `;

    return Vue.component('not-found', {
        template
    });
    
}();