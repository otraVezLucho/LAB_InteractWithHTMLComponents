let contadorDisenio = 0;
function conteoDisenio(){
    contadorDisenio++;
    document.getElementById("numVotos").innerHTML = contadorDisenio; 
    alert("Gracias por tu voto!")
    if (contadorDisenio % 5 ==0)  console.log("Diseño Web - Votos: ", contadorDisenio) ;
    
    

}
let contadorBd = 0;
function conteoBd(){
    contadorBd++;
    document.getElementById("numVotosBd").innerHTML = contadorBd;
    alert("Gracias por tu voto!")
    if (contadorBd % 5 == 0) console.log("Base de Datos - Votos: ",contadorBd);
    
}

let contadorJs = 0;

function conteoJs(){
    contadorJs++;
    document.getElementById("numVotosJs").innerHTML = contadorJs;
    alert("Gracias por tu voto!")
    if (contadorJs % 5 == 0) console.log("Java Script - Votos: ",contadorJs);
    
}