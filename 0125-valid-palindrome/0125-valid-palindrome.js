/**
 * @param {string} s
 * @return {boolean}
 */
function remove(str){
   return str.replace(/[^a-zA-Z0-9]/g,'');
};

var isPalindrome = function(s) {
  var str = s;
   var str = remove(str);
   var str = str.toLowerCase();
   rev="";
   for (let i = 0; i < str.length; i++) {
      rev = str[i]+rev
   }
   if (rev==str) {
      return true
   }
   return false;
    
};