
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap')

window.Vue = require('vue')
window.VueMaterial = require('vue-material')

import GlobalComponents from './components'
import Lib from './libs/boot'
import router from './router/router'

Vue.use(VueMaterial)
Vue.use(GlobalComponents)
Vue.use(Lib)

Vue.material.registerTheme({
    default: {
        primary: 'blue',
        accent: 'pink'
    }
})

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import 'vue-material/dist/vue-material.css'
import App from './App.vue'

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App),
});
