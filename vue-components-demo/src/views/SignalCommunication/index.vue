<template>
    <div class="all-wrap root-color">
        <h1>组件通信方式</h1>
        <div class="top-wrap">
            <div class="all-top">
                <div>
                    <p>组件中定义的值</p>
                    <p>provide: <span>{{rMsg}}</span> ## <span>{{rObj.date}}</span></p>
                    <p>data: <span>{{rData}}</span> ## <span>{{getMsg}}</span></p>
                    <p>computed: <span>{{rCom}}</span></p>
                    <p>ob_data:{{ob_data}}</p>
                    <p>vuex: {{$store.getters.show}}</p>
                </div>
                <div class="show-wrap">
                    <div class="show-left">
                        <p>{{getMsg}}</p>
                    </div>
                    <div class="show-middle">
                        <p>{{getMsg}}</p>
                        <p>{{rObj.date}}</p>
                    </div>
                    <div class="show-right">
                        <p>{{getMsg}}</p>
                    </div>
                </div>
                <div class="child-wrap">
                    <LeftChildren :rCom="rCom" :rData="rData" @getMsg="getChildMsg"></LeftChildren>
                    <MiddleChildren :rData="rData"></MiddleChildren>
                    <RightChildren :rData="rData"></RightChildren>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import LeftChildren from "./LeftChildren"
    import RightChildren from "./RightChildren"
    import MiddleChildren from './MiddleChildren'

    import {getters} from "../../observable"


    export default {
        components: {
            LeftChildren,
            RightChildren,
            MiddleChildren
        },
        provide() {
            return {
                rMsg: this.rMsg,
                rObj: this.rObj,
                rFn: this.rFn,
                INFO: this
            }
        },
        computed: {
            rCom() {
                return '计算属性'
            },
            ob_data() {
                return getters.getAge()
            }
        },
        data() {
            return {
                rMsg: '来自根组件的传值',
                rObj: {
                    date: '110'
                },
                rData: 'rootData',
                getMsg: ''
            }
        },
        methods: {
            getChildMsg(msg) {
                this.getMsg = msg
            },
            rFn(v) {
                this.getMsg = v
            }
        },
        mounted() {
            this.$on('dispatch', msg => {
                this.getMsg = msg
            })
            this.$bus.$on('event-bus', msg => {
                this.getMsg = msg
            })
        }
    }
</script>

<style scoped>
    .all-wrap {
        background: #F5F5F5;
        box-sizing: border-box;
    }

    .child-wrap, .show-wrap {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .show-wrap > div {
        flex: 1;
    }

    .child-wrap > div {
        flex: 1;
        box-sizing: border-box;
        padding: 10px;
        min-height: 700px;
    }
</style>
