Here is a JavaScript solution for the problem:

```javascript
function minWindow(s, t) {
    let map = {};
    t.split('').forEach(ch => map[ch] = (map[ch] || 0) + 1);
    let count = Object.keys(map).length;
    let l = 0;
    let r = 0;
    let minLen = Infinity;
    let minStr = '';

    while(r < s.length) {
        if(map[s[r]] !== undefined) {
            map[s[r]]--;
            if(map[s[r]] === 0) count--;
        }
        r++;

        while(count === 0) {
            if(r - l < minLen) {
                minLen = r - l;
                minStr = s.slice(l, r);
            }

            if(map[s[l]] !== undefined) {
                map[s[l]]++;
                if(map[s[l]] > 0) count++;
            }
            l++;
        }
    }

    return minStr;
}

console.log(minWindow("ADOBECODEBANC", "ABC"));
```

This console application can be run in a Node.js environment. It finds the minimum window in a string that contains all characters of another string. The function `minWindow` takes two strings as input and returns the minimum window in the first string that contains all characters of the second string. The `console.log` statement at the end is used to test the function with the strings "ADOBECODEBANC" and "ABC".