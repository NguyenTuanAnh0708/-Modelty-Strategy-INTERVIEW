function isPalindrome(str) {
    const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
    let left = 0;
    let right = normalizedStr.length - 1;
    while (left < right) {
        if (normalizedStr[left] !== normalizedStr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

// A man, a plan, a canal, Panama
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true

