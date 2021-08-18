class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

  // 連結リスト
class LinkedList {
    constructor() {
        this.head = null;
    }
    // 末尾に要素を追加する
    push(value) {
        const node = new LinkedListNode(value);
        if (!this.head) {
        this.head = node;
        return node;
    } else {
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
        return node;
    }
    }
    // 先頭に要素を追加する
    unshift(value) {
        const node = new LinkedListNode(value);
        node.next = this.head;
        this.head = node;
    }
    // 文字列化
    toString() {
        const array = [];
        let current = this.head;
        while (current) {
            array.push(current.value);
            current = current.next;
        }
        return array.toString();
    }
}

const inputList = new LinkedList();
const node1 = inputList.push(5);
const node2 = inputList.push(3);
const node3 = inputList.push(9);
const node4 = inputList.push(2);
node4.next = node2;

// console.log(inputList.toString());

function isLoop(list) {
    const arr = [];
    let current = list.head;
    while (current) {
        arr.push(current);
        if(arr.includes(current.next)) {
            break;
        }
        current = current.next;
    }
    console.log(arr);
    return current.next;
}

console.log(isLoop(inputList));