<script setup>
import navBar from "@/components/navBar.vue";
import titulo from "@/components/tituloHeader.vue";
</script>

<template>
  <titulo />
  <navBar :links="['Home', 'Tools', 'Pokemon', 'JsonServer', 'Author']" />
  <router-view />
</template>

<style lang="scss">
@import "./assets/main.scss";

body {
  background-color: map-get($mapa-colores, "azul1") !important;
}
</style>
