import { createStore } from "vuex";
import axios from "axios"

const store = createStore({
    state : {
        tasks : []
    },
    actions : {
        async  fetchTasks(){
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos")

            console.log(response)
        }
    }
})

export default store