/*
let numero=10;
console.log(numero*2);
console.log(Math.max(2, 4));
let elNumero = Number(prompt("Elige un numero"));
console.log("Tu número es la raiz cuadrada de " + elNumero * elNumero);
*/


let cuadratico = Number(prompt("Elige un numero que sera la variable cuadratica: "));
let lineal = Number(prompt("Elige un numero que sera la variable lineal: "));
let constante = Number(prompt("Elige un numero que sera la variable constante: "));

let raiz = (lineal*lineal)-(4*cuadratico*constante)


if(raiz>=0){
    let resultadoPositivo = Number((((-1)*lineal)+ Math.sqrt((lineal*lineal)-4*(cuadratico*constante)))/(2*cuadratico))
    alert("Raiz X1 es: " + resultadoPositivo.toFixed(3));
    let resultadoNegativo = Number((((-1)*lineal)- Math.sqrt((lineal*lineal)-4*(cuadratico*constante)))/(2*cuadratico))
    alert("Raiz X2 es: " + resultadoNegativo.toFixed(3));

}else if(raiz<0){

    let resultadoAlternativoPositivo = Number((((-1)*lineal)+ Math.sqrt(-1*((lineal*lineal)-4*(cuadratico*constante))))/(2*cuadratico))
    alert("Raiz imaginaria X1 es: " + resultadoAlternativoPositivo.toFixed(3) + "i");
    let resultadoAlternativoNegativo = Number((((-1)*lineal)- Math.sqrt(-1*((lineal*lineal)-4*(cuadratico*constante))))/(2*cuadratico))
    alert("Raiz imaginaria X2 es: " + resultadoAlternativoNegativo.toFixed(3) + "i")
}else{
    alert("Introduce un numero")
}










