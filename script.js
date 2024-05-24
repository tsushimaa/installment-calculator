document.getElementById('loanForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Получаем значения из формы
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
    const loanTerm = parseInt(document.getElementById('loanTerm').value);
    
    // Рассчитываем ежемесячный платеж
    const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));
    
    // Выводим результат
    document.getElementById('result').textContent = `Ежемесячный платеж: ${monthlyPayment.toFixed(2)} руб.`;
});
