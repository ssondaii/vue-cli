import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import i18n from '@/i18n/'; // using: $t('validation.required', {field: 'name'})
import router from './router'
import _ from 'lodash';

Vue.config.productionTip = false
Object.defineProperty(Vue.prototype, '$_', { value: _ });

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
