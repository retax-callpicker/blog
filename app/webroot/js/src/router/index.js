const routes = [
    {
        path: '/',
        name: 'posts',
        component: posts
    },
    {
        path: '/create',
        name: 'postCreate',
        component: postsCreate
    }
]
  
const router = new VueRouter({
    routes
})
  