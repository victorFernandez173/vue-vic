import https from "./http-pokemon";

class servicioDatosPokemon {
  getAll() {
    return https.get("/pokemon");
  }

  getNumberOfPokes(num) {
    return https.get(`/pokemon?limit=${num}`);
  }

  getName(name) {
    return https.get(`/pokemon/${name}`);
  }

  get(id) {
    return https.get(`/pokemon/${id}`);
  }

  create(data) {
    return https.post("/pokemon", data);
  }

  update(id, data) {
    return https.put(`/pokemon/${id}`, data);
  }

  delete(id) {
    return https.delete(`/pokemon/${id}`);
  }

  deleteAll() {
    return https.delete(`/pokemon`);
  }
}

export default new servicioDatosPokemon();
