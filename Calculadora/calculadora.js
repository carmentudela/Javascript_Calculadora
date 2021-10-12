
var num1;
var num2;
var operador;



function calcula() {
    //declaración variables
    var pantalla = document.getElementById("pantalla");
    var cero = document.getElementById("cero");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var sumar = document.getElementById("sumar");
    var restar = document.getElementById("restar");
    var multiplicar = document.getElementById("multiplicar");
    var dividir = document.getElementById("dividir");
    var borrado = document.getElementById("borrado");
    var igual = document.getElementById("igual");

    //declaración eventos

    uno.onclick = function (e) {
        pantalla.textContent=pantalla.textContent +"1"
    }
    dos.onclick = function (e) {
        pantalla.textContent=pantalla.textContent +"2"
    }
    tres.onclick = function (e) {
        pantalla.textContent=pantalla.textContent +"3"
    }
    cuatro.onclick = function (e) {
        pantalla.textContent=pantalla.textContent +"4"
    }
    cinco.onclick = function (e) {
        pantalla.textContent=pantalla.textContent +"5"
    }
    seis.onclick = function (e) {
        pantalla.textContent=pantalla.textContent +"6"
    }
    siete.onclick = function (e) {
        pantalla.textContent=pantalla.textContent +"7"
    }
    ocho.onclick = function (e) {
        pantalla.textContent=pantalla.textContent +"8"
    }
    nueve.onclick = function (e) {
        pantalla.textContent=pantalla.textContent +"9"
    }
    cero.onclick = function (e) {
        pantalla.textContent=pantalla.textContent +"0"
    }
    borrado.onclick = function (e) {
        borrar();
    }
    sumar.onclick = function (e) {
        num1 = pantalla.textContent;
        operador = "+";
        restablece0();
    }
    restar.onclick = function (e) {
        num1 = pantalla.textContent;
        operador = "-";
        restablece0();
    }
    multiplicar.onclick = function (e) {
        num1 = pantalla.textContent;
        operador = "*";
        restablece0();
    }
    dividir.onclick = function (e) {
        num1 = pantalla.textContent;
        operador = "/";
        restablece0();
    }
    igual.onclick = function (e) {
        num2 = pantalla.textContent;
        calcular();
    }

}
function restablece0 (){
    pantalla.textContent =" ";
}
function borrar() {
    pantalla.textContent = " ";
    num1 = 0;
    num2 = 0;
    operador = " ";
}


function calcular() {
    var resultado = 0;
    switch (operador) {
        case "+":
            resultado = parseFloat(num1) + parseFloat(num2);
            break;
        case "-":
            resultado = parseFloat(num1) - parseFloat(num2);
            break;
        case "*":
            resultado = parseFloat(num1) * parseFloat(num2);
            break;
        case "/":
            if (num2 == 0) {
                alert("indica un divisor correcto, no se puede dividir entre 0");
            }
            else {
                resultado = parseFloat(num1) / parseFloat(num2);
                break;
            }
    }
    restablece0();
    pantalla.textContent = resultado;
}