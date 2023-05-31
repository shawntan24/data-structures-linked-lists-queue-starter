// Node class is implemented for you, no need to look for bugs here!
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
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
        // O(1)

        // Add node of val to head of linked list
        const newNode = new DoublyLinkedNode(val);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
    }

    addToTail(val) {
        // Add node of val to tail of linked list

        const newNode = new DoublyLinkedNode(val)

        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;

        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    removeFromHead() {
        // Remove node at head

        if(!this.head){
            return undefined;
        }

        const removedHead = this.head.value;

        if(this.length === 1){
            this.head = null;
            this.tail = null;
            this.length--;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            this.length--;
        }

        return removedHead;
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail

        if(this.length === 0){
            return undefined;
        }

        let removedTail = this.tail.value;

        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else if (this.length === 2){
            this.tail = this.head;
            this.tail.next = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        this.length--;
        return removedTail

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node

        if(!this.head){
            return undefined;
        } else {
            return this.head.value;
        }

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
        // Return value of tail node

        if(!this.tail){
            return undefined;
        } else {
            return this.tail.value;
        }
        
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
