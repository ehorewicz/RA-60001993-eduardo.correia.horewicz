function findMax() {
    // Obter os valores dos inputs
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
  
    // Encontrar o maior número
    let maxNumber;
    if (num1 > num2) {
      maxNumber = num1;
    } else {
      maxNumber = num2;
    }
  
    // Exibir resultado
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `O maior número é: ${maxNumber}`;
  }