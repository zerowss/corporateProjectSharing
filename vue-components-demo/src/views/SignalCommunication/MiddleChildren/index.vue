<template>
    <div class="middle-children show-middle">
        <h3>Middle-Children</h3>
        <p class="root-color">{{rObj.date}}</p>
        <p class="root-color">{{rData}}</p>
        <input type="text" v-model="local" @input="changeLocal">
        <p>{{msg}}</p>
        <grandChild></grandChild>
    </div>
</template>

<script>
    import grandChild from "./grandChild"


    export default {
        inject:['rObj'],
        props: {
            rData: {
                type: String
            },
        },
        data() {
            return {
                local: '',
                msg: 'Middle-index'
            }
        },
        components:{grandChild},
        methods: {
            changeLocal(e) {
                this.rObj.date = e.target.value
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
    .middle-children{
        background: #9E9E9E;
    }
</style>
