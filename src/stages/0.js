const frases = require("../Frases/frases");
const banco = require("../banco");

function execute(user, msg) {

  banco.db[user].stage = 1;

  return [ frases.BoaVindas,frases.Menu ];
}

exports.execute = execute;
