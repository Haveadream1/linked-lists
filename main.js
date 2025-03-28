// A head node is the first node in the list
// A tail node is the last node in the list

// [ NODE(head) ] -> [ NODE ] -> [ NODE(tail) ] -> null

import LinkedList from "./linkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
// list.prepend("mouse");
console.log(list.size());

// console.log(list.head()); // ISSUE

console.log(list.tail());
console.log(list.at(1));

// list.pop(); // ISSUE

console.log(list.contains("dog"));
console.log(list.find("cat"));


// list.append("parrot");
// list.append("hamster");
// list.append("snake");
// list.append("turtle");

console.log(list.toString());