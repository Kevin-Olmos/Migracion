const boom = require('@hapi/boom');
const db = require('./db.service');
class TaqueriasService {
  constructor() {
    this.generate();
  }
  generate() {
  }

  async create(data) {
    const result = await db.query(`INSERT INTO tacolizador.taqueria (nombre, calidad, precio,
    comentario, latitud, longitud, pagina_fb) VALUES
     ( '${data.nombre}',
     ${data.calidad},
     ${data.precio},
     ' ${data.comentario}',
     ${data.latitud},
     ${data.longitud},
     '${data.pagina_fb}')`);
    let message = 'Error en crear la taqueria';
    if (result.affectedRows) {
      message = 'Se creo correctamente la taqueria';
    }
    return message;
  }
  async find() {
    const rows = await db.query(`SELECT * FROM taqueria`);


    return rows
  }
  async findOne(id) {
    const rows = await db.query(`SELECT * FROM taqueria where id_taqueria=${id}`);


    return rows
  }
  async update(id, changes) {
    const result = await db.query(`UPDATE
  tacolizador.taqueria
  SET
  nombre='${changes.nombre}',
  calidad=${changes.calidad},
  precio =${changes.precio},
  comentario=' ${changes.comentario}',
  latitud=${changes.latitud},
  longitud=${changes.longitud},
  pagina_fb='${changes.pagina_fb}'
  WHERE id_taqueria = ${id}`);
    let message = 'Error en actualizar la taqueria';
    if (result.affectedRows) {
      message = 'La taqueria fue actualizado con exito!!';
    }
    return { message };
  }

  async delete(id) {
    const result = await db.query(`delete FROM taqueria where id_taqueria=${id}`);
    let message = 'Error al borrar la taqueria';
    if (result.affectedRows) {
      message = 'La taqueria fue borrado con exito!!';
    }
    return { message };
  }

}
module.exports = TaqueriasService;
