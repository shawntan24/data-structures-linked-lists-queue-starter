// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) { 
        // Add node of val to head of linked list
        const newNode = new SinglyLinkedNode(val);

        // if no values, assign head to new node
        if(!this.head){
            this.head = newNode;
        } else {
            //assign next pointer of newNode to current head and reassign head to new node
            newNode.next = this.head;
            this.head = newNode;
        }
        
        this.length++;
        return this;

        // Write your hypothesis on the time complexity of this method here
        // O(1) complexity, does not require traversal
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to tail of linked list
        const newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;
        return this;
    }

    removeFromHead() {
        // Remove node at head
        //If no nodes present in linked list, just return
        if(!this.head){
            return undefined;
        }

        const removedNode = this.head;

        this.head = this.head.next;
        this.length--;

        return removedNode;

        // Write your hypothesis on the time complexity of this method here

        //O(1) because no need to traverse
    }

    removeFromTail() {
        // Remove node at tail

        if(!this.head){
            return undefined;
        }

        let removedTail;
        if(this.head){
            if(this.length === 1){
                removedTail = this.head;
                this.head = null;
            } else {
                let current = this.head;

                while(current.next.next){
                    current = current.next
                }

                removedTail = current.next;
                current.next = null;
            }
            this.length--;
            return removedTail;
        }

        // Write your hypothesis on the time complexity of this method here
        // O(n) as it has to traverse to the end
    }

    peekAtHead() {
        // Return value of head node

        if(!this.head){
            return undefined;
        }

        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
        //O(1) because it'll just return one value;
    }

    print() {
        // Print out the linked list

        let current = this.head;

        while(current){
            console.log(current.value)
            current = current.next;
        }
        
        // Write your hypothesis on the time complexity of this method here

        //O(n) because of traversal through entire linkedlist
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
