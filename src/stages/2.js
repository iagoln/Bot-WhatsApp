const banco = require("../banco");
const frases = require("../frases/frases")

function execute(user, msg) {
      if (msg == 1) { 
        banco.db[user].stage = 1;
        return [ frases.Menu ];
      }   
      if (msg == 2) {    
        banco.db[user].stage = 0;
        return [ frases.Finalizarconversaaceitou ];
      }     
return [frases.Finalizarnaoentendeu]
}
exports.execute = execute;