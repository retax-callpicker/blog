(function() {
    const template = /*html*/`
    <!-- Footer -->
    <footer class="bg-dark text-center text-white">
        <!-- Grid container -->
        <div class="container p-4">

            <!-- Section: Text -->
            <section class="mb-4">
            <p>
                Sistema de blog creado con Vue.js 2 y alimentado por una API construída en CakePHP 1.2.
            </p>
            </section>
            <!-- Section: Text -->
        </div>
        <!-- Grid container -->

        <!-- Copyright -->
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
            © 2023 Copyright:
            <a class="text-white" href="https://retaxmaster.com/">RetaxMaster</a>
        </div>
        <!-- Copyright -->
    </footer>
    <!-- Footer -->
    `;

    Vue.component('footer-bar', {
        template
    });
}());