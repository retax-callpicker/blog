<?php 

$libraries = array(
    "vuejs/polyfill.min.js",
    "vuejs/2.6.12/vue.js",
    "vuejs/vue-router.js",
    "vuejs/vuex/vuex.js",
    "bootstrap-vue/v2.21.0/bootstrap-vue.min.js",
    "https://unpkg.com/bootstrap-vue@2.23.1/dist/bootstrap-vue-icons.min.js"
);

$vue_views = array(
    "src/layouts/MainLayout.js",
    "src/views/posts/Index.js",
    "src/views/posts/PostCreate.js",
    "src/views/posts/Post.js",
    "src/views/posts/Edit.js",
    "src/App.js",
    "src/router/index.js",
    "src/store/index.js",
);

$vue_components = array(
    "src/components/FooterBar/Index.js",
    "src/components/HeaderBar/Index.js",
    "src/components/Coments/Index.js",
    "src/components/Coments/Coment.js",
    "src/components/RatePost/Index.js",
    "src/components/RatePost/Stars.js",
);

$scripts = array_merge($libraries, $vue_views, $vue_components);

$this->addScript($javascript->link($scripts));
$this->addScript($html->css("style.css"));

?>

<div id="app">

    <main-layout></main-layout>

</div>