
/*
Implementar un sistema simple de carrito de compras que actualice cantidades y precios.
1. Crea 3 productos con nombre y precio (usa elementos <span> para mostrar los precios).
2. Para cada producto, agrega un botón "Agregar al carrito" con evento onclick que:
•Actualice un contador de items totales (<span id="total-items">0</span>)
•Sume el precio al total acumulado (<span id="total-precio">0</span>)
3. Funcionalidades adicionales:
•Muestra un alert() con el mensaje "¡Envío gratis aplicado!" cuando el total supere los $50.
•Implementa un console.log() que liste los productos agregados al carrito.
4. Agrega un botón "Vaciar carrito" que:
•Restablezca todos los contadores a 0
•Muestre un alert() con el mensaje "Carrito vaciado"
*/



let contadorp1 = 0;
let contadorp2 = 0;
let contadorp3 = 0;

const preciop1 = 28;
const preciop2 = 22;
const preciop3 = 30;

let total1 = 0;
let total2 = 0;
let total3 = 0;
let granTotal = 0;

document.getElementById("precioP1").innerHTML = preciop1;

document.getElementById("precioP2").innerHTML = preciop2;

document.getElementById("precioP3").innerHTML = preciop3;

function agregarP1() {
    contadorp1++;
    total1 = preciop1 * contadorp1;
    actualizarGranTotal();
    document.getElementById("total-itemsP1").innerHTML = total1;
    document.getElementById("unidadesP1").innerHTML = contadorp1;
    console.log(`Unidades producto 1: ${contadorp1} total: $${total1}`);

}
function agregarP2() {
    contadorp2++;
    total2 = preciop2 * contadorp2;
    actualizarGranTotal();
    document.getElementById("total-itemsP2").innerHTML = total2;
    document.getElementById("unidadesP2").innerHTML = contadorp2;

}
function agregarP3() {
    contadorp3++;
    total3 = preciop3 * contadorp3;
    actualizarGranTotal();
    document.getElementById("total-itemsP3").innerHTML = total3;
    document.getElementById("unidadesP3").innerHTML = contadorp3;

}
function actualizarGranTotal() {
    granTotal = total1 + total2 + total3;
    document.getElementById("total-precio").innerHTML = granTotal;
    if (granTotal >= 50) { alert("¡Envío gratis aplicado!") }
}
function borrarTodo() {
    granTotal = 0;
    total1 = 0;
    total2 = 0;
    total3 = 0;
    contadorp1 = 0;
    contadorp2 = 0;
    contadorp3 = 0;
    document.getElementById("total-precio").innerHTML = granTotal;
    document.getElementById("total-itemsP1").innerHTML = total1;
    document.getElementById("total-itemsP2").innerHTML = total2;
    document.getElementById("total-itemsP3").innerHTML = total3;
    document.getElementById("unidadesP1").innerHTML = contadorp1;
    document.getElementById("unidadesP2").innerHTML = contadorp2;
    document.getElementById("unidadesP3").innerHTML = contadorp3;
}

console.log(`cantidad producto 1: ${contadorp1} total: ${total1}`);
console.log(`cantidad producto 2: ${contadorp2} total: ${total2}`);
console.log(`cantidad producto 3: ${contadorp3} total: ${total3}`);

console.log("Total Carrito: ", granTotal);

