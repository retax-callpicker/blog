(function() {
    const template = /*html*/`
    <div>
        <b-navbar type="dark" variant="dark">

            <b-navbar-nav class="px-5">

            <router-link 
                to="/"
            >
                <b-nav-text>Retax Blog 😎</b-nav-text>
            </router-link>

            </b-navbar-nav>

        </b-navbar>
    </div>
    `;

    Vue.component('header-bar', {
        template
    });
}())