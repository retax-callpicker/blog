<?php 

$libraries = array(
    "vuejs/polyfill.min.js",
    "vuejs/2.6.12/vue.js",
    "vuejs/vue-router.js",
    "vuejs/vuex/vuex.js",
    "bootstrap-vue/v2.21.0/bootstrap-vue.min.js",
    "https://unpkg.com/bootstrap-vue@2.23.1/dist/bootstrap-vue-icons.min.js"
);

$vuex_modules = array(
    "src/store/modules/posts.js",
    "src/store/modules/confirm.js",
    "src/store/modules/messages.js",
);

$vue_mixins = array(
    "src/mixins/cookies.js",
    "src/mixins/confirm.js",
    "src/mixins/messages.js",
);

$vue_views = array(
    "src/layouts/MainLayout.js",
    "src/views/posts/Index.js",
    "src/views/posts/PostCreate.js",
    "src/views/posts/Post.js",
    "src/views/posts/Edit.js",
    "src/views/404.js",
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
    "src/components/Confirm/Index.js",
    "src/components/Messages/Index.js",
);

$scripts = array_merge($libraries, $vuex_modules, $vue_mixins, $vue_views, $vue_components);

$styles = array(
    "style.css",
    "PostList/index.css",
    "PostList/media.css",
);

$this->addScript($javascript->link($scripts));
$this->addScript($html->css($styles));

?>

<div id="app">

    <main-layout></main-layout>

</div>