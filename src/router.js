import { createRouter, createWebHistory } from 'vue-router/dist/vue-router.esm.js'

import Login from './components/template/login.vue'
import Home from './components/template/Home.vue'
import SignUp from './components/template/SignUp.vue'
import AddTask from './components/template/AddTask.vue'
import TaskAdded from './components/template/TaskAdded.vue'
import TaskDialogue from './components/template/TaskDialogue.vue'
import CompletedTask from './components/template/CompletedTask.vue'
import SecondNav from './components/template/SecondNav.vue'

export const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            name:'login',
            path:'/login',
            component:Login
        },
        {
            name:'Home',
            path:'/',
            component:Home
        },
        {
            name:'SignUp',
            path:'/signup',
            component:SignUp
        },
        {
            name:'AddTask',
            path:'/addtask',
            component:AddTask
        },
        {
            name:'TaskAdded',
            path:'/taskadded',
            component:TaskAdded
        },
        {
            name:'TaskDialogue',
            path:'/taskdialogue',
            component:TaskDialogue
        },
        {
            name:'CompletedTask',
            path:'/completedtask',
            component:CompletedTask
        },
        {
            name:'SecondNav',
            path:'/secondNav',
            component:SecondNav
        }
    ]
})