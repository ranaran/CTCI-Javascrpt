class Stack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }
    
    push(element) {
        const min = this.minStack[this.minStack.length - 1];
        if(element < min || min === undefined) {
            this.minStack.push(element);
        } else {
            this.minStack.push(min);
        }
        this.stack.push(element);
    }
    
    pop() {
        if(this.stack.length) {
            this.minStack.pop();
            this.stack.pop();
        }
    }

    min() {
        console.log(this.stack, this.minStack); // 確認のためだけ
        console.log(this.minStack[this.minStack.length - 1]); // 表示させるため
    }
}

const test = new Stack();
test.push(3);
test.push(6);
test.push(4);
test.push(1);
test.push(-1);
test.min();
test.pop();
test.min();
test.pop();
test.min();