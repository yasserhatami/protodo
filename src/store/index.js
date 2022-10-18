import { createStore } from "vuex";

import axios from "axios"
import Swal from "sweetalert2"

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
            
        },
        newTask(state,task){
            state.tasks.unshift(task)
        }
    },

    actions: {
        async fetchTasks(context) {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
                context.commit('setTask', response.data)
            }catch(error){
                console.log(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                  })
            }
            
            
        },
        async filterTasks(context,limit) {
            console.log(limit)
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
                context.commit('setTask', response.data)
            }catch(error){
                console.log(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                  })
            }
            
            
        },
        async storeTask(context,titleVal) {
            // console.log(limit)
            try {
                const response = await axios.post("https://jsonplaceholder.typicode.com/todos",
                {
                    title : titleVal,
                    completed : false
                }
                )
                context.commit('newTask', response.data)
                Swal.fire(
                    'success!',
                    'You added a task!',
                    'success'
                  )
                console.log(response)
            }catch(error){
                console.log(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                  })
            }
            
            
        }
    }
})


export default store