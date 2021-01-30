const bot = require("venom-bot")
const banco = require("./banco")
const stages = require("./stages")

bot.create().then((client) => start(client));
function start(client) {
  client.onMessage((message) => {
    //Verifico qual o stage do usuario e se for stage 4 desativa a interação com o robo 
    const stage = getStage(message.from)
    if (stage != 4) {
      // Enviar a mensagem que foi retornanda nos stages
      let resp = stages.step[stage].obj.execute(
        message.from,
        message.body
      )
      for (let index = 0; index < resp.length; index++) {
        const element = resp[index];
        client.sendText(message.from, element);
      }
    }
  });
}
function getStage(user) {
  //Verifica se existir esse ususario no banco de dados
  if (banco.db[user]) {
    return banco.db[user].stage
  } else {
    //Criar usuario se for a primeia vez
    banco.db[user] = {
      stage: 0,
      itens: [],
    };
    return banco.db[user].stage;
  }
}
