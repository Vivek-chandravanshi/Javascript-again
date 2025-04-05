/*
JavaScript Execution Context
    Global Execution Context (Global EC)

        Created when the JavaScript file starts executing.

        It is the default or base context.

        The this keyword in the global context refers to the global object (window in browsers).

    Function Execution Context

        Created whenever a function is invoked.

        Each function has its own execution context.

    Eval Execution Context

        ode is executed inside an eval() function.

Rarely used in modern development due to security and performance concerns.
*/

/*
🔁 JavaScript Execution Context Breakdown

1. Global Execution Context
    This is the default context where code starts execution.

    this in the global context refers to the global object.

⚙️ 2. Memory Phase (Creation Phase)
    JavaScript engine scans through the code and allocates memory to variables and functions.

    Variables are set to undefined.

    Functions are stored with their full definitions.

Example from code:
let val1 = 10;
let val2 = 5;
function addNum(num1, num2){
    let total = num1 + num2;
    return total;
}
let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);

Memory Allocations:

val1 → undefined

val2 → undefined

addNum → function definition

result1 → undefined

result2 → undefined

▶️ 3. Execution Phase
Variables are assigned actual values.

Functions are executed and execution contexts are created for them.

Global Execution Phase:

val1 → 10

val2 → 5

result1 → 15 (via addNum(val1, val2))

result2 → 12 (via addNum(10, 2))

🧠 Function Execution Context (When addNum() is called):
Memory Phase (inside function):
num1 → undefined

num2 → undefined

total → undefined

Execution Phase:
num1 → 10

num2 → 5

total → 15

➡️ Temporary execution context is created for function call:

It includes a new variable environment and an execution thread.

After execution, it is deleted.

*/