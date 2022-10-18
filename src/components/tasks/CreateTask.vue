<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 mb-4">
        
          <h4>CreateTask:</h4>
          <form @submit.prevent="storeTask" class="row">
            <div class="col-md-6">
                <input v-model="title" class="form-control" type="text" />
                <div class="form-text text-danger">
                    {{titleErrorText}}
                </div>
            </div>
             <div class="col-auto">
                <button class="btn btn-dark">Create</button>
            </div>
          </form>
        
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from '@vue/reactivity';
import { useStore } from 'vuex';
export default {
    setup(){
        const store = useStore();
        const title = ref("");
        const titleErrorText = ref("")

        function storeTask(){
            if(title.value == ""){
                titleErrorText.value = "title is required"
                console.log("hasn")
            }else{
                titleErrorText.value = "";
                store.dispatch("storeTask",title.value)
            }
        }

        return{storeTask,title,titleErrorText}
    }
};
</script>
<style scoped>
</style>