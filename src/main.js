import Vue from 'vue';
import './plugins/bootstrap-vue';
import App from './App.vue';
import router from './router';
import i18n from '@/i18n/'; // using: $t('validation.required', {field: 'name'})
import _ from 'lodash';  // using: this.$_.function
import moment from 'moment'; // using: this.$moment().function
import api from '../src/service.api'; // using: this.$api.function
import helper from '../src/helper'; // using: this.$helper.function

Vue.config.productionTip = false;

Object.defineProperty(Vue.prototype, '$_', { value: _ });
Object.defineProperty(Vue.prototype, '$moment', { value: moment });
Object.defineProperty(Vue.prototype, '$api', { value: api });
Object.defineProperty(Vue.prototype, '$helper', { value: helper });

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app');
