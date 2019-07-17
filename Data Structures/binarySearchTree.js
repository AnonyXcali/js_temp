
class Node{
	constructor(value, left, right){
		this.left = left;
		this.right = right;
		this.value = value;
	}
}


class BinarySearchTree {

	constructor(){
		this.root = null;
	}

	_insert(value){
		let node = new Node(value, null , null);

		if(!this.root){
			this.root = node;
		}else{
			let current = this.root;
			let parent;
			while(true){
				parent = current;
				if( value > current.value ){
					current = current.right;
					if(!current){
						parent.right = node;
						break;
					}
				}else{
					current = current.left;
					if(!current){
						parent.left = node;
						break;
					}
				}
			}
		}
	}

	insert(value){
		const recursive = (node, dir) => {
			if(!node[dir]){
				node[dir] = new Node(value, null, null);
				return;
			}else{
				if(value > node[dir].value){
					recursive(node[dir], 'right');
				}else{
					recursive(node[dir], 'left');
				}
			}

		}
		recursive(this, 'root')
	}

	traverseInOrder(node){
		if(node){
			if(!node.left && !node.right){
				console.log(node.value);
				return;
			}

			if(node.left){
				this.traverseInOrder(node.left);
			}

			console.log(node.value);

			if(node.right){
				this.traverseInOrder(node.right);
			}
		}else{
			console.log('Tree is empty');
		}
	}

	traversePreOrder(node){
		if(node){

			console.log(node.value)

			if(!node.left && !node.right){
				return;
			}

			if(node.left){
				this.traversePreOrder(node.left);
			}

			if(node.right){
				this.traversePreOrder(node.right);
			}
		}else{
			console.log('Tree is empty');
		}
	}

	traversePostOrder(node){
		
		if(node){

			if(!node.left && !node.right){
				console.log(node.value)
				return;
			}

			if(node.left){
				this.traversePostOrder(node.left);
			}

			if(node.right){
				this.traversePostOrder(node.right);
			}

			console.log(node.value)

		}else{
			console.log('Tree is empty');
		}
	}
}

let tree1 = new BinarySearchTree();

tree1.insert(3);
tree1.insert(17);
tree1.insert(4);
tree1.insert(8);
tree1.insert(1);
tree1.insert(22);
tree1.insert(-1);
tree1.insert(10);
tree1.insert(50);

console.log('INORDER ===========')
tree1.traverseInOrder(tree1.root);
console.log('PREORDER ===========')
tree1.traversePreOrder(tree1.root);
console.log('POSTORDER ==========')
tree1.traversePostOrder(tree1.root);