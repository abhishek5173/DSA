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