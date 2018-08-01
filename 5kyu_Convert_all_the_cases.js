/******************************************************************************************/
//*5kyu_Convert_all_the_cases
/******************************************************************************************/

/******************************************************************************************/
//*EXERCICE
/******************************************************************************************/

function changeCase(identifier, targetCase) {
  return identifier + targetCase;
}

const test = changeCase("some-lisp-name", "camel");
console.log(test);

// Test.it("Should work for given examples", () => {

//    Test.assertEquals(
//       changeCase("snakeCase", "snake")
//       , "snake_case");

//    Test.assertEquals(
//       changeCase("some-lisp-name", "camel")
//       , "someLispName");

//    Test.assertEquals(
//       changeCase("map_to_all", "kebab")
//       , "map-to-all");

//    Test.assertEquals(
//       changeCase("invalid-inPut_bad", "kebab")
//       , undefined);

//    Test.assertEquals(
//       changeCase("valid-input", "huh???")
//       , undefined);

//    Test.assertEquals(
//       changeCase("", "camel")
//       , "");
// });
