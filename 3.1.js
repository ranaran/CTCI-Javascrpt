class ArrToStack {
    constructor() {
        this.stack = [];
        this.stackLength = [0, 0, 0];
    }
    push(stackNum,value) {
        const place = this.stackLength.slice(0,stackNum);
        const index = place.reduce(((acc, cur) => acc+cur),0);
        this.stack.splice(index,0,value);
        this.stackLength[stackNum - 1]++
    }
    pop(stackNum) {
        const place = this.stackLength.slice(0,stackNum);
        const index = place.reduce(((acc, cur) => acc+cur),0) - 1;
        this.stack.splice(index,1);
        this.stackLength[stackNum - 1]--;
    }
}

const test = new ArrToStack();
test.push(1,1);
console.log(test);
test.push(3,3);
console.log(test);
test.push(2,5);
console.log(test);
test.push(2,2);
console.log(test);
test.pop(2);
console.log(test);