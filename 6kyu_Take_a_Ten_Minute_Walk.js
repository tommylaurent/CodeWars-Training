/******************************************************************************************/
//* 6kyu_Take_a_Ten_Minute_Walk
/******************************************************************************************/

// function isValidWalk(walk) {
//   const cardinal = ["n", "s", "w", "e"];
//   let resultat = [];
//   cardinal.map(e => {
//     const regex = new RegExp(e, "g");
//     resultat.push(walk.join("").match(regex));
//   });
//   const nordSud = resultat.map(elt => elt.filter(e => e === "n" || e === "s"));
//   const estWest = resultat.map(elt => elt.filter(e => e === "w" || e === "e"));
//   const newNordSud = nordSud.filter(e => e.length);
//   const newEstWest = estWest.filter(e => e.length);
//   const direction = [newNordSud, newEstWest];
//   const resultatDirection = direction.map(elt => elt.map(e => e.length));
//   const minuteDirection = resultatDirection.map(
//     elt => (elt.reduce((a, c) => a - c) === 0 ? elt : [999])
//   );
//   const minute = minuteDirection.map(elt => elt.reduce((a, c) => a + c));
//   return minute.reduce((a, c) => a + c) === 10 ? true : false;
// }

// const test = isValidWalk(["n", "s", "n", "s", "n", "s", "e", "e", "w", "w"]);
// console.log(test);

function isValidWalk(walk) {
  const cardinal1 = ["n", "s"];
  let newNordSud = [];
  cardinal1.map(e => {
    const regex = new RegExp(e, "g");
    newNordSud.push(walk.join("").match(regex));
  });
  const cardinal2 = ["w", "e"];
  let newEstWest = [];
  cardinal2.map(e => {
    const regex = new RegExp(e, "g");
    newEstWest.push(walk.join("").match(regex));
  });
  const direction = [newNordSud, newEstWest];
  console.log(direction);
  const resultatDirection = direction.map(elt =>
    elt.map(elt => (elt !== null ? elt.length : 0))
  );
  console.log(resultatDirection);
  const minuteDirection = resultatDirection.map(
    elt => (elt.reduce((a, c) => a - c) === 0 ? elt : [999])
  );
  const minute = minuteDirection.map(elt => elt.reduce((a, c) => a + c));
  return minute.reduce((a, c) => a + c) === 10 ? true : false;
}

const test = isValidWalk(["n", "s", "n", "s", "n", "s", "e", "e", "w", "w"]);
console.log(test);
