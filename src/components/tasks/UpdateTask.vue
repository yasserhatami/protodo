<template >
    <div>
        <span   v-if="task.completed" @click="updateTask(task)" class=" bi bi-check-all" style="font-size:22px"></span>
        <span  v-else @click="updateTask(task)" class=" bi bi-check" style="font-size:22px"></span>


        <span  v-if="loading" class="spinner-border spinner-border-sm"></span>
    </div>
</template>
<script>
import { ref } from '@vue/reactivity';
import { useStore } from 'vuex';
export default {
    props : ['task'],
    setup(){
        const store = useStore();
        
        const loading = ref(false);

        async function updateTask(task){
           
                loading.value = true;
                console.log('loading')
                await store.dispatch("task/updateTask",task)
                loading.value = false;
            
        }

        return{updateTask,loading}
    }
}
</script>
<style scopped >
    span{
        cursor: pointer;
    }
</style>