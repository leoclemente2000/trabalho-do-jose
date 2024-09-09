// Função para calcular a distância entre dois pontos
function calcularDistancia(x1, y1, x2, y2) {
    
    let deltaX = x2 - x1;
    let deltaY = y2 - y1;
  
    let distancia = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  
    
    return distancia;
}


let x1 = 1;
let y1 = 2;
let x2 = 4;
let y2 = 6; 


let resultado = calcularDistancia(x1, y1, x2, y2);
console.log("A distância entre os pontos é: " + resultado);
