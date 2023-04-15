<script setup>
const props = defineProps({
  name: {
    type: String,
    required: false
  },
  surname: {
    type: String,
    required: false
  },
  age: {
    type: Number,
    required: false
  }
})
</script>

<template>
  <h2>{{ name }} {{ surname }}</h2>
</template>