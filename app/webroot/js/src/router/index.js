const routes = [
    {
        path: '/',
        name: 'posts',
        component: posts
    },
    {
        path: '/posts/create',
        name: 'postCreate',
        component: postsCreate
    },
    {
        path: '/posts/:id',
        name: 'post',
        component: post
    },
    {
        path: '/posts/edit/:id',
        name: 'editPost',
        component: edit
    }
]
  
const router = new VueRouter({
    routes
})
  