import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import Home from './view/Home.vue'
import About from './view/About.vue'
import Tasks from './view/Tasks.vue'

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/tasks',
            name: 'Tasks',
            component: Tasks
        },
        {
            path: '/about',
            name: 'About',
            component: About
        }
    ]
})

const app = createApp(App)
app.use(router).mount('#app')
app.mount('app')
