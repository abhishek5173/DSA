/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length != t.length) {
        return false;
    }
    const maps = new Map();
    const mapt = new Map();
    for (let i = 0; i < s.length; i++) {
        const start = s[i]
        const last = t[i]
        if (maps.has(start)) {
            if (maps.get(start) !== last) {
                return false;
            }
        } else {
            maps.set(start, last)
        }
        if (mapt.has(last)) {
            if (mapt.get(last) !== start) {
                return false;
            }
        }
        else {
            mapt.set(last, start)
        }
    }
    return true;
};
// if (s.length !== t.length) {
//         return false;
//     }
//     let idx_s = 0;
//     let idx_t = 0;
//     while (idx_t < t.length && idx_s < s.length) {
//         if (s.lastIndexOf(s[idx_s]) !== t.lastIndexOf(t[idx_t])) {
//             return false;
//         }
//         idx_t++;
//         idx_s++;
//     }
//     return true