// Función para realizar las operaciones
function calcular(operador, num1, num2) {
    switch (operador) {
    case '+':
    return num1 + num2;
    case '-':
    return num1 - num2;
    case '*':
    return num1 * num2;
    case '/':
    if (num2 === 0) {
    return 'Error: División por cero';
    }
    return num1 / num2;  
    default:
    return 'Operador no válido';
    }
   }


   // Función principal para interactuar con el usuario
    function iniciarCalculadora() {
    let retornar = true;
    while (retornar){   
        let operador = prompt('Ingrese el operador (+, -, *, /):');
        let num1 = parseFloat(prompt('Ingrese el primer número:'));
        let num2 = parseFloat(prompt('Ingrese el segundo número:'));
        let resultado = calcular(operador, num1, num2);
        console.log(`El resultado de ${num1} ${operador} ${num2} es: ${resultado}`);
        alert(`El resultado de ${num1} ${operador} ${num2} es: ${resultado}`);
    
    //
    retornar = prompt('¿Quiere hacer otra operacion? (si = 1, no = 0)');
    if( retornar !== '1'){
        retornar = false;
      }
    // Mostrar el resultado en el HTML
    document.getElementById('resultado').textContent = `El resultado de ${num1} ${operador}
   ${num2} es: ${resultado}`;
    }

   }
   // Iniciar la calculadora
   iniciarCalculadora();