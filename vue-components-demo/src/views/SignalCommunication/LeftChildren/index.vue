<template>
    <div class="left-children show-left">
        <h3>Left-Children</h3>
        <p class="root-color">{{rMsg}}</p>
        <p class="root-color">{{rData}}</p>
        <input type="text" v-model="changeRoot" @input="changeMsg">
<!--        <input type="text" v-model="rCom">-->
        <p>{{msg}}</p>
        <p><button @click="boardCast">广播事件</button></p>
        <grand-child></grand-child>
    </div>
</template>

<script>
    import grandChild from './grandChild'
    export default {
        components:{
            grandChild
        },
        inject: ['rMsg','INFO'],
        props: {
            rData: {
                type: String
            },
            rCom:{
                type: String
            }
        },
        data() {
            return {
                changeRoot: '',
                msg: 'left-index'
            }
        },
        methods: {
            changeMsg(e) {
                this.$emit('getMsg',e.target.value)
            },
            boardCast(){
                this.$boardCast('boardCast','来自LeftChildren的通知')
            }
        },
        mounted() {
            // this.INFO.getMsg = '这就修改了？'
            this.$on('dispatch', msg => {
                this.msg = msg
            })
            this.$bus.$on('event-bus',msg=>{
                this.msg = msg
            })
        }
    }
</script>

<style scoped>
    .left-children {
        background: #E0E0E0;

        box-sizing: border-box;
    }
</style>
