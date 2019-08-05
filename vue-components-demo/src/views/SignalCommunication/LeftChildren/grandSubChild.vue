<template>
    <div style="border: 1px solid #000000;">
        <h5>grand-sub-child</h5>
        <p class="root-color">{{rMsg}}</p>
        <p>{{grandSubChild}}</p>
        <button @click="postAllUp">通知祖代</button>
    </div>
</template>

<script>
    export default {
        inject: ['rMsg'],
        data() {
            return {
                grandSubChild: 'grand-sub-child'
            }
        },
        methods: {
            postAllUp() {
                this.$dispatch('dispatch', 'Left-grand-sub-child的通知')
            }
        },
        mounted() {
            this.$on('boardCast', msg => {
                this.grandSubChild = msg
            })
            this.$bus.$on('event-bus',msg=>{
                this.grandSubChild = msg
            })
        }
    }
</script>

<style scoped>

</style>
