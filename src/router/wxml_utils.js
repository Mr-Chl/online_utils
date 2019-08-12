

const wxml_utils = () => import(/* webpackChunkName: "about" */ '../pages/wxml_utils/index.vue');
const wxss_to_css =  () => import(/* webpackChunkName: "about" */ '../pages/wxml_utils/wxss_to_css/index.vue');
const wxml_to_html =  () => import(/* webpackChunkName: "about" */ '../pages/wxml_utils/wxml_to_html/index.vue');
const px_to_rem =  () => import(/* webpackChunkName: "about" */ '../pages/wxml_utils/px_to_rem/index.vue');
export default {
    path: 'wxml_utils',
    component: wxml_utils,
    meta:{
        title: "工具"
    },
    children:[
        {
            path: '/wxml_utils/wxss_to_css',
            component: wxss_to_css,
            meta:{
                title: "wxss_to_css"
            },
        },
        {
            path: '/wxml_utils/wxml_to_html',
            component: wxml_to_html,
            meta:{
                title: "wxml_to_html"
            },
        },
        {
            path: '/wxml_utils/px_to_rem',
            component: px_to_rem,
            meta:{
                title: "px_to_rem"
            },
        }
    ],
}