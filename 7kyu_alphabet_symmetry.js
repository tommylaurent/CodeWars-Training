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
