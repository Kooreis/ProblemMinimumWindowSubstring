Here is a TypeScript solution for the problem:

```typescript
function minWindow(s: string, t: string): string {
    let map: any = {};
    t.split('').forEach(ch => map[ch] = (map[ch] || 0) + 1);
    let count = Object.keys(map).length;
    let left = 0;
    let right = 0;
    let minLen = Infinity;
    let minStr = '';

    while (right < s.length) {
        let rightChar = s[right];
        if (map[rightChar] !== undefined) map[rightChar]--;
        if (map[rightChar] === 0) count--;
        while (count === 0) {
            if (right - left < minLen) {
                minLen = right - left;
                minStr = s.slice(left, right + 1);
            }
            let leftChar = s[left];
            if (map[leftChar] !== undefined) map[leftChar]++;
            if (map[leftChar] > 0) count++;
            left++;
        }
        right++;
    }
    return minStr;
}

console.log(minWindow("ADOBECODEBANC", "ABC"));
```

This TypeScript solution uses a sliding window approach to find the minimum window in a string that contains all characters of another string. It first creates a map of all the characters in the target string and their counts. Then it uses two pointers, left and right, to keep track of the current window. It expands the window by moving the right pointer and shrinks the window by moving the left pointer. When the count of distinct characters in the current window is zero, it means the window contains all characters of the target string. It then updates the minimum window if the current window is smaller. It continues this process until the right pointer reaches the end of the source string.