import Vue from 'vue'
import ProgressBar from '../components/system/ProgressBar.vue'

export const bar = new Vue(ProgressBar).$mount()
document.body.appendChild(bar.$el)

export default {
  install(Vue) {
    if (this.installed) {
      // Skip install
      return
    }

    Object.defineProperty(Vue.prototype, '$bar', {
      get: () => bar
    })

    this.installed = true
  }
}
