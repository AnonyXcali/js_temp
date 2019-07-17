class Node { 

	constructor(element){
		this.element = element;
		this.next = null;
		this.prev = null;
	}

}

class LinkedList {

	constructor(){
		this.head = new Node('head');
	}

	find(item){
		let currNode = this.head;
		while (currNode.element != item) {
      		currNode = currNode.next;
   		}
   		return currNode;
	}

	display(){
		let current = this.head;
		while(current.next != null){
			console.log(current.next.element);
			current = current.next;
		}

	}

	remove(item){
		let nodeToBeRemoved = this.find(item);
		if(nodeToBeRemoved != null){
			nodeToBeRemoved.prev.next = nodeToBeRemoved.next;
			nodeToBeRemoved.next.prev = nodeToBeRemoved.prev;
			nodeToBeRemoved.next = null;
			nodeToBeRemoved.prev = null;
		}
	}

	insert(newElement, item) {
		let newNode = new Node(newElement);
		let current = this.find(item);
		newNode.next = current.next;
		newNode.prev = current
   		current.next = newNode;
	}

	findPreviousNode(item){
		let currentNode = this.head;
		while(currentNode.next != null && item != currentNode.next.element){
			currentNode = currentNode.next;
		}
		return currentNode;
	}


}





