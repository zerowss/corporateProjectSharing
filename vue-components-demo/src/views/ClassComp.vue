<template>
    <div>
        <Comp :name="name" :age="age"></Comp>
    </div>
</template>

<script>
    // import {Vue, Component, Emit, Prop} from 'vue-property-decorator'
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import Comp from '../components/ClassComp'

    @Component({
        components:{
            Comp
        }
    })
    export default class MyComp extends Vue {

        /*data*/
        name = 'tom'
        age = 18

        // lifecycle hook
        mounted() {
            console.log('Class Comp')
        }
    }
</script>

<style scoped>

</style>
