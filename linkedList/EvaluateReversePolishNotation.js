const evaluateReversePolishNotation = (tokens) => {
    const stack = [];

    for (let token of tokens) {
        if (!isNaN(token)) {
            // Push numbers onto the stack
            stack.push(Number(token));
        } else {
            // Pop the last two numbers from the stack for operations
            let b = stack.pop();
            let a = stack.pop();

            // Perform the operation based on the token
            switch (token) {
                case '+':
                    stack.push(a + b);
                    break;
                case '-':
                    stack.push(a - b);
                    break;
                case '*':
                    stack.push(a * b);
                    break;
                case '/':
                    stack.push(Math.trunc(a / b)); // Truncate for integer division
                    break;
                default:
                    throw new Error(`Invalid token: ${token}`);
            }
        }
    }

    // The final result is the only element left in the stack
    return stack.pop();
};

// Example Usage
const tokens = ["2", "1", "+", "3", "*"]; // Equivalent to: (2 + 1) * 3
console.log(evaluateReversePolishNotation(tokens)); // Output: 9

if (!isNaN('abc')) {
    // Push numbers onto the stack
   // stack.push(Number(token));
  
} 
console.log('token', !isNaN('1'));