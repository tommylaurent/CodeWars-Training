/******************************************************************************************/
//* 6kyu_Count_the_smiley_faces
/******************************************************************************************/

//! utiliser .match ou .test pour comparer sa regex à un élément
//! a voir le reduce et regex

/******************************************************************************************/
//* EXERCICE
/******************************************************************************************/

function countSmileys(arr) {
  const regex = /((:|;)(-|~|)(\)|D))/g;
  return arr.filter(elt => elt.match(regex)).length;
}

const test = countSmileys([":)", ":(", ":D", ":O", ":;"]);
console.log(test);

/******************************************************************************************/
//* CORRECTION 1
/******************************************************************************************/

//todo: il est possible de raccourcir encore plus en mettant la regex dans le filter

// function countSmileys(arr) {
//    return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
// }

/******************************************************************************************/
//* CORRECTION 2
/******************************************************************************************/

//todo: a voir le reduce

// const countSmileys = ss =>
//   ss.reduce((a, s) => a + /^[:;][-~]?[D)]$/.test(s), 0);
