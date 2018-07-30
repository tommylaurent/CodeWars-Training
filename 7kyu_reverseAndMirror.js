/******************************************************************************************/
//*7kyu_reverseAndMirror
/******************************************************************************************/

/******************************************************************************************/
//*EXERCICE
/******************************************************************************************/

function reverseAndMirror(s1, s2) {
  return (
    [...s2]
      .reduce((acc, item) => [item].concat(acc), [])
      .join("")
      .replace(
        /./g,
        c => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase())
      ) +
    "@@@" +
    [...s1]
      .reduce((acc, item) => [item].concat(acc), [])
      .join("")
      .replace(
        /./g,
        c => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase())
      ) +
    s1.replace(
      /./g,
      c => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase())
    )
  );
}

const test = reverseAndMirror((s1 = "FizZ"), (s2 = "buZZ"));
console.log(test);
