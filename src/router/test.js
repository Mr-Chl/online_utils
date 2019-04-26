const test = ()=> import(/* webpackChunkName: "about" */ '../pages/test/index.vue');
export default {
    path: '/test',
    component: test,
}