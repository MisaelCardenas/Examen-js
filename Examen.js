//Resultado de 3 calificaciones 
let calf1 = parseFloat (prompt ("Ingrese un numero"));
let calf2 = parseFloat (prompt ("Ingrese un numero"));
let calf3 = parseFloat (prompt ("Ingrese un numero"));
let parcial = ((calf1) + (calf2) + (calf3))/3

document.write ("Su calificacion parcial es:"+parcial)

if (parcial >=8){
    document.write (' Estas aprobado')
}
else {
    document.write(' No aprobaste')
}


//Calculadora 
function Sumar() {
        var n1 = parseInt(document.getElementById ("n1").value);
        var n2 = parseInt(document.getElementById ("n2").value); 
        document.getElementById ("Respuesta").innerHTML = n1+n2;
}
function Restar() {
    var n1 = parseInt(document.getElementById ("n1").value);
    var n2 = parseInt(document.getElementById ("n2").value); 
    document.getElementById ("Respuesta").innerHTML = n1-n2;
}
function Dividir() {
    var n1 = parseInt(document.getElementById ("n1").value);
    var n2 = parseInt(document.getElementById ("n2").value); 
    document.getElementById ("Respuesta").innerHTML = n1/n2;
}
function Multiplicar() {
    var n1 = parseInt(document.getElementById ("n1").value);
    var n2 = parseInt(document.getElementById ("n2").value); 
    document.getElementById ("Respuesta").innerHTML = n1*n2;
}


