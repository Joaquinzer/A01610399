function promedio(arreglos){
    let sum = 0;
    for(const val of arreglos){
        sum = sum + val;
    }
    let prom = sum/(arreglos.length);
    return prom; 
}

//prueba

let arreglo = [4, 4 , 5, 8, 10, 12, 13, 16, 13];
let res = promedio(arreglo);
console.log(res);
