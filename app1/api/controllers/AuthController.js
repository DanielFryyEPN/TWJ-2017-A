/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var Passwords = require('machinepack-passwords');

module.exports = {
	logIn: function (req, res) {
	  var parametros = req.allParams();
	  if(parametros.correo && parametros.password) {
      Usuario.findOne({correo: parametros.correo}).exec(function (err, usuarioEncontrado) {
        if (err) return res.serverError('Error', err);
        if (!usuarioEncontrado) return res.notFound('Usuario no encontrado');
        else {
          Passwords.checkPassword({
            passwordAttempt: parametros.password,
            encryptedPassword: usuarioEncontrado.password
          }).exec({
            error: function (err) {
              return res.serverError(err);
            },
            incorrect: function () {
              return res.badRequest('Datos invalidos');
            },
            success: function () {
              return res.ok('Estas logueado');
            }
          });
        }
      });
    }
  },
  logOut: function (req, res) {

  },
  logInFacebook: function (req, res) {

  }
};
