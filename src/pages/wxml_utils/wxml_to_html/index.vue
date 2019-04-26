<style lang="scss">

</style>

<template>
    <div class="wxss_to_css">
       <el-input
        type="textarea"
        :autosize="{ minRows: 10, maxRows: 20}"
        placeholder="请输入内容"
        :clearable="true"
        v-model="textarea2">
        </el-input>
        <div>
            <el-radio-group v-model="radio">
                <el-radio-button label="wxml to html"></el-radio-button>
            </el-radio-group>
        </div>
        <div>
            <el-radio-group v-model="radio">
                <el-radio-button label="html to wxml"></el-radio-button>
            </el-radio-group>
        </div>
        <el-input
        type="textarea"
        :autosize="{ minRows: 10, maxRows: 20}"
        placeholder="请输入内容"
        v-model="textarea">
        </el-input>
    </div>
</template>


<script>
export default {
    data(){
        return {
            textarea2: '',
            textarea: '',
            radio: "wxml to html",
        }
    },
    watch:{
        radio(e){
            if (e === 'wxml to html') {
                this.textarea = this.wxml_reg_rule(this.textarea2);
            } else if (e === 'html to wxml') {
               this.textarea.this.html_reg_rule(this.textarea2);
            }
        },
        textarea2(a){
            if (this.radio === 'wxml to html') {
                this.textarea = this.wxml_reg_rule(this.textarea2);
            } else if (this.radio === 'html to wxml') {
               this.textarea.this.html_reg_rule(this.textarea2);
            }
        }
    },
    methods:{
        wxml_reg_rule(value){
            value = value.replace(/<view |<scroll-view |<cover-view |<swiper |<swiper-item |<checkbox-group |<radio-group /ig, '<div ')
            value = value.replace(/<view>|<scroll-view>|<cover-view>|<swiper>|<swiper-item>|<checkbox-group>|<radio-group>/ig, '<div>')
            value = value.replace(/<\/view>|<\/scroll-view>|<\/cover-view>|<\/swiper>|<\/swiper-item>|<\/checkbox-group>|<\/radio-group>/ig, '</div>')

            value = value.replace(/<text /ig, '<span ')
            value = value.replace(/<text>/ig, '<span>')
            value = value.replace(/<\/text>/ig, '</span>')

            value = value.replace(/<checkbox /ig, '<input type="checkbox" ')
            value = value.replace(/<checkbox>/ig, '<input type="checkbox"> ')
            value = value.replace(/<\/checkbox>/ig, '')
            value = value.replace(/<radio /ig, '<input type="radio" ')
            value = value.replace(/<radio>/ig, '<input type="radio"> ')
            value = value.replace(/<\/radio>/ig, '')

            value = value.replace(/<image |<cover-image /ig, '<img ')
            value = value.replace(/<image>|<cover-image>/ig, '<img>')
            value = value.replace(/<\/image>|<\/cover-image>/ig, '')

            value = value.replace(/bindsubmit/ig, 'onclick')

            value = value.replace(/rich-text/ig, 'textarea')

            // 标签里面含有样式px
            var reg1=/-?\d+(\.\d+)?rpx/ig;
            var reg2=/-?\d+rpx/ig;
            value=this.replace_fn(reg1,value,0.5,"px")
            value=this.replace_fn(reg2,value,0.5,"px")

            return value
        },

        html_reg_rule(value){
            value = value.replace(/<div |<p |<table |<tr |<ul |<dl |<h1 |<h2 |<h3 |<h4 |<h5 |<h6 |<nav |<head |<header |<footer |<article |<aside /ig, '<view ')
            value = value.replace(/<div>|<p>|<table>|<tr>|<ul>|<dl>|<h1>|<h2>|<h3>|<h4>|<h5>|<h6>|<nav>|<head>|<header>|<footer>|<article>|<aside>/ig, '<view>')
            value = value.replace(/<\/div>|<\/p>|<\/table>|<\/tr>|<\/ul>|<\/dl>|<\/h1>|<\/h2>|<\/h3>|<\/h4>|<\/h6>|<\/h6>|<\/nav>|<\/head>|<\/header>|<\/footer>|<\/article>|<\/aside>/ig, '</view>')
            
            value = value.replace(/textarea/ig, 'rich-text')

            value = value.replace(/<span |<th |<td |<li |<dt /ig, '<text ')
            value = value.replace(/<span>|<\/span>|<th>|<td>|<li>|<dt>/ig, '<text>')
            value = value.replace(/<\/span>|<\/th>|<\/td>|<\/li>|<\/dt>/ig, '</text>')

            value = value.replace(/<img /ig, '<image ')
            value = value.replace(/<img>/ig, '<image>')
            value = value.replace(/<\/img>/ig, '</image>')

            value = value.replace(/onclick/ig, 'bindsubmit')
            // 标签里面含有样式rpx
            var reg1=/-?\d+(\.\d+)?px/ig;
            var reg2=/-?\d+px/ig;
            // var reg3=/-?\d+(\.\d+)?rem/ig;
            // var reg4=/-?\d+rem/ig;
            value=this.replace_fn(reg1,value,2,"rpx")
            value=this.replace_fn(reg2,value,2,"rpx")
            // value=replace_fn(reg3,value,100,"rpx")
            // value=replace_fn(reg4,value,100,"rpx")
            return value;
        },
        replace_fn(reg,target,scale,unit){
            var result = target.match(reg);
            for(var i in result){
                target = target.replace(result[i],parseFloat((result[i]))*scale+unit)
            }
            return target; 
        }
    }

}
</script>
