<template>
    <div>
        <input type="text" v-model="wName">
        <br>
        <input type="text" v-model="wKey">
        <br>
        <button @click="search">搜索</button>
        <button @click="clear">清空</button>
        <p>{{num}}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                wName: this.name,
                wKey: this.keyword,
                num: 119
            }
        },
        props: {
            name: {
                type: String,
                required: true
            },
            keyword:{
                type: String,
                required: true
            }
        },
        methods: {
            search() {
                alert(`${this.wName}-${this.wKey}`)
            },
            clear(){
                this.wName = ''
                this.wKey = ''
            }
        },
        created() {
            console.log(this.num)
        }
    }
</script>

<style scoped>

</style>
