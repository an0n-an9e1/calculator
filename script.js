let equation = "";
let result = document.getElementById("result");


function number(num) {
  equation += num.toString();
  result.innerHTML = equation;
}


function operator(op) {
  switch(op)
  {
    case "+":
    case "-":
    case "*":
    case "/":
      equation += op;
      break;

    case "C":
      equation = "";
      break;

    case "=":
      equation = eval(equation).toString();
      break;
  }

  result.innerHTML = equation;
}
