// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

import 'common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);// 注册

let app = Vue.extend(App);
let router = new VueRouter({
  linkActiveClass: 'active'
});
router.map({
  '/goods': {
    components: goods
  },
  '/ratings': {
    components: ratings
  },
  'seller': {
    components: seller
  }
});

Vue.config.productionTip = false;

router.start(app, '#app');

router.go('/goods');
