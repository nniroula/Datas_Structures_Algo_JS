// Node in linked list

// Node class
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

let firstNode = new Node("Nabin");
let secondNode = new Node("Bro");
// console.log(firstNode);
// console.log(secondNode);

// connect them together
firstNode.next = secondNode;
console.log(firstNode);
