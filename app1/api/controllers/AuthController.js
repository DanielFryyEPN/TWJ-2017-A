/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var Passwords = require('machinepack-passwords');
var jwt = require('jsonwebtoken');

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
              // devolver la credencial
              var token = jwt.sign(
                {
                  exp: Math.floor(Date.now() / 1000) + (60 * 60),
                  data: {
                    id: usuarioEncontrado.id,
                    nombre: usuarioEncontrado.nombre,
                    correo: usuarioEncontrado.correo
                  }
                },
                'leninAmaACorrea'
              );
              return res.ok(token);
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
