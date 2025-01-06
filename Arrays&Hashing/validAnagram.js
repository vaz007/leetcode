/**
 * Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
 * An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
 * Example 1:
 * Input: s = "racecar", t = "carrace"
 * Output: true
 * Example 2:
 * Input: s = "jar", t = "jam"
 * Output: false
 */

function validAnagram(s, t) {
  if (s.length !== t.length) return false;
  const map = new Map();
  for (let i = 0; i <= s.length - 1; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }
  console.log(map);
  for (let i = 0; i <= t.length - 1; i++) {
    if (map.get(t[i]) > 0) {
        map.set(t[i], map.get(t[i]) - 1);
    } else {
      return false;
    }
  }
  console.log(map);
  return true;
}
const va = (s,t) => {
  if (s.length !== t.length) return false;
  let z = s.split("").sort().join("");
  let y = t.split("").sort().join("");
  return z === y;
}

console.log(va("racecar", "carrace"));
console.log(va("jar", "jam"));
console.log(va("aacc", "ccac"));

// console.log(validAnagram("racecar", "carrace")); // true
// console.log(validAnagram("jar", "jam")); // false
// console.log(validAnagram("aacc", "ccac")); // false