<script setup>
import { BIconMenuApp, BIconMenuButton, BIconMenuButtonWide, BIconMenuButtonWideFill } from 'bootstrap-icons-vue';
import { ref } from 'vue';

const pulsado = ref(false);

const props = defineProps({
  "links": Array
})
</script>

<template>
  <nav id="idMenu">
    <button @click="pulsado = !pulsado">
      <BIconMenuButtonWideFill></BIconMenuButtonWideFill>
    </button>
  </nav>
  <nav id="idOpciones" :class="{ desplegado: pulsado }">
    <router-link v-for="section in props.links" :to="{ name: section }">{{ section }}</router-link>
  </nav>
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";

* {
  box-sizing: border-box;
}

button {
  background-color: map-get($mapa-colores , "azul4");
  color: map-get($mapa-colores, "azul1");
  border: none;

  &:hover {
    color: map-get($mapa-colores , "azul5");
  }
}

#idMenu {
  display: none;
}

nav {
  margin: auto;
  display: flex;
  height: 80px;
  background-color: map-get($mapa-colores , "azul4");
  align-items: center;
  padding: 0 20px;
  font-size: 1.3rem;
  justify-content: space-evenly;

  a {
    color: map-get($mapa-colores, "azul1");
    text-decoration: none;
    text-align: center;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 15px;

    &:hover {
      background-color: map-get($mapa-colores, "azul2");
      color: map-get($mapa-colores , "azul4");
    }
  }
}

@media only screen and (max-width: 576px) {
  .desplegado {
    display: flex;
  }

  #idMenu {
    margin: auto;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    height: 60px;
    background-color: map-get($mapa-colores , "azul4");
    font-size: 2.3rem;

    button:hover {
      background-color: map-get($mapa-colores , "azul4");
    }
  }

  nav {
    display: none;
    flex-direction: column;
    height: 300px;

    a {
      width: 100vw;
      height: 60px;
    }
  }
}
</style>