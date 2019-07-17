class Stack {
	constructor(){
		this.list = [];
		this.length = 0;
	}

	push(val){
		this.list.push(val);
		this.length++;
	}

	pop() {
		if (this.length === 0) return;
		this.length--;
		return this.list.pop();
  	}

  	peek() {
  		return this.list[this.length - 1];
  	}

}

let tesTack = new Stack();


tesTack.push(1);
tesTack.push(3);
tesTack.push(2);

console.log(tesTack.peek());