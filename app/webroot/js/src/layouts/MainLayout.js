(function() {
    const template = /*html*/`
        <div>
        
            <messages></messages>
            <confirm></confirm>

            <header-bar></header-bar>

            <router-view></router-view>

            <footer-bar></footer-bar>

        </div>
    `;

    Vue.component('main-layout', {
        template
    });
}())