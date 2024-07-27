/**
 * @param {number[]} arr
 * @return {number}
 */
var majorityElement = function(arr) {
    const n = arr.length;
    let count = 0;
    let el ;
    for(let i=0; i<n ; i++){
        if(count==0){
            el = arr[i]
            count=1;
        }
        else if(arr[i] == el){
            count++;
        }
        else{
            count--;
        }
    }
    let count1 =0 ;
    for(let i=0; i<n ; i++){
        if(arr[i] == el){
            count1++;
        }
        if(count1>Math.floor((n/2))){
            return el;
        }
    }
    return -1;
};