<template>
  <div>
    <div v-if="loading" class="container" id="loading">
      <div class="row">
        <div>
          <span class="loader"></span>
        </div>
      </div>
    </div>

    <div v-else class="container mt-5">
      <CreateTask></CreateTask>
      <hr />
      <FilterTask></FilterTask>

      <div class="row g-3">
        <div v-for="task in allAasks" :key="task.id" class="col-md-4">
          <div class="card" :class="{ 'bg-light': task.completed }">
            <div class="card-body d-flex justify-content-between align-items-center">

              <div>
                <del v-if="task.completed">{{ task.title }}</del>
                <div v-else>{{ task.title }}</div>
              </div>

              <div class="d-flex align-items-center">
                <UpdateTask :task="task"></UpdateTask>
              <DeleteTask :id="task.id"></DeleteTask>
              </div>
              
              

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FilterTask from "../components/tasks/FilterTask.vue";
import CreateTask from "../components/tasks/CreateTask.vue";
import UpdateTask from "../components/tasks/UpdateTask.vue";
import DeleteTask from "../components/tasks/DeleteTask.vue";
import { computed, ref } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  components: {
    FilterTask,
    CreateTask,
    UpdateTask,
    DeleteTask
  },
  setup() {
    const store = useStore();
    const allAasks = computed(() => store.getters["task/allTasks"]);
    const count = computed(() => store.state.count);
    const loading = ref(false);

    async function fetchTasks() {
      loading.value = true;
      await store.dispatch("task/fetchTasks");
      loading.value = false;
    }
    fetchTasks();

    return { count, allAasks, loading };
  },
};
</script>
<style scoped>
#loading {
  margin: 30px 40%;
}
.loader {
  width: 12px;
  height: 60px;
  display: inline-block;
  position: relative;
  border-radius: 4px;
  box-sizing: border-box;
  animation: animloader 1s linear infinite alternate;
}

@keyframes animloader {
  0% {
    box-shadow: 20px 0 rgba(255, 255, 255, 0), 40px 0 rgba(255, 255, 255, 0),
      60px 0 rgba(255, 255, 255, 0), 80px 0 rgba(255, 255, 255, 0),
      100px 0 rgba(255, 255, 255, 0);
  }
  20% {
    box-shadow: 20px 0 black, 40px 0 rgba(255, 255, 255, 0),
      60px 0 rgba(255, 255, 255, 0), 80px 0 rgba(255, 255, 255, 0),
      100px 0 rgba(255, 255, 255, 0);
  }
  40% {
    box-shadow: 20px 0 black, 40px 0 black, 60px 0 rgba(255, 255, 255, 0),
      80px 0 rgba(255, 255, 255, 0), 100px 0 rgba(255, 255, 255, 0);
  }
  60% {
    box-shadow: 20px 0 black, 40px 0 black, 60px 0 black,
      80px 0 rgba(255, 255, 255, 0), 100px 0 rgba(255, 255, 255, 0);
  }
  80% {
    box-shadow: 20px 0 black, 40px 0 black, 60px 0 black, 80px 0 black,
      100px 0 rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 20px 0 black, 40px 0 black, 60px 0 black, 80px 0 black,
      100px 0 black;
  }
}
</style>