/******************************************************************************************/
//* 6kyu_Take_a_Ten_Minute_Walk
/******************************************************************************************/

// n.length === s.length && w.length === e.length;
// walk.lenght === 10

function isValidWalk(walk) {
  const cardinal = ["n", "s", "w", "e"];
  let resultat = [];
  cardinal.map(e => {
    const regex = new RegExp(e, "g");
    resultat.push(walk.join("").match(regex));
  });
  // const walkDirection = walk.sort((a, b) => a > b);
  // const ArrayDirection = walkDirection.reduce(
  //   (s, v, i) => s + (v.charCodeAt() == i + 97),
  //   0
  // );
  return resultat ? ;
  //.reduce((a, c) => a + c);
  //   const walk
  // return walkDirection;
  //   walk.reduce((a, c) => a + c);
}

const test = isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]);
console.log(test);
