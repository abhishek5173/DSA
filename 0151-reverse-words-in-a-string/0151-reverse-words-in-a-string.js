/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
   let n = s.length;
   let ans="";
   let i=0;
   while(i < n){
    let temp="";
    while(s[i] == ' ' && i < n){
        i++;
    }
    while(s[i] != ' ' && i < n ){
        temp+=s[i]
        i++;
    }
    if(temp.length>0){
        if(ans.length==0){
            ans=temp;
        }
        else{
            ans = temp+" "+ans;
        }
    }
   }
   return ans;
};