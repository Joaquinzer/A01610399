//Funcion que regresa los numeros fibonacci hasta el numero que ingreses
function fibo(num){
    let prim = 0;
    let seg = 1;
    console.log(prim);
    console.log(seg); 
    for(let i = 0; i < num-2; i++){
        let fib = prim + seg;
        console.log(fib);
        prim = seg;
        seg = fib;
    }
}
//ejemplo
fibo(10);