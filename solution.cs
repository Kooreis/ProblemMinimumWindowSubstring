function minWindow(s, t) {
    let map = {};
    t.split('').forEach(ch => map[ch] = (map[ch] || 0) + 1);
    let count = Object.keys(map).length;
}