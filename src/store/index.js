import { createStore } from "vuex";

import axios from "axios"

const store = createStore({
    state: {
        tasks: [],
        count: 0
    },
    getters: {
        allTasks(state) {
            return state.tasks
        }
    },

    mutations: {
        setTask(state, inputs) {
            state.tasks = inputs
            state.count = inputs.length
            console.log(inputs)
        }
    },

    actions: {
        async fetchTasks(context) {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
                context.commit('setTask', response.data)
            }catch(error){
                console.log(error)
            }
            
            
        }
    }
})

export default store