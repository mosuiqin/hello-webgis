<template>
  <div class="rightstatus status">
    <order />
    <accident />
    <smartRadar />
  </div>
</template>

<script>
import order from './order.vue'
import accident from './accident.vue'
import smartRadar from './smartRadar.vue'
export default {
  name: 'rightstatus',
  components: { order, accident, smartRadar },
}
</script>

<style scoped>
.rightstatus {
  left: 0.2rem;
}
</style>
