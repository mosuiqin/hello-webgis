<template>
  <div class="leftstatus status">
    <car />
    <property />
    <energy />
  </div>
</template>

<script>
import car from './car.vue'
import energy from './energy.vue'
import property from './property.vue'
export default {
  name: 'leftstatus',
  components: { car, property, energy },
}
</script>

<style scoped>
.leftstatus {
  left: 0.2rem;
}
</style>
