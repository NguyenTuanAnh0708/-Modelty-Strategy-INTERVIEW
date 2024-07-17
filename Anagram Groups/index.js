function solution(strs) {
    let anagrams = {};
    for (let str of strs) {
        let sortedStr = str.split('').sort().join('');
        if (!anagrams[sortedStr]) {
            anagrams[sortedStr] = [];
        }
        anagrams[sortedStr].push(str);
    }
    return Object.values(anagrams);
}

// Example usage
const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
const output = solution(input);
console.log(output); 