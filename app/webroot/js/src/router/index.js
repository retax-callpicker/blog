const routes = [
    {
        path: '/',
        name: 'posts',
        component: posts
    },
    {
        path: '/create',
        name: 'postCreate',
        component: postCreate
    }
]
  
const router = new VueRouter({
    routes
})
  