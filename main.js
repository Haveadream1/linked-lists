import LinkedList from "./linkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.prepend("mouse");
console.log(list.size());

console.log(list.getHead());

console.log(list.tail());
console.log(list.at(1));

list.pop();

console.log(list.contains("dog"));
console.log(list.find("cat"));

console.log(list.toString());