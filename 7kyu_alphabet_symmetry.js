/******************************************************************************************/
//* 7_KYU_ALPHABET_SYMMETRY
/******************************************************************************************/

//!
//! charCodeAt() peut être bien à utiliser quand on se sert des lettres de l'alphabet
//! Il est possible de trouver l'index à partir d'un .map
//! L'utilisation de reduce peut être bien pour comparer deux tableaux et savoir combien d'élements sont identiques
//! Penser à tout mettre en lowercase, plutôt que faire de versions à comparer
//! Penser à filter si je ne veux garder que quelques elements
//! let unique = [...new Set(myArray)]; permet de supprimer les doublons

/******************************************************************************************/
//* EXERCICE
/******************************************************************************************/

//todo: ▸ je peux trouver facilement l'index de chaque éléments d'un tableau grace à:
//todo:   • array.map((x, index) => x + index));
// 1.je fais un tableau avec les lettres de l'alphabet
// 2.tableau version maj
// 3.je crée plusieurs arrays avec mes mots a l'interieur d'un tableau global
// 4.je mets un index sur l'alphabet
// 5.je mets un index sur l'alphabet majuscule
// 6.je mets un index sur mon tableau de mots
// 7.je ne garde que les elements qui sont les memes dans les 2 tableaux (alphabet minuscule/Word)
// 8.je fais un .length afin de savoir combien d'elements sont les memes (alphabet minuscule/word)
// 9/10. je répète les 2 opérations opérations précédentes pour les majuscules
// 11. j'assembre les 2 tableaux

function solve(words) {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  const arrayAlpha = [...alpha];
  const arrayAlphaM = arrayAlpha.map(x => x.toUpperCase());
  const arrayWord = words.map(elt => [...elt]);
  const indexAlpha = arrayAlpha.map(elt => elt + arrayAlpha.indexOf(elt));
  const indexAlphaM = arrayAlphaM.map(elt => elt + arrayAlphaM.indexOf(elt));
  const indexWord = arrayWord.map(elt => elt.map((x, index) => x + index));
  const intersection = indexWord.map(elt =>
    elt.filter(x => indexAlpha.includes(x))
  );
  const numberMin = intersection.map(x => x.length);
  const intersectionM = indexWord.map(elt =>
    elt.filter(x => indexAlphaM.includes(x))
  );
  const numberMaj = intersectionM.map(x => x.length);
  return numberMin.map(x => x + numberMaj.shift());
}

const test = solve(["iamdefandjkl", "thedefgh", "xyzDEFghijabc"]);
console.log(test);

/******************************************************************************************/
//* CORRECTION 1
/******************************************************************************************/

// 1. je fais un tableau avec les lettres de l'alphabet
// 2. je fais un .map sur mon array
// 3. je met l'élément du .map en lowercase
// 4. je met mes mots dans des arrays avec split
// 5. je fais un filtre pour ne garder que les elements qui correspondent à l'alphabet
//todo:  5.   ▸ description du filtre:
//todo:         • elt = éléments de mon arr
//todo:         • index = c'est l'index de l'élément
//todo:         • mon filtre parcours mon tableau et le compare à l'index de l'alphabet

// function solve(arr) {
//   var alphabeth = "abcdefghijklmnopqrstuvwxyz";
//   return arr.map(x =>
//     x
//       .toLowerCase()
//       .split("")
//       .filter((elt, index) => index == alphabeth.indexOf(elt))
//   );
// }

// const test = solve(["iamdefandjkl", "thedefgh", "xyzDEFghijabc"]);
// console.log(test);

/******************************************************************************************/
//* CORRECTION 2
/******************************************************************************************/

//!  ▸ charCodeAt() retourne un entier compris entre 0 et 65535 qui correspond au code UTF-16
//todo:   3.b  ▸ description du reduce:
//todo:          • s est ma valeur courante, ici je lui donne une valeur de 0 et je lui ajoute un accumulateur
//todo:          • v.charCodeAt() c'est l'accumulateur → donc ici chaque lettre de mon array, le fait de mettre charCodeAt() permet de lui donner une valeur par rapport a son code UTF-16
//todo:          • i c'est l'index de chaque lettre de mon array (ici je lui ajoute 97 en code UTF-16: 97=a)
// 1. je mets les elt de mon tableau dans à l'interieur de tableaux
// 2. j'applique un lowercase
// 3. je fais un reduce (accumulateur, valeur courante, index) :
// l'accumulateur demarre à 0
// la valeur s augmente chaque fois de 1 si:
// ma lettre.charCodeAt soit 97 pour a, 98 pour b et ainsi de suite est == à mon index (donc 0 au debut, puis 1 et ainsi de suite) + 97
// donc ici pour la premiere lettre (i) le code charat est 105 == l'index est de 0 + 97 /// c'est donc faux et s n'augmente pas

function solve(arr) {
  return arr.map(x =>
    [...x.toLowerCase()].reduce((s, v, i) => s + (v.charCodeAt() == i + 97), 0)
  );
}

const test = solve(["iamdefandjkl", "thedefgh", "xyzDEFghijabc"]);
console.log(test);
