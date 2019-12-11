/**
 * Import necessary libraries
 */
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'flatpickr/dist/flatpickr.min.css'
import Vue from 'vue'
import store from '@/store'
import router from '@/router'
import App from '@/App'

// Make sure to set this synchronously immediately after loading Vue
Vue.config.devtools = true
// Suppress all Vue logs and warnings.
Vue.config.silent = false
// Set this to false to prevent the production tip on Vue startup.
Vue.config.productionTip = false

// Get target app element id
const appElementID = document.getElementById('app')

// Find if element exist
if (appElementID) {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount(appElementID)
}
