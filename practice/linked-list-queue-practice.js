// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        // O(n)
        let length = 0;
        let current = this.head;
        
        while (current){
            current = current.next;
            length++;
        }

        return length;
        // Implement in O(n) and in O(1) time complexity

        // implementing in O(1) time complexity would require length property and modification of the length property whenever adding to tail
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes
        let current = this.head;
        let sum = 0;

        while(current){
            sum += current.value;
            current = current.next;
        }
        return sum;

        // Write your hypothesis on the time complexity of this method here

        //O(n)
    }

    averageValue() {
        // Returns the average value of all the nodes

        //O(n)
        let current = this.head;
        let sum = 0;
        let length = 0;

        if(!current){
            return 0;
        }

        while(current){
            sum += current.value;
            length++;
            current = current.next;
        }

        return sum/length;

        // O(n) if performing return statement under
        // return this.sumOfNodes()/this.listLength();
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
        let num = 0;
        let current = this.head;
        
        while(num < n){
            current = current.next;
            num++;
        }

        return current;

        // Write your hypothesis on the time complexity of this method here

        // O(n)
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?
        const length = this.listLength();
        const mid = length % 2 === 0 ? (length/2) - 1 : Math.floor(length/2)

        return this.findNthNode(mid);

        // Write your hypothesis on the time complexity of this method here

        //O(1)
    }

    reverse() {
        // Returns a new reversed version of the linked list

        const newList = new SinglyLinkedList();
        const length = this.listLength();

        let newNode;

        for (let i = length - 1; i >= 0; i--){
            newNode = this.findNthNode(i);
            newList.addToTail(newNode.value);
        }

        return newList;

        // Write your hypothesis on the time complexity of this method here

        //O(2n) -> O(n)
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let length = this.listLength();
        let index = length - 1;
        let node = this.findNthNode(index);
        
        while(node){
            this.addToTail(node.value);
            index--;
            node = this.findNthNode(index-1);
        }

        const current = this.head;
        const num = 0;
        while (num < length){
            this.head = this.head.next;
        }

        // Write your hypothesis on the time complexity of this method here
        //O(n)
    }
}

class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.tail;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.tail;
    }

    findMid() {
        // Returns the middle node

        let length = 0;
        let current = this.head;

        while(current){
            length++;
            current = current.next;
        }

        const mid = length % 2 === 0 ? (length/2) - 1 : Math.floor(length/2);
        current = this.head;

        for (let i = 0; i < mid; i++){
            current = current.next;
        }

        return current;

        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Write your hypothesis on the time complexity of this method here

        //O(n)
    }

    reverse() {
        // Returns a new reversed version of the linked list
        const newList = new DoublyLinkedList();

        let current = this.tail;

        while(current){
            newList.addToTail(current.value);
            current = current.prev;
        }

        return newList;

        // Write your hypothesis on the time complexity of this method here

        //O(n)
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        let current = this.head;
        let prev = null

        while (current){
            let next = current.next;
            current.next = prev;
            current.prev = next;

            prev = current;
            current = next;
        }

        this.tail = this.head;
        this.head = prev;
        
        // Write your hypothesis on the time complexity of this method here
        //O(n)
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
