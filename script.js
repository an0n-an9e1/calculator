let equation = "";
let result = document.getElementById("result");
let bracket_count = 0;


function present(raw) {
  var polished = raw;
  const newline = document.createElement("br");

  result.style.fontSize = "3em";

  for (var i = 0; i < polished.length; i++) {
    if (polished[i] === "*")
      polished[i] = "×";
    else if (polished[i] === "/")
      polished[i] = "÷";
  }

  if (polished.length > 10)
    result.style.fontSize = "2.5em";

  var post_polished = `${polished.substring(0, 12)} <br> ${polished.substring(12, 24)}`
  if (polished.length > 24)
    post_polished += "...";

  return post_polished;
}

function round(num, precision) {
  precision = Math.pow(10, precision);
  return Math.ceil(num * precision) / precision;
}

function number(num) {
  equation += num.toString();
  result.innerHTML = present(equation);
}


const operators = ["+", "-", "*", "/"];

function operator(op) {
  switch(op)
  {
    case "*":
    case "/":
      if (!(equation === "")) {
        if (!(operators.includes(equation[ equation.length-1]))) {
          equation += op;
        }
        else {
          operator("B");
          equation += op;
        }
      }
      break;

    case "+":
    case "-":
    case ".":
      if (!(operators.includes(equation[ equation.length-1]))) {
        equation += op;
      }
      else {
        operator("B");
        equation += op;
      }
      break;

    case "C":
      equation = "";
      bracket_count = 0;
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
      var condition = (operators.includes(equation[ equation.length - 1 ]) || equation === "" || equation[equation.length-1] === "(");

      if (condition) {
        bracket_count++;
        equation += "(";
      }
      else {
        if (bracket_count > 0) {
          equation += ")";
          bracket_count -= 1;
        }
      }
      break;

    case "=":
      equation = round(eval(equation), 5).toString();
      break;
  }

  result.innerHTML = present(equation);
}
