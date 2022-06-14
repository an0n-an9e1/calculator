let equation = "";

let result = document.getElementById("result");
let algo = [];

function split(equation) {
  let k = 0;
  for (var i = 0; i < equation.length; i++) {
    if (equation[i] !== "+" && equation[i] !== "-") {
      algo[k] = [algo[k], equation[i]].join('');
    }
    else {
      k++;
      algo[k] = equation[i];
      k++;
    }
  }
}

function translate() {
  for (var i = 0; i < algo.length; i += 2) {
    algo[i] = Number.parseInt(algo[i], 10);
  }
}

function equate() {
  let res = algo[0];
  for (var i = 2; i < algo.length; i += 2) {
    if (algo[i-1] === "+") {
      res += algo[i];
    }
    else {
      res -= algo[i];
    }
  }

  return res;
}


function number(num) {
  equation += num.toString();
  result.innerHTML = equation;

}

function operator(op) {
  if (op === "+") {
    equation += op;
  }
  else if (op === "-") {
    equation += op;
  }
  else if (op === "C") {
    equation = "";
  }
  else if (op === "=") {
    split(equation, algo);
    translate(algo);
    equation = equate(algo);
    algo = [];
  }

  result.innerHTML = equation;
}
