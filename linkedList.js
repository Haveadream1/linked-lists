import Node from './node.js';

export default class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
    
    append(value) {
        // adds a new node containing value to the end of the list
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
    } 
    
    prepend(value) {
        // adds a new node containing value to the start of the list
        const newNode = new Node(value);
        newNode.next = this.head;

        this.head = newNode;
    } 
    
    size() {
        // returns the total number of nodes in the list  
        let size = 0;

        let currentNode = this.head;
        while (currentNode !== null) {
            size++;
            currentNode = currentNode.next;
        }
        return size;
    } 
    
    getHead() { // Issue with Head name, so we replaced it
        // returns the first node in the list
        if (this.head === null) {
            return null;
        } else {
            return this.head;
        }
    } 
        
    tail() {
        // returns the last node in the list
        if (this.head === null) {
            return null;
        } else {
            let currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            return currentNode;
        }
    } 

    at(index) {
        // returns the node at the given index
        let currentNode = this.head;
        let currentIndex = 0;
        while (currentIndex < index) {
            currentNode = currentNode.next;
            currentIndex++;
        }
        return currentNode;
    } 

    pop() {
        // removes the last element from the list
        let currentNode = this.head;
        if ( currentNode === null) {
            currentNode = null;
        } else {
            let pastNode = this.head;
            while (currentNode.next !== null) {
                pastNode = currentNode;
                currentNode = currentNode.next;
            }
            pastNode.next = null;
            currentNode = null;
        }
    } 

    contains(value) {
        // returns true if the passed in value is in the list and otherwise returns false
        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    } 

    find(value) {
        // returns the index of the node containing value, or null if not found.
        let currentIndex = 0;
        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.value === value) {
                return currentIndex;
            }
            currentIndex++;
            currentNode = currentNode.next;
        }
        return null;
    } 

    toString() {
        // represents your LinkedList objects as strings, format should be: ( value ) -> ( value ) -> ( value ) -> null
        let list = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            list.push(`( ${currentNode.value} ) -> `);
            currentNode = currentNode.next;
            if (currentNode === null) {
                list.push('null');
            }
        }
        return list.join('');
    } 
}
