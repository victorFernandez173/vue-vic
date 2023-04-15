<script setup>
import lista from "@/components/todoList.vue";
</script>

<template>
  <h2 class="text-center">TOOLS</h2>
  <lista />
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";

h2 {
  background-color: map-get($mapa-colores, "azul3");
  margin-bottom: 0;
  padding: 10px 0;
}
</style>
