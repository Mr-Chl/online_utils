import Vue from 'vue';
import Router from 'vue-router';

import home from './home'; // 首页
import test from './test'; // test
import page from '../pages/index.vue';
import wxml_to_html from './wxml_utils'; // wxml 转 html
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: 'home',
      component: page,
      meta:{
        title:'首页'
      },
      children: [
        home,
        test,
        wxml_to_html,
      ],
    },

  ]
})
router.beforeEach((to, from, next) => {
  // 更新页面title
  document.title = to.meta.title;
  next();
});
export default router;
