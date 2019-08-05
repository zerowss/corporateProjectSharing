import wForm from './index'
/*
*   extends 保持组件结构，逻辑重写，方法会覆盖 权重会比mixins高
* */

export default {
    methods: {
        clear(){
            this.wName = ''
            this.wKey = ''
            alert('清空了~~')
        }
    },
    extends: wForm
}
