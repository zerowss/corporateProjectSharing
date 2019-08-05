<template>
    <div>
        <p>{{date}}</p>
        <p>{{info}}</p>
        <p>{{computedMsg}}</p>
        <input type="text" v-model="msg" @change="greet">
    </div>
</template>

<script>
    // import {Vue, Component, Emit, Prop} from 'vue-property-decorator'
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component({
        props: {
            age: {
                type: Number,
                default: 20
            },
            name: {
                type: String,
                default: ''
            }
        }
    })
    export default class MyComp extends Vue {
        /*props*/
        // @Prop({
        //     type: String,
        //     default: ''
        // })
        // name


        /*data*/
        date = new Date().toLocaleTimeString()
        info = `${this.name}:${this.age}`
        msg = ''

        // lifecycle hook
        mounted() {
            console.log('Class Comp')
        }

        // computed
        get computedMsg() {
            return 'computed ' + this.msg
        }

        // method
        greet(e) {
            this.msg = e.target.value
        }
    }
</script>

<style scoped>

</style>
