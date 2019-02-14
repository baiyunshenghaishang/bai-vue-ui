import Vue from 'vue/dist/vue'
import VueRouter from 'vue-router'

import Main from './Main'
import LoadBottomAutoTest from './LoadBottomAutoTest'
import LoadBottomAutoWithoutElTest from './LoadBottomAutoWithoutElTest'
import CountDownTest from './CountDownTest'
import NumberInputTest from './NumberInputTest'

Vue.use(VueRouter)

export const routes = [
    {
        path: '',
        redirect: '/main',
    },
    {
        path: '/main',
        component: Main,
    },
    {
        path: '/load-bottom-auto',
        component: LoadBottomAutoTest,
    },
    {
        path: '/load-bottom-auto-without-el',
        component: LoadBottomAutoWithoutElTest,
    },
    {
        path: '/countdown',
        component: CountDownTest,
    },
    {
        path: '/number-input',
        component: NumberInputTest,
    },
]

const router = new VueRouter({
    routes,
})

export default router
