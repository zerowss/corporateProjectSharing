<template>
    <div>
<!--        <button @click="handleClick">{{test}}</button>-->
        <div>{{test}}</div>
        <slot></slot>
    </div>
</template>

<script>
    import mixin from "../../mixins/mixinLog"


    export default {
        name: 'BaseComp',
        mixins:[mixin],
        methods: {
            // handleClick() {
            //     this.$emit('customize-click','点击了')
            // }

        },
        props: {
            test: {
                type: Number,
                default: 0
            }
        },
        mounted() {
            console.log(this,'-----')
        }
    }
</script>

<style scoped>

</style>
