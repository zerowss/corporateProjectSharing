<template>
    <div>
        <wForm :name="name" :keyword="keyword"></wForm>
    </div>
</template>

<script>
    import wForm from '../../components/wForm'
    import mixinLog from "../../mixins/mixinLog"

    export default {
        components: {wForm},
        data() {
            return {
                name: 'tom',
                keyword: '123'
            }
        },
        mixins: [mixinLog],
        mounted() {
            console.log('detail')
        }
    }
</script>

<style scoped>

</style>
