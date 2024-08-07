/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let temp ="";
    strs.sort();
    let f = strs[0];
    let l = strs[strs.length-1];
    for(let i =0 ; i <f.length;i++){
        if(f[i] != l[i]){
            break;
        }
        temp+=f[i]
    }
    return temp;
};