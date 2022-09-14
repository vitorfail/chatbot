const App = require('../app.ts')

exports.post = async (req, res, next) => {
   try{
      var resposta = await App(req.body.coment)
      res.status(201).send(resposta);
   }
   catch{
      res.status(201).send("Houve um erro não poderei responder");
   }
 };
  
 exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Rota PUT com ID! --> ${id}`);
 };
  
 exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Rota DELETE com ID! --> ${id}`);
 };
  
 exports.get = (req, res, next) => {
    res.status(200).send('RotaGET!');
 };
  
 exports.getById = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Rota GET com ID! ${id}`);
 };