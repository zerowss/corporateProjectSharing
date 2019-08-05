<template>
    <div style="border: 1px solid #000000;padding: 10px;">
        <h5>grand-child</h5>
        <p class="root-color">{{rMsg}}</p>
        <p>{{grandMsg}}</p>
        <grandSubChild></grandSubChild>
    </div>
</template>

<script>
    import grandSubChild from "./grandSubChild"


    export default {
        inject: ['rMsg'],
        components: {grandSubChild},
        data() {
            return {
                grandMsg: 'left-grand-child'
            }
        },
        mounted() {
            this.$on('boardCast', msg => {
                this.grandMsg = msg
            })
            this.$on('dispatch', msg => {
                this.grandMsg = msg
            })
            this.$bus.$on('event-bus',msg=>{
                this.grandMsg = msg
            })
        }
    }
</script>

<style scoped>

</style>
