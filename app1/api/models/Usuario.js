/**
 * Usuario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var Passwords = require('machinepack-passwords');

module.exports = {
  connection: 'localDiskDb',
  attributes: {
    nombre: {
      type:'string'
    },
    password: {
      type: 'string',
      required: true
    },
    correo: {
      type: 'email'
    },
    duenosMascotas: {
      collection: 'UsuarioMascota',
      via: 'idUsuario'
    }
  },
  beforeCreate: function (usuario, cb) {
    sails.log.info('Usuario', usuario);
    Passwords.encryptPassword({
      password: usuario.password
    }).exec({
      error: function (err) {
        cb('Error de enciptacion', err);
      },
      success: function (hashedPassword) {
        usuario.password = hashedPassword;
        cb();
      }
    });
  },
  beforeUpdate: function (valoresAActualizar, cb) {
    sails.log.info('Usuario', valoresAActualizar);
    if(valoresAActualizar.password) {
      Passwords.encryptPassword({
        password: valoresAActualizar.password
      }).exec({
        error: function (err) {
          cb('Error de enciptacion', err);
        },
        success: function (hashedPassword) {
          valoresAActualizar.password = hashedPassword;
          cb();
        }
      });
    } else {
      cb();
    }
  }
};

