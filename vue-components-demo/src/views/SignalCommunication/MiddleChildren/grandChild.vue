<template>
    <div>
        <h5>Middle-grand-child</h5>
        <p class="root-color">{{rMsg}}</p>
        <button @click="eventBus">$bus发布</button>
        <div style="margin-top: 10px">
            name: <input type="text" v-model="name">
            <br>
            age: <input type="text" v-model="age">
            <br>
            <button @click="changeObservable">确定</button>
        </div>
    </div>
</template>

<script>
    import {mutations} from "../../../observable"

    export default {
        inject: ['rMsg'],
        data() {
            return {
                msg: '',
                name: '',
                age: ''
            }
        },
        methods: {
            eventBus() {
                this.$bus.$emit('event-bus', 'Middle-grand-child通知')
            },
            changeObservable() {
                mutations.CHANGEAGE(this.age)
                mutations.CHANGENAME(this.name)
            }
        },
    }
</script>

<style scoped>

</style>
