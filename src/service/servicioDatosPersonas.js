import http from "./http-axios";

class servicioDatosPersonas {
  getAll() {
    return http.get("/personas");
  }

  get(id) {
    return http.get(`/personas/${id}`);
  }

  findByGeneral(texto) {
    return http.get(`/personas?q=${texto}`);
  }

  create(data) {
    return http.post("/personas", data);
  }

  update(id, data) {
    return http.put(`/personas/${id}`, data);
  }

  delete(id) {
    return http.delete(`/personas/${id}`);
  }

  deleteAll() {
    return http.delete(`/personas`);
  }
}

export default new servicioDatosPersonas();
