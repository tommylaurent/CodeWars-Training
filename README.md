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
