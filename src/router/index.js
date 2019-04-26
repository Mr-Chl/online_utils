import Vue from 'vue';
import Router from 'vue-router';

import home from './home'; // 首页
import test from './test'; // 首页
import page from '../pages/index.vue';
import wxml_to_html from './wxml_utils'; // wxml 转 html
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: page,
      children:[
        home,
        wxml_to_html,
        test,
      ]
    }
  ]
})
