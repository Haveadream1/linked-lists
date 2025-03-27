import Node from './node.js';

export default class linkedList {
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
    } 
    
    size() {
        // returns the total number of nodes in the list  
    } 
    
    head() {
        // returns the first node in the list
    } 
        
    tail() {
        // returns the last node in the list
    } 

    at(index) {
        // returns the node at the given index
    } 

    pop() {
        // removes the last element from the list
    } 

    contains(value) {
        // returns true if the passed in value is in the list and otherwise returns false
    } 

    find(value) {
        // returns the index of the node containing value, or null if not found.
    } 

    toString() {
        // represents your LinkedList objects as strings, format should be: ( value ) -> ( value ) -> ( value ) -> null
    } 
}