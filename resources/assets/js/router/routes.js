import Home          from '../pages/Home.vue'
import PostIndex from '../pages/posts/Index.vue'
import AddPost   from '../pages/posts/Add.vue'

const routes = [
    { path: '/',          component: Home},
    { path: '/posts',     component: PostIndex },
    { path: '/posts/add', component: AddPost }
]

export default routes
