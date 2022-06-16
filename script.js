let equation = "";
let result = document.getElementById("result");


function present(raw) {

}


function number(num) {
  equation += num.toString();
  result.innerHTML = equation;
}


const operators = ["+", "-", "*", "/"];

function operator(op) {
  switch(op)
  {
    case "+":
    case "-":
    case "*":
    case "/":
    case ".":
      equation += op;
      break;

    case "C":
      equation = "";
      break;

    case "B":
      if (equation.length == 0) {
        equation = "";
      }
      else {
        equation = equation.slice(0, -1);
      }
      break;

    case "P":
      if (operators.includes(equation[ equation.length - 1 ])) {
        equation += "(";
      }
      else {
        equation += ")";
      }
      break;

    case "=":
      equation = eval(equation).toString();
      break;
  }

  result.innerHTML = equation;
}
