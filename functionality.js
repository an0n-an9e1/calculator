export function split(equation, algo[]) {
  let k = 0;
  for (var i = 0; i < equation.length; i++) {
    if (equation[i] !== "+" || equation[i] !== "-") {
      algo[k] += equation[i];
    }
    else {
      k++;
      algo[k] += equation[i];
      k++;
    }
  }
}

export function translate(algo[]) {
  for (var i = 0; i < algo.length; i += 2) {
    algo[i] = Number.parseInt(algo[i], 10);
  }
}

export function equate(algo[]) {
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
