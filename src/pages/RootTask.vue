<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col">
        <h2>tasks</h2>
        
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from '@vue/runtime-core';
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const allAasks = computed(()=> store.getters.allTasks)
    const count = computed(()=> store.state.count)
    function fetchTasks() {
      store.dispatch("fetchTasks");
    }
    fetchTasks();
    return{count, allAasks}
  },
};
</script>
<style>
</style>