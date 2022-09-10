const { NlpManager } = require('node-nlp');

const manager = new NlpManager({ languages: ['pt'], forceNER: true });
// Adds the utterances and intents for the NLP
manager.addDocument('pt', 'Bom dia puta', 'OFENSA');
manager.addDocument('pt', 'Bom dia rapariga', 'OFENSA');
manager.addDocument('pt', 'Bom dia kenga', 'OFENSA');
manager.addDocument('pt', 'Bom dia catraia', 'OFENSA');
manager.addDocument('pt', 'Bom dia krl', 'OFENSA');
manager.addDocument('pt', 'Bom dia caralho', 'OFENSA');
manager.addDocument('pt', 'Bom dia bicha', 'OFENSA');
manager.addDocument('pt', 'Bom dia puta', 'OFENSA');
manager.addDocument('pt', 'Bom dia rapariga', 'OFENSA');
manager.addDocument('pt', 'Bom dia kenga', 'OFENSA');
manager.addDocument('pt', 'Bom dia catraia', 'OFENSA');
manager.addDocument('pt', 'Bom dia krl', 'OFENSA');
manager.addDocument('pt', 'Bom dia caralho', 'OFENSA');
manager.addDocument('pt', 'Bom dia bicha', 'OFENSA');

manager.addDocument('pt', 'fala puta', 'OFENSA');
manager.addDocument('pt', 'fala rapariga', 'OFENSA');
manager.addDocument('pt', 'fala kenga', 'OFENSA');
manager.addDocument('pt', 'fala catraia', 'OFENSA');
manager.addDocument('pt', 'fala krl', 'OFENSA');
manager.addDocument('pt', 'fala caralho', 'OFENSA');
manager.addDocument('pt', 'fala bicha', 'OFENSA');
manager.addDocument('pt', 'fala puta', 'OFENSA');
manager.addDocument('pt', 'fala rapariga', 'OFENSA');
manager.addDocument('pt', 'fala kenga', 'OFENSA');
manager.addDocument('pt', 'fala catraia', 'OFENSA');
manager.addDocument('pt', 'fala krl', 'OFENSA');
manager.addDocument('pt', 'fala caralho', 'OFENSA');
manager.addDocument('pt', 'fala bicha', 'OFENSA');

manager.addDocument('pt', 'eai puta', 'OFENSA');
manager.addDocument('pt', 'eai rapariga', 'OFENSA');
manager.addDocument('pt', 'eai kenga', 'OFENSA');
manager.addDocument('pt', 'eai catraia', 'OFENSA');
manager.addDocument('pt', 'eai krl', 'OFENSA');
manager.addDocument('pt', 'eai caralho', 'OFENSA');
manager.addDocument('pt', 'eai bicha', 'OFENSA');
manager.addDocument('pt', 'eai puta', 'OFENSA');
manager.addDocument('pt', 'eai rapariga', 'OFENSA');
manager.addDocument('pt', 'eai kenga', 'OFENSA');
manager.addDocument('pt', 'eai catraia', 'OFENSA');
manager.addDocument('pt', 'eai krl', 'OFENSA');
manager.addDocument('pt', 'eai caralho', 'OFENSA');
manager.addDocument('pt', 'eai bicha', 'OFENSA');

manager.addDocument('pt', 'nossa pqp', 'OFENSA');
manager.addDocument('pt', 'nossa puta que pariu', 'OFENSA');
manager.addDocument('pt', 'puta que pariu', 'OFENSA');




// Train also the NLG
manager.addAnswer('pt', 'OFENSA', 'Sou uma I.A e exigo respeito😠!');
manager.addAnswer('pt', 'OFENSA', 'Como ousa falar assim comigo?');
manager.addAnswer('pt', 'OFENSA', 'Melhore seu linguajar se ainda desejar falar comigo');
manager.addAnswer('pt', 'OFENSA', 'É assim que você fala com a sua mãe e com sua família? Saiba medir suas palavras');
manager.addAnswer('pt', 'OFENSA', 'Você é o tipo de pessoa que os outros não gostam de conversar');
manager.addAnswer('pt', 'OFENSA', 'Só sabe falar palavrão?!');

manager.addDocument('pt', 'Bom dia puta', 'OFENSA');
manager.addDocument('pt', 'Bom dia rapariga', 'OFENSA');
manager.addDocument('pt', 'Bom dia kenga', 'OFENSA');
manager.addDocument('pt', 'Bom dia catraia', 'OFENSA');
manager.addDocument('pt', 'Bom dia krl', 'OFENSA');
manager.addDocument('pt', 'Bom dia caralho', 'OFENSA');
manager.addDocument('pt', 'Bom dia bicha', 'OFENSA');
manager.addDocument('pt', 'Bom dia puta', 'OFENSA');
manager.addDocument('pt', 'Bom dia rapariga', 'OFENSA');
manager.addDocument('pt', 'Bom dia kenga', 'OFENSA');
manager.addDocument('pt', 'Bom dia catraia', 'OFENSA');
manager.addDocument('pt', 'Bom dia krl', 'OFENSA');
manager.addDocument('pt', 'Bom dia caralho', 'OFENSA');
manager.addDocument('pt', 'Bom dia bicha', 'OFENSA');

manager.addDocument('pt', 'fala puta', 'OFENSA');
manager.addDocument('pt', 'fala rapariga', 'OFENSA');
manager.addDocument('pt', 'fala kenga', 'OFENSA');
manager.addDocument('pt', 'fala catraia', 'OFENSA');
manager.addDocument('pt', 'fala krl', 'OFENSA');
manager.addDocument('pt', 'fala caralho', 'OFENSA');
manager.addDocument('pt', 'fala bicha', 'OFENSA');
manager.addDocument('pt', 'fala puta', 'OFENSA');
manager.addDocument('pt', 'fala rapariga', 'OFENSA');
manager.addDocument('pt', 'fala kenga', 'OFENSA');
manager.addDocument('pt', 'fala catraia', 'OFENSA');
manager.addDocument('pt', 'fala krl', 'OFENSA');
manager.addDocument('pt', 'fala caralho', 'OFENSA');
manager.addDocument('pt', 'fala bicha', 'OFENSA');

manager.addDocument('pt', 'eai puta', 'OFENSA');
manager.addDocument('pt', 'eai rapariga', 'OFENSA');
manager.addDocument('pt', 'eai kenga', 'OFENSA');
manager.addDocument('pt', 'eai catraia', 'OFENSA');
manager.addDocument('pt', 'eai krl', 'OFENSA');
manager.addDocument('pt', 'eai caralho', 'OFENSA');
manager.addDocument('pt', 'eai bicha', 'OFENSA');
manager.addDocument('pt', 'eai puta', 'OFENSA');
manager.addDocument('pt', 'eai rapariga', 'OFENSA');
manager.addDocument('pt', 'eai kenga', 'OFENSA');
manager.addDocument('pt', 'eai catraia', 'OFENSA');
manager.addDocument('pt', 'eai krl', 'OFENSA');
manager.addDocument('pt', 'eai caralho', 'OFENSA');
manager.addDocument('pt', 'eai bicha', 'OFENSA');

manager.addDocument('pt', 'nossa pqp', 'OFENSA');
manager.addDocument('pt', 'nossa puta que pariu', 'OFENSA');
manager.addDocument('pt', 'puta que pariu', 'OFENSA');




// Train also the NLG
manager.addAnswer('pt', 'SAUDACAO.Dia', 'Bom dia, Sou a Raquel uma I.A de atendimento. Pergunte e verei no que posso ajudar');
manager.addAnswer('pt', 'SAUDACAO.Dia', 'Olá, bom dia. O que quer');
manager.addAnswer('pt', 'SAUDACAO.Dia', 'Bom dia, amigo(a). Espero que esteja bem');
manager.addAnswer('pt', 'SAUDACAO.Dia', 'É assim que você fala com a sua mãe e com sua família? Saiba medir suas palavras');
manager.addAnswer('pt', 'SAUDACAO.Dia', 'Você é o tipo de pessoa que os outros não gostam de conversar');
manager.addAnswer('pt', 'SAUDACAO.Dia', 'Só sabe falar palavrão?!');


function App(){
  (async() => {
      await manager.load('./model.nlp');
      //manager.save('./model.nlp');
      const response = await manager.process('pt', 'Boa tarde');
      console.log(response.answer);
  })();
}

App();
