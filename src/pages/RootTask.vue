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
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    function fetchTasks() {
      store.dispatch("fetchTasks");
    }
    fetchTasks();
  },
};
</script>
<style>
</style>