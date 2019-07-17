class Node (){
	constructor(value, left, right){
		this.value = value;
		this.left = left;
		this.right = right;

	}
}

class Tree () {
	constructor(node){
		this.root = null;
	}


	insert(value){

		let node = new Node(value, null , null);

		if(!this.root){
			this.root = node;
		}else{
			
		}
	}


}