/*
*   类似vuex的逻辑
* */

import Vue from "vue"

const state = Vue.observable({
    age: 40,
    name: 'kobe'
})

const mutations = {
    CHANGEAGE(age) {
        state.age = age
    },
    CHANGENAME(name) {
        state.name = name
    }
}

const actions = {}

const getters = {
    getAge() {
        return state.name + ':' + state.age + '岁'
    }
}


export {
    state,
    mutations,
    actions,
    getters
}
