/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length >=1 && s.length<= 104 )
    {
        const stack =[];
        const parenthesisMap = {
        '(' : ')',
        '{' :'}',
        '[' :']'    };
        for(let char of s){
            if(char in parenthesisMap){
                stack.push(char);
            }
            else
            {
                const last = stack.pop();
                if(char !==parenthesisMap[last])
                {
                    return false;
                }
            }
        }
        return stack.length ===0;
    }
    else
    {
        return false;
    }
    
};

module.exports = { isValid };

