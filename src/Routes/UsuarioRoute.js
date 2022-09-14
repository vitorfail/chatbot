const UsuarioController = require('../Controllers/UsuarioController');
module.exports = (app) => {
   app.post('/chat', UsuarioController.post);
   app.put('/chat/:id', UsuarioController.put);
   app.delete('/chat/:id', UsuarioController.delete);
   app.get('/chatbot', UsuarioController.get);
   app.get('/chat/:id', UsuarioController.getById);
}