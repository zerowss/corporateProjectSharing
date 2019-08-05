<template>
   <div class="right-children show-right">
       <h3>Right-Children</h3>
       <p class="root-color">{{rMsg}}</p>
       <p class="root-color">{{rData}}</p>
       <input type="text" v-model="local" @input="changeLocal">
       <p>{{msg}}</p>
   </div>
</template>

<script>
    export default {
        inject:['rMsg','rFn'],
        props: {
            rData: {
                type: String
            },
        },
        data() {
            return {
                local: '',
                msg: 'right-index'
            }
        },
        methods: {
            changeLocal(e) {
                this.rFn(e.target.value)
            }
        },
        mounted() {
            this.$bus.$on('event-bus',msg=>{
                this.msg = msg
            })
        }
    }
</script>

<style scoped>
    .right-children{
        background: #BDBDBD;
    }
</style>
