<script setup>
import servicioDatosPersonas from "@/service/servicioDatosPersonas";
import { faker } from "@faker-js/faker";
import { ref, onMounted, reactive } from "vue";
import { SimpleBar } from "simplebar-vue3";

const consulta = ref(null);
const idPersona = ref(null);
const clienteObtenido = ref(null);
const idPersonaBorrar = ref(null);

function cargarListadoPersonas() {
  servicioDatosPersonas
    .getAll()
    .then((response) => {
      consulta.value = response.data;
    })
    .catch((e) => console.log(e));
}

function obtenerPorId() {
  servicioDatosPersonas
    .get(idPersona.value)
    .then((response) => {
      clienteObtenido.value = response.data;
      console.log(response.data);
    })
    .catch((e) => console.log(e));
  idPersona.value = null;
  clienteObtenido.value = null;
}

function borrarPorId() {
  servicioDatosPersonas
    .delete(idPersonaBorrar.value)
    .then((response) => {
      cargarListadoPersonas();
      consulta.value = response.data;
    })
    .catch((e) => console.log(e));
  idPersonaBorrar.value = null;
}

const nombreN2 = ref(null);
const apellidoN2 = ref(null);
const correoN2 = ref(null);
function crearPersona() {
  const nuevoObjetoPersona = reactive({
    nombre: nombreN2,
    apellido: apellidoN2,
    correo: correoN2,
    avatar: "",
  });
  nuevoObjetoPersona.avatar = faker.image.avatar();
  servicioDatosPersonas
    .create(JSON.stringify(nuevoObjetoPersona))
    .then((response) => {
      cargarListadoPersonas();
      consulta.value = response.data;
      console.log(consulta.value);
    })
    .catch((e) => console.log(e));
  nombreN2.value = null;
  apellidoN2.value = null;
  correoN2.value = null;
}

const idN3 = ref(null);
const nombreN3 = ref(null);
const apellidoN3 = ref(null);
const correoN3 = ref(null);
function cambiarPersona() {
  const personaCambiada = reactive({
    id: idN3,
    nombre: nombreN3,
    apellido: apellidoN3,
    correo: correoN3,
    avatar: "",
  });
  personaCambiada.avatar = faker.image.avatar();
  servicioDatosPersonas
    .update(personaCambiada.id, JSON.stringify(personaCambiada))
    .then(() => {
      cargarListadoPersonas();
    })
    .catch((e) => console.log(e));
  idN3.value = null;
  nombreN3.value = null;
  apellidoN3.value = null;
  correoN3.value = null;
}

onMounted(() => {
  cargarListadoPersonas();
});
</script>

<template>
  <h2 class="text-center">JSON SERVER</h2>
  <!-- bloque uno -->
  <SimpleBar id="idUno" class="text-center">
    <h5>
      Lista clientes obtenida mediante json-server y faker(haz scroll para verla
      al completo):
    </h5>
    <p>(faker es una librería que genera datos automáticamente de todo tipo)</p>
    <p>
      (tambien uso simplebar un complemento de vue para personalizar la barra de
      scroll)
    </p>
    <p v-for="cliente in consulta" :key="cliente.id">
      {{ cliente.nombre }} {{ cliente.apellido }} { {{ cliente.correo }} }
      (id:{{ cliente.id }}) <img :src="cliente.avatar" />
    </p>
  </SimpleBar>

  <!-- bloque dos -->
  <div id="idDos" class="text-center">
    <h5>Obtener cliente por id:</h5>
    <ul>
      <p v-if="clienteObtenido">
        {{ clienteObtenido.nombre }} {{ clienteObtenido.apellido }} {
        {{ clienteObtenido.correo }} } (id:{{ clienteObtenido.id }})
        <img :src="clienteObtenido.avatar" />
      </p>
    </ul>
    <form
      class="col-10 col-sm-8 col-lg-6 mx-auto"
      @submit.prevent="obtenerPorId"
    >
      <div class="input-group mb-3 mt-3">
        <input
          v-model="idPersona"
          type="number"
          class="form-control"
          placeholder="Id a buscar:"
        />
        <button class="btn btn-outline-secondary">Buscar por id</button>
      </div>
    </form>
  </div>
  <!-- bloque tres -->
  <div id="idTres" class="text-center">
    <h5>Borra un cliente por id:</h5>
    <form
      class="col-10 col-sm-8 col-lg-6 mx-auto"
      @submit.prevent="borrarPorId"
    >
      <div class="input-group mb-3 mt-3">
        <input
          v-model="idPersonaBorrar"
          type="number"
          class="form-control"
          placeholder="Id a borrar:"
        />
        <button class="btn btn-outline-secondary">Borrar por id</button>
      </div>
    </form>
  </div>
  <!-- bloque cuatro -->
  <div id="idCuatro" class="text-center">
    <h5>Crea un nuevo cliente(avatar automático con faker):</h5>
    <form
      class="col-10 col-sm-6 col-lg-4 mx-auto"
      @submit.prevent="crearPersona"
    >
      <div class="input-group">
        <input
          type="text"
          class="form-control mb-2"
          placeholder="Nombre"
          v-model="nombreN2"
        />
      </div>

      <div class="input-group">
        <input
          type="text"
          class="form-control mb-2"
          placeholder="Apellido"
          v-model="apellidoN2"
        />
      </div>
      <div class="input-group">
        <input
          type="text"
          class="form-control mb-2"
          placeholder="Correo"
          v-model="correoN2"
        />
      </div>
      <button class="btn">Crear cliente</button>
    </form>
  </div>
  <!-- bloque cinco -->
  <div id="idCinco" class="text-center">
    <h5>Modificar cliente:</h5>
    <form
      class="col-10 col-sm-6 col-lg-4 mx-auto"
      @submit.prevent="cambiarPersona"
    >
      <div class="input-group">
        <input
          type="text"
          class="form-control mb-2"
          placeholder="Id"
          v-model="idN3"
        />
      </div>
      <div class="input-group">
        <input
          type="text"
          class="form-control mb-2"
          placeholder="Nombre"
          v-model="nombreN3"
        />
      </div>
      <div class="input-group">
        <input
          type="text"
          class="form-control mb-2"
          placeholder="Apellido"
          v-model="apellidoN3"
        />
      </div>
      <div class="input-group">
        <input
          type="text"
          class="form-control mb-2"
          placeholder="Correo"
          v-model="correoN3"
        />
      </div>
      <button class="btn">Cambiar cliente</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";

img {
  width: 50px;
  border-radius: 50%;
}

#idUno {
  height: 50vh;
  background-color: map-get($mapa-colores, "azul2");
  overflow-y: scroll;
  scrollbar-width: auto;
  padding: 2% 0;
}

#idDos {
  background-color: map-get($mapa-colores, "azul1");
  height: auto;
  padding: 2% 0;
}

#idTres {
  background-color: map-get($mapa-colores, "azul2");
  color: map-get($mapa-colores, "azul5");
  padding: 2% 0;
}

#idCuatro {
  background-color: map-get($mapa-colores, "azul1");
  color: map-get($mapa-colores, "azul5");
  padding: 2% 0;
}

#idCinco {
  background-color: map-get($mapa-colores, "azul2");
  color: map-get($mapa-colores, "azul5");
  width: 100vw;
  padding: 2% 0;
}
</style>
