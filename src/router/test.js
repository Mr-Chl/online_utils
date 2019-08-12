const test = ()=> import(/* webpackChunkName: "about" */ '../pages/test/index.vue');
export default {
    path: 'test',
    component: test,
    meta:{
        title: "测试"
    }
}