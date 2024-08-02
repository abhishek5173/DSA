/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
   const str = s.split(' ');
   const word = [];
   for(let i = 0; i < str.length ; i++){
    if(str[i] != ''){
        word.push(str[i])
    }
   }
   return word.reverse().join(' ');
};

// let n = s.length;
//    let ans="";
//    let i=0;
//    while(i < n){
//     let temp="";
//     while(s[i] == ' ' && i < n){
//         i++;
//     }
//     while(s[i] != ' ' && i < n ){
//         temp+=s[i]
//         i++;
//     }
//     if(temp.length>0){
//         if(ans.length==0){
//             ans=temp;
//         }
//         else{
//             ans = temp+" "+ans;
//         }
//     }
//    }
//    return ans;