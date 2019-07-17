class Queue {

	constructor(){
		this.list = [];
		this.length = 0;
	}

	queue(val){
		this.list.push(val);
		this.length++;
	}

	dequeue(){
		if(this.length == 0) return;
		
		this.length--;
		return this.list.shift() 

	}

}