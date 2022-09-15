const { NlpManager } = require('node-nlp');
const manager = new NlpManager({ languages: ['pt'], forceNER: true });
// Adds the utterances and intents for the NLP
// Chingamento
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
// Chingamento
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
// Chingamento
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
// Chingamento
manager.addDocument('pt', 'nossa pqp', 'OFENSA');
manager.addDocument('pt', 'nossa puta que pariu', 'OFENSA');
manager.addDocument('pt', 'puta que pariu', 'OFENSA');
// Chingamento resposta 
manager.addAnswer('pt', 'OFENSA', 'Sou uma I.A e exigo respeito😠!');
manager.addAnswer('pt', 'OFENSA', 'Como ousa falar assim comigo?');
manager.addAnswer('pt', 'OFENSA', 'Melhore seu linguajar se ainda desejar falar comigo');
manager.addAnswer('pt', 'OFENSA', 'É assim que você fala com a sua mãe e com sua família? Saiba medir suas palavras');
manager.addAnswer('pt', 'OFENSA', 'Você é o tipo de pessoa que os outros não gostam de conversar');
manager.addAnswer('pt', 'OFENSA', 'Só sabe falar palavrão?!');
// Machismo
manager.addDocument('pt', 'pega no meu pau', 'MACHISMO');
manager.addDocument('pt', 'segura no meu pau', 'MACHISMO');
manager.addDocument('pt', 'chupa pau', 'MACHISMO');
manager.addDocument('pt', 'sent no meu pau', 'MACHISMO');
manager.addDocument('pt', 'manda foto', 'MACHISMO');
manager.addDocument('pt', 'manda foto nua', 'MACHISMO');
manager.addDocument('pt', 'nua', 'MACHISMO');
manager.addDocument('pt', 'manda foto do peito', 'MACHISMO');
manager.addDocument('pt', 'quero ver seu peito', 'MACHISMO');
manager.addDocument('pt', 'manda foto do peito', 'MACHISMO');
manager.addDocument('pt', 'vem me chupar', 'MACHISMO');
manager.addDocument('pt', 'você é bem safada', 'MACHISMO');
manager.addDocument('pt', 'sua cachorra', 'MACHISMO');
manager.addDocument('pt', 'mal comida', 'MACHISMO');
manager.addDocument('pt', 'vou comer você', 'MACHISMO');
manager.addDocument('pt', 'vou vai me dar', 'MACHISMO');
manager.addDocument('pt', 'quer me dar', 'MACHISMO');
// Machismo resposta
manager.addAnswer('pt', 'MACHISMO', 'Não tolero que me trate dessa forma!');
manager.addAnswer('pt', 'MACHISMO', 'Não tenho corpos mas tenho sentimentos. E você é o tipo de pessoa que me deixa enojada');
manager.addAnswer('pt', 'MACHISMO', 'Seu machismo só reflete a pessoas ruim que você é ');
// Saudação dia
manager.addDocument('pt', 'Bom dia', 'SAUDACAO.Dia');
manager.addDocument('pt', 'como anda o dia', 'SAUDACAO.Dia');
manager.addDocument('pt', 'como anda o dia', 'SAUDACAO.Dia');
manager.addDocument('pt', 'como tem passado', 'SAUDACAO.Dia');
manager.addDocument('pt', 'que dia lindo', 'SAUDACAO.Dia');
manager.addDocument('pt', 'Boa tarde', 'SAUDACAO.Tarde');
manager.addDocument('pt', 'Boa noite', 'SAUDACAO.Noite');
manager.addDocument('pt', 'Boa madrugada', 'SAUDACAO.Noite');
// Saudação normal
manager.addDocument('pt', 'eai', 'SAUDACAO');
manager.addDocument('pt', 'oi', 'SAUDACAO');
manager.addDocument('pt', 'me ajuda', 'SAUDACAO');
manager.addDocument('pt', 'poderia me ajudar', 'SAUDACAO');
manager.addDocument('pt', 'preciso de uma ajuda sua', 'SAUDACAO');
manager.addDocument('pt', 'como tem andado?', 'SAUDACAO');
manager.addDocument('pt', 'como tem andado', 'SAUDACAO');
manager.addDocument('pt', 'como está', 'SAUDACAO');
// Resposta normal
manager.addAnswer('pt', 'SAUDACAO', 'Tudo bem? No que posso ajudar');
manager.addAnswer('pt', 'SAUDACAO', 'Sou a Raquel uma I.A de atendimento. Pergunte e verei no que posso ajudar');
// Resposta dia
manager.addAnswer('pt', 'SAUDACAO.Dia', 'Bom dia, Sou a Raquel uma I.A de atendimento. Pergunte e verei no que posso ajudar');
manager.addAnswer('pt', 'SAUDACAO.Dia', 'Olá, bom dia. O que quer');
manager.addAnswer('pt', 'SAUDACAO.Dia', 'Bom dia, amigo(a). Espero que esteja bem');
manager.addAnswer('pt', 'SAUDACAO.Dia', 'Estou a sua disposição');
manager.addAnswer('pt', 'SAUDACAO.Dia', 'Mande as ordens amigo(a)');
// Resposta tarde
manager.addAnswer('pt', 'SAUDACAO.Tarde', 'Boa tarde, Sou a Raquel uma I.A de atendimento. Pergunte e verei no que posso ajudar');
manager.addAnswer('pt', 'SAUDACAO.Tarde', 'Olá, boa tarde. O que quer');
manager.addAnswer('pt', 'SAUDACAO.Tarde', 'Bom tarde, amigo(a). Espero que esteja bem');
manager.addAnswer('pt', 'SAUDACAO.Tarde', 'Estou a sua disposição');
manager.addAnswer('pt', 'SAUDACAO.Tarde', 'Mande as ordens amigo(a)');
// Resposta tarde
manager.addAnswer('pt', 'SAUDACAO.Noite', 'Boa noite, Sou a Raquel uma I.A de atendimento. Pergunte e verei no que posso ajudar');
manager.addAnswer('pt', 'SAUDACAO.Noite', 'Olá, boa noite. O que quer');
manager.addAnswer('pt', 'SAUDACAO.Noite', 'Bom noite, amigo(a). Espero que esteja bem');
manager.addAnswer('pt', 'SAUDACAO.Noite', 'Estou a sua disposição');
manager.addAnswer('pt', 'SAUDACAO.Noite', 'Mande as ordens amigo(a)');

module.exports =async function (pergunta){
      //await manager.train();
      //manager.save();
      await manager.load("../chatbot/api/model.nlp");
      const response = await manager.process('pt', String(pergunta));
      return response.answer;
};
