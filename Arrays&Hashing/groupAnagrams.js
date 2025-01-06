/**
 * Group Anagrams
 * Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.
 * An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
 * Example 1:
 * Input: strs = ["act","pots","tops","cat","stop","hat"]
 * Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
 */

const groupAnagrams = (strs) => {
  const map = new Map();
  for (let i = 0; i < strs.length; i++) {
    let string = strs[i].split("").sort().join("");
    if (map.has(string)) {
      map.get(string).push(strs[i]);
    } else {
      map.set(string, [strs[i]]);
    }
  }
  const data = map.values();
  return [...data];
};
console.log(groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"])); // [["hat"],["act", "cat"],["stop", "pots", "tops"]]ls

/** 
** Time Complexity:
1. **Iterating through `strs`**:
   - You iterate through all strings in `strs`, so this contributes \(O(n)\), where \(n\) is the number of strings.

2. **Sorting Each String**:
   - Each string is split into characters (\(O(k)\)), sorted (\(O(k \log k)\)), and joined back into a string (\(O(k)\)), where \(k\) is the average length of the strings.
   - For \(n\) strings, this contributes O(n . k log k).

3. **HashMap Operations**:
   - Checking and inserting into the map (`map.has` and `map.set`) are \(O(1)\) on average but can occasionally be \(O(k)\) in edge cases (string comparisons).
   - For simplicity, we can approximate this as \(O(n \cdot k)\).

**Overall Time Complexity**:
\[
   O(n⋅klogk)
\]

### Space Complexity:
1. **HashMap Storage**:
   - The map stores \(n\) strings (grouped into their sorted forms) as keys, and each key points to an array of grouped anagrams.
   - In the worst case (all strings are unique anagrams), this requires \(O(n \cdot k)\) space.

2. **Auxiliary Space**:
   - Sorting each string creates a temporary array of characters, requiring \(O(k)\) space for each string. For \(n\) strings, this contributes \(O(n \cdot k)\).
   - Additionally, the `map.values()` creates an output array, contributing another \(O(n \cdot k)\).

**Overall Space Complexity**:
\[
O(n.k)
\]

---

### Final Analysis:
- **Time Complexity**: (O(n.k log k))
- **Space Complexity**: (O(n.k))

*/
