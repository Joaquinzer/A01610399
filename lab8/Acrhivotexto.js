function archivo(texto){
    const fs = require('fs');
    fs.writeFileSync('Output.txt', texto);
}

let ejemplo = "Hola mundo";
archivo(ejemplo);
