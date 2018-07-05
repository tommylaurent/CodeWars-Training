/************************************************ 
ALPHABET SYMMETRY - KYU 7 
***********************************************/

/**********************************************
Consider the word "abode".We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word.For example, solve(["abode", "ABc", "xyzD"]) = [4, 3, 1].See test cases for more examples.

Input will consist of alphabet characters, both uppercase and lowercase.No spaces.

Good luck!

https://www.codewars.com/kata/alphabet-symmetry/train/javascript

---

  Comparer l'emplacement des lettre du mot par rapport a l'emplacement des lettre dans l'alphabet:

"abode" = 4
"abcde"

ici 4 lettres ce place au même endroit dans l'alphabet et dans le mot (a=1, b=2, d=4, e=5)

"xyzD" = 1
abcD
ici 1 lettre ce place au même endroit dans l'alphabet et dans le mot (D=4)
***********************************************/
