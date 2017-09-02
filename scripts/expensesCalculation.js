document.addEventListener("DOMContentLoaded", function() {

  var salaryRange = document.getElementById('salary-range');
  var rentalRange = document.getElementById('rental-range');
  var salary = salaryRange.value;
  var rental = rentalRange.value;


  salaryRange.addEventListener("change", function(e){
    salary = e.target.value;

    var valueSalaryRange = document.getElementById('value-salary-range');
    valueSalaryRange.innerHTML = salary + ' euros';
    writeExpenses(calculateExpenses(salary, rental));
  });


  rentalRange.addEventListener("change", function(e){
    rental = e.target.value;

    var valueRentalRange = document.getElementById('value-rental-range');
    valueRentalRange.innerHTML = rental + ' euros';
    writeExpenses(calculateExpenses(salary, rental));
  });


  writeExpenses(calculateExpenses(salary, rental));

  var valueSalaryRange = document.getElementById('value-salary-range');
  valueSalaryRange.innerHTML = salary + ' euros';
  var valueRentalRange = document.getElementById('value-rental-range');
  valueRentalRange.innerHTML = rental + ' euros';
});

//----------------------------------------------------
var tipoYPorcentaje = {
    'alimentacion': 13,
    'ropa': 4,
    'transporte': 11,
    'salud': 4,
    'hogar': 4,
    'ensenanza': 1,
    'telecomunicacion': 3,
    'ahorros': 7,
    'bares': 9,
    'cultura': 4,
    'tabaco': 2,
    'otros': 6
};

function writeExpenses(expenses){
  //Función que pinta los resultados en la tabla.
  //Primero tenemos un array expensePrefix con los prefijos de las variables.
  //Recorremos el array y lo concatenamos con los sufijos de las variables,
  //que siempre van a ser los mismos, y los concatenamos, para obtener
  //el id que hemos puesto en el html para mostrar los resultados.

  //El dato que recibe la función es un diccionario con los valores del
  //dinero y el porcentaje calculados:
  //expenses === resultados{nombre} = [valorNumerico, valorPorcentaje]

  // Se añade la librería d3, para utilizar una escala de color
  // que modifique el background-color de acuerdo al gasto
  var colorScale = d3.scaleLinear().domain([0, 550]).range(['#dcedf4', '#0e3340']);

  var expensePrefix = ['alimentacion', 'ropa', 'transporte', 'salud',
                   'hogar', 'ensenanza', 'telecomunicacion', 'ahorros',
                   'bares', 'cultura', 'tabaco', 'otros'];

  var moneyValue = null;
  var percentValue = null;
  var auxMoney = null;
  var auxPercent = null;

  for (i = 0; i < expensePrefix.length; i++) {
    auxMoney = expensePrefix[i] + 'MoneyValue';
    auxPercent = expensePrefix[i] + 'PercentValue';
    moneyValue = document.getElementById(auxMoney);
    percentValue = document.getElementById(auxPercent);
    moneyValue.innerHTML = expenses[expensePrefix[i]][0] + '€';
    percentValue.innerHTML = expenses[expensePrefix[i]][1] + '%';

    // Añadir las clases de la escala para aplicar los colores por css
    var color =  expenses[expensePrefix[i]][0] > 0 ? colorScale(expenses[expensePrefix[i]][0]) : '#E9F2F6';
    d3.select(document.getElementById(auxMoney).parentNode)
      .style('background-color', color);
    d3.select(document.getElementById(auxPercent).parentNode)
      .style('background-color', color);
  }
}

function noIdealExpensesPercentCalculation(salary, houseRentPercent){
  //Dado un salario, un porcentaje destinado a la vivienda, y los tipos de
  //interés del caso inicial, calculamos los porcentajes destinados al resto de
  //gastos según las fórmulas dadas en el Excel que nos han proporcionado en
  //MediaLab Prado a través de Flora.
  var initialTypeAndPercent = tipoYPorcentaje;
  var expensesAndPercentsToApply = {};
  var totalPercent = 100;
  var idealHouseRentPercent = 32;
  var remainderPercent = totalPercent - houseRentPercent;
  var idealRemainderPercent = totalPercent - idealHouseRentPercent;
  var x = 0;
  var value = 0;

  for (var key in initialTypeAndPercent) {
    value = initialTypeAndPercent[key];
    x = (value * remainderPercent) / idealRemainderPercent;
    x = Math.round(x);
    expensesAndPercentsToApply[key] =  x;
  }
  return expensesAndPercentsToApply;
}

function calculateExpenses(salary, rental) {
  //Dado un salario y el dinero destinado al alquiler de la vivienda, obtenems
  //el dinero y su porcentaje, con respecto al sueldo, destinado a cada gasto,
  //según las fórmulas del Excel que nos han proporcionado en MediaLab Prado a
  //través de Flora.
  houseRentPercent = (rental * 100)/salary;
  houseRentPercent = Math.round(houseRentPercent);
  var expensesAndPercentsToApply = noIdealExpensesPercentCalculation(salary, houseRentPercent);
  var result = {};
  var totalPercent = 100;
  var value = 0;

  for (var key in expensesAndPercentsToApply) {
    value = (salary * expensesAndPercentsToApply[key]) / totalPercent;
    value = Math.round(value);
    result[key] = [value, expensesAndPercentsToApply[key]];
  }
  return result;
}

// Hacer toggle de los divs de los cuadrados (se eliminó el flip de las css)

d3.selectAll('.square')
  .on('mouseover', function() { 
    d3.select(this).select('.frontSide').style('visibility', 'hidden') 
  })
  .on('mouseout', function() { 
    d3.select(this).select('.frontSide').style('visibility', 'visible') 
  });




