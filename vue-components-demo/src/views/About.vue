<template>
    <div class="about">
        <p style="color: orangered;">{{msg}}</p>
        <Detail :title="title" @getMsg="getMsg"></Detail>
    </div>
</template>

<!--标注ts-->
<script lang="ts">
    import {Component, Prop, Vue, Emit, Watch} from "vue-property-decorator"
    import Detail from "../components/detail.vue"; //带着后缀 不然报错


    @Component({
        components: {Detail}
    })
    export default class About extends Vue {
        title = 'About Detail'
        msg = ''
        getMsg(msg:string){
            this.msg = msg
        }
    }
</script>
