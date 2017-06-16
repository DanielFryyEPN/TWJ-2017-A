/**
 * Borrachera.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'localDiskDb',
  attributes: {
    id: {
      type: 'integer',
      unique: true
    },
    motivo: {
      type: 'string'
    },
    latitudDondeEmpezo: {
      type: 'integer'
    },
    longitudDondeEmpezo: {
      type: 'integer'
    },
    createdAt: {
      type: 'date'
    },
    updatedAt: {
      type: 'date'
    }
  }
};

