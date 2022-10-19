import axios from "axios"
import Swal from "sweetalert2"

const task = {
    namespaced : true,

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
        newTask(state, task) {
            state.tasks.unshift(task)
        },
        updateTask(state, updatetask) {
            const index = state.tasks.findIndex(task => task.id == updatetask.id);
            if (index != -1) {
                state.tasks.splice(index, 1, updatetask)
            }
        },
        removeTask(state, id) {
            state.tasks = state.tasks.filter(task => task.id != id)
        }
    },

    actions: {
        async fetchTasks(context) {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
                context.commit('setTask', response.data)
            } catch (error) {
                console.log(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
            }


        },
        async filterTasks(context, limit) {
            console.log(limit)
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
                context.commit('setTask', response.data)
            } catch (error) {
                console.log(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
            }


        },
        async storeTask(context, titleVal) {
            try {
                const response = await axios.post("https://jsonplaceholder.typicode.com/todos",
                    {
                        title: titleVal,
                        completed: false
                    }
                )
                context.commit('newTask', response.data)
                Swal.fire(
                    'success!',
                    'You added a task!',
                    'success'
                )
                console.log(response)
            } catch (error) {
                console.log(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
            }


        },
        async updateTask(context, task) {
            try {
                const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${task.id}`,
                    {
                        id: task.id,
                        title: task.title,
                        completed: !task.completed
                    }
                )
                context.commit('updateTask', response.data)
                Swal.fire(
                    'success!',
                    'tak update!',
                    'success'
                )

            } catch (error) {
                console.log(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
            }


        },
        async deleteTask(context, id) {
            try {
                await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`,

                )
                context.commit('removeTask', id)
                Swal.fire(
                    'warning!',
                    'task deleted',
                    'success'
                )

            } catch (error) {
                console.log(error)
                Swal.fire({
                    icon: 'error',
                    title: 'warning...',
                    text: 'tasl deleted!',
                })
            }


        },

    }
}

export default task;