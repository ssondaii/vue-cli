import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from '../lang';

Vue.use(VueI18n);

const locale = 'ja';

const i18n = new VueI18n({
    locale: locale,
    fallbackLocale: 'en',
    messages,
});

export default i18n; // using this exported i18n to import into other place