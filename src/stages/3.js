const frases = require("../frases/frases")
const banco = require("../banco");
function execute(user, msg) {
  banco.db[user].stage = 4
  setTimeout(function(){ banco.db[user].stage = 0}, 18000000); // Robo sera ativo apos 5 horas
  return [ frases.Secretaria2  ];
}

exports.execute = execute;
