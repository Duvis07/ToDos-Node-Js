const { v4: uudiv4 } = require("uuid");
//clase que contiene los atributos de la tarea
class Tarea {
  id = "";
  desc = "";
  completadoEn = null;

  constructor(desc) {
    this.id = uudiv4();
    this.desc = desc;
    this.completadoEn = null;
  }
}

module.exports = Tarea;
