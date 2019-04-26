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
                <el-radio-button label="wxss to css"></el-radio-button>
            </el-radio-group>
        </div>
        <div>
            <el-radio-group v-model="radio">
                <el-radio-button label="css to wxss"></el-radio-button>
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
            radio: "wxss to css",
        }
    },
    watch:{
        radio(e){
            if (e === 'wxss to css') {
                var reg1=/-?\d+(\.\d+)?rpx/ig;
                var reg2=/-?\d+rpx/ig;
                this.textarea = this.replace_fn(reg1,this.textarea2,0.5,"px")
                this.textarea = this.replace_fn(reg2,this.textarea2,0.5,"px")
            } else if (e === 'css to wxss') {
                var reg1=/-?\d+(\.\d+)?px/ig;
                var reg2=/-?\d+px/ig;
                this.textarea=this.replace_fn(reg1,this.textarea2,2,"rpx")
                this.textarea=this.replace_fn(reg2,this.textarea2,2,"rpx")
            }
        },
        textarea2(a){
            if (this.radio === 'wxss to css') {
                var reg1=/-?\d+(\.\d+)?rpx/ig;
                var reg2=/-?\d+rpx/ig;
                this.textarea = this.replace_fn(reg1,a,0.5,"px");
                this.textarea = this.replace_fn(reg2,a,0.5,"px");
            } else if (this.radio === 'css to wxss') {
                var reg1=/-?\d+(\.\d+)?px/ig;
                var reg2=/-?\d+px/ig;
                this.textarea=this.replace_fn(reg1,a,2,"rpx")
                this.textarea=this.replace_fn(reg2,a,2,"rpx")
            }
        }
    },
    methods:{
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
