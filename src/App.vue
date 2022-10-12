<template>
  <HeaderDiv/>

  <router-view></router-view>
</template>

<script>
import HeaderDiv from './components/HeaderDiv.vue'

export default {
  name: 'App',
  components: {
    HeaderDiv
  }
}
</script>

<style>

</style>
