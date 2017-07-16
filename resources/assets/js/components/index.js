import PageContent from './PageContent.vue'
import Avatar      from './Avatar.vue'

export default {
  install(Vue) {
    if (this.installed) {
      // Skip install
      return
    }

    Vue.component('page-content', PageContent)
    Vue.component('avatar', Avatar)

    this.installed = true
  }
}