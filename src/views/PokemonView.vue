<script setup>
import { ref, onMounted } from "vue";
import servPoke from "@/service/servicio-pokemon";
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";
import { SimpleBar } from "simplebar-vue3";

// para obtener los 20 primeros pokemon automáticamente
const veintePrimerosPokemones = ref(null);
function getAllPoke() {
  servPoke
    .getAll()
    .then((response) => {
      veintePrimerosPokemones.value = response.data.results;
      // console.log(response.data.results);
    })
    .catch((e) => {
      console.log(e);
    });
}

// para obtener el numero de pokemones solicitado
const num = ref(null);
const queryPokeNum = ref(null);
function obtenerNumPokemons() {
  servPoke
    .getNumberOfPokes(num.value)
    .then((response) => {
      queryPokeNum.value = response.data.results;
      console.log(response.data.results);
    })
    .catch((e) => {
      console.log(e);
    });
}

// para obtener el json de un pokemon determinado por nombre
const name = ref(null);
const queryName = ref(null);
function pokemonPorNombre() {
  queryName.value = null;
  servPoke
    .getName(name.value.toLowerCase())
    .then((response) => {
      queryName.value = response.data;
      // console.log(response.data);
    })
    .catch((e) => {
      console.log(e);
    });
}

// para obtener fotos de los pokemon por nombre
const queryImg = ref(null);
const queryImg2 = ref(null);
const name2 = ref(null);
function obtenerFoto() {
  servPoke
    .getName(name2.value.toLowerCase())
    .then((response) => {
      queryImg.value =
        response.data.sprites.other["official-artwork"].front_default;
      queryImg2.value =
        response.data.sprites.other["dream_world"].front_default;
      // console.log(response.data.sprites.other['official-artwork'].front_default);
    })
    .catch((e) => {
      console.log(e);
    });
  queryImg.value = null;
}

onMounted(() => {
  getAllPoke();
});
</script>

<template>
  <h2 class="text-center">POKEMON API</h2>
  <h5 class="text-center">
    Implementa "simplebar" una extension que usa una scrollbar más vistosa con
    el overflow
  </h5>

  <!-- segundo bloque, consulta para obtener el número deseado de pokemones -->
  <SimpleBar class="container-fluid text-center" id="idDos">
    <h3>Obtén el número que pokemones que quieras:</h3>
    <div class="row d-flex justify-content-center">
      <form
        class="col-10 col-sm-8 col-lg-6"
        @submit.prevent="obtenerNumPokemons"
      >
        <div class="input-group mb-3 mt-3">
          <input
            v-model="num"
            type="number"
            class="form-control"
            placeholder="Número de pokemones a buscar: "
            aria-label="Recipient's username"
          />
          <button class="btn btn-outline-secondary">Obtener {{ num }}</button>
        </div>
      </form>
    </div>
    <div v-if="num" class="col-lg-10 list-group text-center">
      <p v-if="num">{{ num }} primeros pokemones:</p>
      <ul>
        <li v-for="(poke, id) in queryPokeNum" :key="poke.id">
          {{ id + 1 }}.{{
            poke.name.charAt(0).toUpperCase() + poke.name.slice(1)
          }}
        </li>
      </ul>
    </div>
    <p v-else>Sin coincidencias</p>
  </SimpleBar>

  <!-- tercer bloque, consulta para obtener el JSON de pokemon por su nombre -->
  <!-- usando vue-json-pretty extension vue para mostrar datos json mas bonitos -->
  <SimpleBar class="container-fluid text-center" id="idTres">
    <h3>Obtén toda la información de tu pokemon</h3>
    <div class="row d-flex justify-content-center">
      <form class="col-10 col-sm-8 col-lg-6" @submit.prevent="pokemonPorNombre">
        <div class="input-group mb-3 mt-3">
          <input
            v-model="name"
            type="text"
            class="form-control"
            placeholder="Nombre de pokemon a buscar: "
            aria-label="Recipient's username"
          />
          <button class="btn btn-outline-secondary">Buscar {{ name }}</button>
        </div>
      </form>
    </div>
    <div v-if="queryName">
      <p>{{ name.toUpperCase() }} (Json embellecido con 'vue-json-pretty'):</p>
      <p>
        <vue-json-pretty
          :deep="3"
          show-line-number
          show-icon
          :data="{ queryName }"
        />
      </p>
    </div>
    <p v-else>Sin coincidencias</p>
  </SimpleBar>

  <!-- cuarto bloque para obtener fotos de pokemones por nombre -->
  <div class="container-fluid text-center" id="idCuatro">
    <h3>Busca fotos de tus pokemones!!</h3>
    <div>
      <div class="row d-flex justify-content-center">
        <form class="col-10 col-sm-8 col-lg-6" @submit.prevent="obtenerFoto">
          <div class="input-group mb-3 mt-3">
            <input
              v-model="name2"
              type="text"
              class="form-control"
              placeholder="Pokemon a buscar: "
              aria-label="Recipient's username"
            />
            <button class="btn btn-outline-secondary">
              Buscar {{ name2 }}
            </button>
          </div>
        </form>
      </div>
    </div>
    <div v-if="queryImg">
      <p>Fotos de {{ name2 }}:</p>
      <br />
      <div id="idImagenes" class="d-flex flex-nowrap">
        <div><img :src="queryImg" /></div>
        <div><img :src="queryImg2" /></div>
      </div>
    </div>
    <p v-else>Sin coincidencias</p>
  </div>

  <!-- primer bloque, consulta automática, limitada por la api a los 20 primeros pokemon -->
  <SimpleBar class="container-fluid" id="idUno">
    <p class="text-center h3">Listado 20 primeros pokemon (hay más de 1000):</p>
    <div class="row d-flex justify-content-center">
      <div class="col-lg-10 list-group text-center">
        <a
          :href="poke.url"
          target="_blank"
          class="list-group-item list-group-item-info list-group-item-action"
          v-for="(poke, id) in veintePrimerosPokemones"
          :key="poke.id"
        >
          {{ id + 1 }}.{{
            poke.name.charAt(0).toUpperCase() + poke.name.slice(1)
          }}
          - {{ poke.url }}</a
        >
      </div>
    </div>
  </SimpleBar>
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";
// generales

SimpleBar {
  background-color: orange;
}

h5 {
  margin-bottom: 3vh;
  padding: 0 0 2% 0;
  background-color: map-get($mapa-colores, "azul3");
}

// bloque uno
#idUno {
  max-height: 600px;
  padding: 3%;
  background-color: map-get($mapa_colores, "azul2");

  div a {
    background-color: map-get($mapa_colores, "azul3");
    color: map-get($mapa_colores, "azul1");

    &:hover {
      color: map-get($mapa_colores, "azul5");
    }
  }
}

// bloque dos
#idDos {
  max-height: 300px;

  h3 {
    padding-top: 0.5%;
  }

  div ul {
    list-style: none;
  }

  div:nth-child(3) {
    padding: 10px 0;
    border-radius: 10px;
    background-color: map-get($mapa_colores, "azul1");
    margin: auto;
  }
}

// bloque tres
#idTres {
  h3 {
    padding-top: 2%;
  }

  margin-top: 0%;
  margin-bottom: 0%;
  max-height: 300px;
  background-color: map-get($mapa_colores, "azul2");
}

// bloque cuatro
#idCuatro {
  padding-top: 2%;

  #idImagenes {
    div {
      width: 45%;
    }

    img {
      width: 90%;
    }
  }
}

@media only screen and (min-width: 576px) {
  #idDos {
    div ul {
      columns: 2;
    }
  }
}

@media only screen and (min-width: 720px) {
  #idDos {
    div ul {
      columns: 3;
    }
  }
}

@media only screen and (min-width: 960px) {
  #idDos {
    div ul {
      columns: 4;
    }
  }
}

@media only screen and (min-width: 1140px) {
  #idDos {
    div ul {
      columns: 5;
    }
  }
}
</style>
