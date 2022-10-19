<template>
    <div class="ms-2">
        <span @click="deleteTask" class=" bi bi-trash">

        </span>
        <span  v-if="loading" class="spinner-border spinner-border-sm"></span>
    </div>
</template>
<script>
import { ref } from '@vue/reactivity';
import { useStore } from 'vuex';
export default {
    props : ['id'],
    setup(props){
        const store = useStore();
        
        const loading = ref(false);

        async function deleteTask(){
           
                loading.value = true;
                console.log('loading')
                await store.dispatch("task/deleteTask",props.id)
                loading.value = false;
            
        }

        return{deleteTask,loading}
    }
}
</script>
<style >
    
</style>