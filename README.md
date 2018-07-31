#

---

#7kyu_alphabet_symmetry

Consider the word "abode".We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word.For example, solve(["abode", "ABc", "xyzD"]) = [4, 3, 1].See test cases for more examples.

Input will consist of alphabet characters, both uppercase and lowercase.No spaces.

Good luck!

**https://www.codewars.com/kata/alphabet-symmetry/train/javascript**

---

#7kyu_Friend_or_Foe

Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

Note: keep the original order of the names in the output.

**https://www.codewars.com/kata/55b42574ff091733d900002f**

---

#7kyu_List_of_Presents

Task:
Leo's girlfriend asked him to buy a gift list during his next trip, now he wants to know how many of them will he be able to buy.

Write the following function to help Leo out:

function howManyGifts(maxBudget, gifts)
The first parameter is Leo's budget; he second one is an array (a list in Groovy) containing the price of each gift. You should return an integer representing the maximum amount of gifts Leo can buy.

Example:
Maximum budget: 20
Gift List: [13, 2, 4, 6, 1]
Should return 4.

NOTE: All numbers will be integers >= 0, and the array will never be empty.

**https://www.codewars.com/kata/5a84d485742ba347b90006b7**

---

#6kyu_Count_the_smiley_faces

Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:
-Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
-A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
-Every smiling face must have a smiling mouth that should be marked with either ) or D.
No additional characters are allowed except for those mentioned.
Valid smiley face examples:
:) :D ;-D :~)
Invalid smiley faces:
;( :> :} :]

**https://www.codewars.com/kata/583203e6eb35d7980400002a**

---

#6kyu_Take_a_Ten_Minute_Walk

You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block in a direction and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

**https://www.codewars.com/kata/take-a-ten-minute-walk/javascript**

---

#7kyu_reverseAndMirror

Given 2 string parameters, show a concatenation of:

the reverse of the 2nd string with inverted case; e.g Fish -> HSIf
a separator in between both strings: @@@
the 1st string reversed with inverted case and then mirrored; e.g Water -> RETAwwATER
Keep in mind that this kata was initially designed for Shell, I'm aware it may be easier in other languages.

**https://www.codewars.com/kata/string-reversing-changing-case-etc/train/javascript**

---

#Convert all the cases!

In this kata, you will make a function that converts between camelCase, snake_case, and kebab-case.

You must write a function that changes to a given case. It must be able to handle all three case types:

js> changeCase("snakeCase", "snake")
"snake_case"

js> changeCase("some-lisp-name", "camel")
"someLispName"

js> changeCase("map_to_all", "kebab")
"map-to-all"

js> changeCase("doHTMLRequest", "kebab")
"do-h-t-m-l-request"

js> changeCase("invalid-inPut_bad", "kebab")
undefined

js> changeCase("valid-input", "huh???")
undefined

js> changeCase("", "camel")
""

Your function must deal with invalid input as shown, though it will only be passed strings. Furthermore, all valid identifiers will be lowercase except when necessary, in other words on word boundaries in camelCase.

---
