class Node { 

	constructor(element, left, right){
		this.data = data;
		this.left = left;
		this.right = right;
	}

}


class Tree {

	constructor(){
		this.root = null;
	}


	insert(data){
		let newNode = new Node(data, null, null);

		if(this.root == null){
			this.root = newNode;
		}else{
			let current = this.root;
			let parent;
			while(true){
				parent = current;
				if(data < current.data){
					current = current.left;
				}else{
					parent.right = newNode;
				}
			}

		}

	}
}