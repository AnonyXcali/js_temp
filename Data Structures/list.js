/**
	listSize,
	pos,
	dataStore,
	clear,
	find,
	toString,
	insert,
	append,
	remove,
	front,
	end,
	prev,
	next,
	length,
	currPos,
	moveTo,
	getElement,
	contains
**/





class List {
	constructor(
			listSize,
			dataStore,
			pos,
			contains
		) {
		this.listSize = 0;
   		this.pos = 0;
   		this.dataStore = []; // initializes an empty array to store list elements
   		this.contains = contains;
	}

	append(element) {
		this.dataStore[this.listSize++] = element;
	}

	insert(element, after){
		if(this.find(element) > -1){
			this.dataStore.splice(insertPos+1, 0, element);
      		++this.listSize;
      		return true;
		}
		return false;
	}

	toString(){
		return this.dataStore.toString();
	}

	find(ele){
		for(let i = 0; i < this.listSize; ++i){
			if(this.dataStore[i] == ele){
				return i;
			}
		}

		return -1;
	}

	remove(ele){
		if(this.find(ele) > -1){
			this.dataStore.splice(this.find(ele), 1);
			this.listSize--;
			return true;
		}
		return false;
	}

	length(){
		return this.listSize;
	}

	clear(){
		this.dataStore = [];
		this.listSize = 0;
	}

	getElement() {
   		return this.dataStore[this.pos];
	}

	front() {
		this.pos = 0;
	}

 	end() {
 		this.pos = this.listSize-1;
 	}

	prev() {
		if (this.pos > 0) {
			--this.pos;
		}
	}

	next() {
   		if (this.pos < this.listSize-1) {
      	++this.pos;
   		}
	}

	currPos() {
   		return this.pos;
	}

	moveTo(position) {
		this.pos = position;
	}

}

var names = new List();
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");

