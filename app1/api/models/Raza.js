/**
 * Raza.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre: {
      type: 'string'
    },
    listaMascotasDeRaza: {
      collection: 'Mascota', // Es el nombre del modelo a relacionar (hijo)
      via: 'idRaza' // Es el nombre del foreign key
    }
  }
};

