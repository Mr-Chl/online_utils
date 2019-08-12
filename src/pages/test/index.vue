<style lang="scss">

@font-face {
    font-family: 'shs_bold';
    src: url('../../fonts/白舟魂心書体.ttf');
}
@font-face {
    font-family: 'shs_bold1';
    src: url('../../fonts/八大山人字体试用版.TTF');
}
@font-face {
    font-family: 'shs_bold2';
    src: url('../../fonts/白舟京円書体.ttf');
}
@font-face {
    font-family: 'shs_bold3';
    src: url('../../fonts/白舟鯨海酔侯书体.ttf');
}
@font-face {
    font-family: 'shs_bold4';
    src: url('../../fonts/白舟隼风书体.ttf');
}
@font-face {
    font-family: 'shs_bold5';
    src: url('../../fonts/春联标准行书体.ttf');
}
@font-face {
    font-family: 'shs_bold6';
    src: url('../../fonts/德彪钢笔行书字库.ttf');
}
</style>

<template>
    <div class="pages">
        <div v-for="item in list" :key="item.size">
            <span :style="'font-size:'+ item.size + ';font-family:'+ item.family">{{item.text}}</span>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            list: [
                {
                    text: '组件支持用户在具有路由功能的应用中点击导航通过to属性指定目标地址默认渲染成带有正确链接的',
                    size: '12px',
                    family: 'shs_bold',
                },
                {
                    text: '组件支持用户在具有路由功能的应用中点击导航通过to属性指定目标地址默认渲染成带有正确链接的',
                    family: 'shs_bold1',
                    size: '14px',
                },
                {
                    text: '组件支持用户在具有路由功能的应用中点击导航通过to属性指定目标地址默认渲染成带有正确链接的',
                    family: 'shs_bold2',
                    size: '16px',
                },
                {
                    text: '<router-link :to="{ name: 123, params: { userId: 123 }}">User</router-link',
                    family: 'shs_bold3',
                    size: '18px',
                },{
                    text: '组件支持用户在具有路由功能的应用中点击导航通过to属性指定目标地址默认渲染成带有正确链接的',
                    family: 'shs_bold4',
                    size: '20px',
                }
                ,{
                    text: '组件支持用户在具有路由功能的应用中点击导航通过to属性指定目标地址默认渲染成带有正确链接的',
                    size: '22px',
                    family: 'shs_bold5',
                }
                ,{
                    text: '组件支持用户在具有路由功能的应用中点击导航通过to属性指定目标地址默认渲染成带有正确链接的',
                    family: 'shs_bold6',
                    size: '24px',
                }
            ]
        }
    }
}
</script>
