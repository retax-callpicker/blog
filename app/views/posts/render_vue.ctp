<?php 

$libraries = array(
    "vuejs/polyfill.min.js",
    "vuejs/2.6.12/vue.js",
    "vuejs/vue-router.js",
    "bootstrap-vue/v2.21.0/bootstrap-vue.min.js"
);

$vue_views = array(
    "src/layouts/MainLayout.js",
    "src/views/posts/Index.js",
    "src/views/posts/PostCreate.js",
    "src/App.js",
    "src/router/index.js",
);

$vue_components = array(
    "src/components/FooterBar/Index.js",
    "src/components/HeaderBar/Index.js"
);

$scripts = array_merge($libraries, $vue_views, $vue_components);

$this->addScript($javascript->link($scripts));

?>

<div id="app">

    <main-layout></main-layout>

</div>