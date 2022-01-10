const uno = document.getElementById ('primero');
const dos = document.getElementById ('segundo');
var resultado = document.getElementById ("resultado");

const operacion = Array.from
(document.getElementsByClassName('operacion'));

for (let i = 0; i < operacion.length; i++) {
    operacion[i].addEventListener("click", () => {
        let valor = uno.value;
        let valor2 = dos.value;
        let respuesta;
        let op = operacion[i].id;
        if( op === "suma") {
            respuesta = parseInt(valor) + parseInt(valor2);
        } 
        else if ( op === "resta") {
            respuesta = parseInt(valor) - parseInt(valor2);
        } 
        else if ( op === "multiplica") {
            respuesta = parseInt(valor) * parseInt(valor2);
        } 
        else if ( op === "divide") {
            respuesta = parseInt(valor) / parseInt(valor2);
        } 

        resultado.innerHTML = respuesta
});
};