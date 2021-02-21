function prob1(){
    let num = prompt("Escribe un numero:");
    document.writeln("<table>");
    document.writeln("<tr>");
    document.writeln("<th>Numero</th>");
    document.writeln("<th>Numero al cuadrado</th>");
    document.writeln("<th>Numero al cubo</th>");
    document.writeln("</tr>");
    for(let i = 1; i <= num; i++){
        document.writeln("<tr>");
        document.writeln("<td>" + i + "</td>");
        document.writeln("<td>" + Math.pow(i, 2) + "</td>")
        document.writeln("<td>" + Math.pow(i, 3) + "</td>")
        document.writeln("</tr>")
    }
    document.writeln("</table>");
}

function prob2(){
    let nu1 = Math.floor(Math.random()*100);
    let nu2 = Math.floor(Math.random()*100);
    let suma = nu1 + nu2;
    let inicio = new Date();
    let resultado = prompt(nu1 + " + " + nu2);
    let final = new Date();
    let tiempo = (final - inicio)/1000;
    if(resultado==suma){
        document.writeln("Correcto<br/><br/>");
        document.writeln("Su tiempo fue: " + tiempo);
    }else{
        document.writeln("Incorrecto<br/><br/>");
        document.writeln("Su tiempo fue: " + tiempo);
    }
}

function contador(arreglo){
    let pos = 0, cero = 0, neg = 0;
    for(const i of arreglo){
        if(i < 0){
            neg++;
        }else if(i == 0){
            cero++;
        }else{
            pos++;
        }
    }
    return [pos, cero, neg];
}

function prob3(){
    let arreglo = [];
    while(true){
        num = prompt("ingrese un numero al arreglo, teclea 'listo' cuando termines");
        if(num === "listo"){
            break;
        }else{
            arreglo.push(num); 
        }
    }
    let resultado = contador(arreglo);
    document.write("Positivos = " + resultado[0] + " Negativos = " + resultado[2] + " Ceros = " + resultado[1]);
}

function promedios(arreglo){
    let resultado = [];
    for(let i = 0; i < arreglo.length; i++){
        let suma = 0;
        for(const j of arreglo[i]){
            suma = suma + j;
        }
        let prom = suma/(arreglo[i].length)
        resultado.push(prom);
    }
    return resultado;
}

function prob4(){
    let prueba = [[2, 2 , 2], [4, 8, 3], [6, 6, 12, 12]];
    let proms = promedios(prueba);
    for(const val of proms){
        document.write("Promedio = " + val + " ");
    }
}

function prob5(){
    let num = prompt("Ingrese un numero entero");
    num = num.toString();
    num = num.split('');
    num = num.reverse();
    num = num.join('');
    num = parseFloat(num);
    document.write("Tu numero al reves es: " + num);
}

function prob6(){
    const escalas = {
        notas:['c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b'],
        Mayor:[1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
        Menor:[1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0],
        EscMayor: function(nota){
            let esc = [];
            let pos = 0;
            for(let i = this.notas.indexOf(nota); i < this.notas.length; i++){
                if(this.Mayor[pos]){
                    esc.push(this.notas[i]);
                }
                pos++;
            }
            if(this.notas.indexOf(nota) != 0){
                for(let n = 0; n < this.notas.indexOf(nota); n++){
                    if(this.Mayor[pos]){
                        esc.push(this.notas[n]);
                    }
                 pos++;
                }
            }
            return esc;
        },
        EscMenor: function(nota){
            let esc = [];
            let pos = 0;
            for(let i = this.notas.indexOf(nota); i < this.notas.length; i++){
                if(this.Menor[pos]){
                    esc.push(this.notas[i]);
                }
                pos++;
            }
            if(this.notas.indexOf(nota) != 0){
                for(let n = 0; n < this.notas.indexOf(nota); n++){
                    if(this.Menor[pos]){
                        esc.push(this.notas[n]);
                    }
                 pos++;
                }
            }
            return esc;
        }
    }
    let escfinal = [];
    let not = prompt("Ingrese una nota musical");
    let Tipo = prompt("Ingrese el tipo de escala, Mayor, o Menor");
    if(Tipo == "Mayor"){
        escfinal = escalas.EscMayor(not);
        document.write("Las notas de tu escala son:");
        for(const val of escfinal){
            document.write(" " + val + " ");
        }
    }else if(Tipo == "Menor"){
        escfinal = escalas.EscMenor(not);
        document.write("Las notas de tu escala son:");
        for(const val of escfinal){
            document.write(" " + val + " ");
        }
    }else{
        document.write("Tipo invalido");
    }
}