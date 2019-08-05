<template>
    <div>
        <wForm :name="name" :keyword="keyword"></wForm>
        <List :items="items" numer="2">
            <p>haha</p>
        </List>
    </div>
</template>

<script>
    import wForm from '../../components/wForm'
    import mixinLog from "../../mixins/mixinLog"
    import List from "../../functional/List"

    console.log(List,'list')
    export default {
        components: {wForm, List},
        data() {
            return {
                name: 'tom',
                keyword: '123',
                items: [
                    {
                        id:1,
                        name: 'tom'
                    },
                    {
                        id: 2,
                        name: 'jack'
                    },
                    {
                        id:3,
                        name: 'kobe'
                    }
                ]
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
