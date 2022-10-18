<template lang="">
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-4 mb-3">
                    <h6>filter tasks</h6>
                    <select v-model="number" @change = "filterTasks" class="form-select form-select-sm">
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="50">50</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from '@vue/runtime-core';
import { useStore } from 'vuex';
export default {
    setup(){
        const store = useStore()
        const number = ref()
        function filterTasks(){
            store.dispatch("filterTasks",number.value)
        }

        return {filterTasks,number}
    }
};
</script>
<style scoped>
</style>