/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

var Passwords = require('machinepack-passwords');

module.exports.bootstrap = function(cb) {
  /*Usuario.findOne({
    correo: 'marcelo@marcelo.com'
  }).exec(function (err, usuarioEncontrado) {
    if (err) cb('error');
    if (!usuarioEncontrado) {
      cb('No existe el usuario');
    } else {
      if (usuarioEncontrado.password == '123456') {
        console.log('No aplicado el hash');
        Passwords.encryptPassword({
          password: usuarioEncontrado.password
        }).exec({
// An unexpected error occurred.
          error: function (err) {
            cb('Error de enciptacion');
          },
          success: function (passwordMarcelo) {
            Usuario.update(
              {
              id: usuarioEncontrado.id
              },
              {
                password: passwordMarcelo
              }).exec(function (err, marceloActualizado) {
                if (err) return cb(err);
                if (!marceloActualizado) {
                  cb('Marcelo no existe')
                } else {
                  console.log("Sails levantado");
                  cb();
                }
            });
          }
        });
      } else {
        console.log('Aplicar hash');
        cb();
      }
    }
  });*/
  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
