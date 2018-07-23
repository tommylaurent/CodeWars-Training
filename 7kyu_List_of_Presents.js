/******************************************************************************************/
//* 7kyu_List_of_Presents
/******************************************************************************************/

//!

/******************************************************************************************/
//* EXERCICE
/******************************************************************************************/

function howManyGifts(maxBudget, gifts) {
  const budgetTrie = gifts.sort((a, b) => a - b);
  let somme = 0;
  const budgetMax = budgetTrie
    .map(elt => (somme += elt))
    .filter(elt => elt <= maxBudget).length;
  return budgetMax;
}

const test = howManyGifts(20, [13, 2, 4, 6, 1]);
console.log(test);

/******************************************************************************************/
//* CORRECTION
/******************************************************************************************/

// function howManyGifts(maxBudget, gifts) {
//    return gifts.sort((a, b) => a - b)
//       .reduce((a, c) => ((maxBudget = maxBudget - c) >= 0 ? ++a : a), 0);
// }

// const test = howManyGifts(20, [13, 2, 4, 6, 1]);
// console.log(test);
