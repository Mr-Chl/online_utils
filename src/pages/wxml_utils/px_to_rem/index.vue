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
                <el-radio-button label="px to rem"></el-radio-button>
            </el-radio-group>
        </div>
        <div>
            <el-tooltip class="item" effect="dark" content="尺寸在iphone6/7/8下在浏览器html标签上的font-size大小 默认为37.5" placement="top-start">
                <el-button>px < == > rem 基数</el-button>
            </el-tooltip>
            <el-input v-model="input" @blur="input_blur" placeholder="请输入内容"></el-input>
        </div>

        <div>
            设计稿大小：
            <el-radio-group v-model="isThreeImg">
                <el-radio-button label="750"></el-radio-button>
            </el-radio-group>
            <el-radio-group v-model="isThreeImg">
                <el-radio-button label="640"></el-radio-button>
            </el-radio-group>
        </div>
        
        <div>
            <el-radio-group v-model="radio">
                <el-radio-button label="rem to px"></el-radio-button>
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
            input: '37.5',
            radio: "px to rem",
            isThreeImg: 750,
        }
    },
    watch:{
        radio(e){
            this.common_fn();
        },
        textarea2(a){
            this.common_fn();
        },
        isThreeImg(a){
           this.common_fn();
        }
    },
    methods:{
        input_blur(){
           this.common_fn();
        },
        common_fn(){
            if (this.radio === 'px to rem') {
               this.textarea = this.px_reg_rule(this.textarea2);
            } else if (this.radio === 'rem to px') {
               this.textarea = this.rem_reg_rule(this.textarea2);
            }
        },
        px_reg_rule(value){
            let reg1=/-?\d+(\.\d+)?px/ig;
            let reg2=/-?\d+px/ig;
            let c = (this.isThreeImg == 750 ? 2 : 1) * this.input;
            c = isNaN(c) ? 37.5:c ;
            value=this.replace_fn(reg1,value, c,"rem");
            value=this.replace_fn(reg2,value, c,"rem");
            return value;
        },
        rem_reg_rule(value){
            let reg3=/-?\d+(\.\d+)?rem/ig;
            let reg4=/-?\d+rem/ig;
            let c = (this.isThreeImg == 750 ? 2 : 1) * this.input;
            value=this.replace_fn(reg3,value,c,"px");
            value=this.replace_fn(reg4,value,c,"px");
            return value;
        },
        replace_fn(reg,target,scale,unit){
            let result = target.match(reg);
            for(let i in result){
                if (unit == 'px') {
                    target = target.replace(result[i],parseFloat((result[i]))*scale+unit)
                } else if(unit == 'rem') {
                    target = target.replace(result[i],Math.round(parseFloat(result[i])/scale*100)/100+unit)
                }
            }
            return target; 
        }
    }

}
</script>
