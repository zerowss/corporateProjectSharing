<template>
    <div class="about">
        <h1>This is an about page</h1>
        <div>
            <input type="text" v-model="fruit">
            <button @click="addFruit">增加</button>
            <p>{{$store.getters.show}}</p>
            <p>{{ob_data}}</p>
        </div>
        <h1>Show Detail</h1>
        <wForm :name="name" :keyword="keyword"></wForm>
    </div>
</template>

<script>
    import {getters} from "../observable"
    import wForm from "../components/wForm/minixWForm"
    import mixinLog from "../mixins/mixinLog"



    export default {
        data() {
            return {
                fruit: this.$store.state.fruit,
                name: 'about',
                keyword: 'qwer'
            }
        },
        mixins:[mixinLog],
        components:{wForm},
        computed: {
            ob_data() {
                return getters.getAge()
            }
        },
        methods: {
            addFruit() {
                this.$store.commit('GET_FRUITS', this.fruit)
                this.$store.commit('SET_FRUIT', this.fruit)
            }
        },
        mounted() {
            console.log('about')
        }
    }
</script>
