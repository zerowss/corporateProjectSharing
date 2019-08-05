<template>
    <div>
        <p>{{msg}}</p>
        <BaseComp :test="10" :slot="local_data">
            <p v-if="local_data.isOk">BaseComp</p>
        </BaseComp>
        <newComp :open="true" :slot="{local_data,info}">
            <p>{{info}}</p>
            <p v-if="local_data.isOk">sdsd</p>
        </newComp>
    </div>
</template>

<script>
    import BaseComp from "../components/Hcomp/BaseComp"
    import WithHoc from '../utils/Hoc'

    const newComp = WithHoc(BaseComp, {
        created() {
            console.log('newComp created')
            console.log(this,'created')
        },
        data(){
            return {
                test: 11222
            }
        }
    })

    console.log(newComp,'===111')
    console.log(BaseComp,'===')
    export default {
        name: "HocComp",
        components: {BaseComp, newComp},
        data() {
            return {
                msg: '',
                info: 'INFO',
                local_data: {
                    isOk: true
                }
            }
        },
        methods: {
            // handleCustClick(msg) {
            //     this.msg = msg
            //     this.local_data.isOk = !this.local_data.isOk
            // }
        },
    }
</script>

<style scoped>

</style>
