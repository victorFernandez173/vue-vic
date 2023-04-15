const { faker } = require("@faker-js/faker");

function generarPersonas() {
  const personas = [];
  for (var id = 0; id < 13; id++) {
    let nombre = faker.name.firstName();
    let apellido = faker.name.lastName();
    let correo = faker.internet.email();
    let avatar = faker.image.avatar();

    personas.push({
      id: id,
      nombre: nombre,
      apellido: apellido,
      correo: correo,
      avatar: avatar,
    });
  }

  return { personas: personas };
}

module.exports = generarPersonas;
