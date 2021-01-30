const frases = require("../Frases/frases");
const banco = require("../banco");

function execute(user, msg) {
  if (msg == "0") {
    banco.db[user].stage = 1;
    return [frases.Menu];
  }
  if (msg == "1") {
    banco.db[user].stage = 1;
    return [frases.Procedimentos];
  }
  if (msg == "2") {
    banco.db[user].stage = 2;
    return [frases.Agendamento,frases.Finalizarconversa];
  }
  if (msg == "3") {
    banco.db[user].stage = 3;
    return [frases.Secretaria];
  }
  if (msg == "4") {
    banco.db[user].stage = 1;
    return [frases.Valor];
  }
  return [frases.Naoentendeu, frases.Menu ];
}

exports.execute = execute;
