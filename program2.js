/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let table = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        //if the next roman numeral is larger, then we know we have to subtract this number
        if (table[s[i]] < table[s[i+1]]) {
            result-=table[s[i]]
        } 
        //otherwise, add like normal. 
        else {
            result+=table[s[i]]
        }
    }
    return result
};


module.exports={romanToInt}