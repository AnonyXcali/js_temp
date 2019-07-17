class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  toString() {
    return `[#${this.key}: ${this.value}]`;
  }
}



class Dictionary {
	constructor(){
		this.table = {};
	}

	toStrFn(item) {
		if (item === null) {
    		return 'NULL';
  		}else if (item === undefined) {
    		return 'UNDEFINED';
 		}else if (typeof item === 'string' || item instanceof String) {
    		return `${item}`;
  		}
  		return item.toString();
	}

	hasKey(key) {
  		return this.table[this.toStrFn(key)] != null;
	}

	set(key, value) {
 		 if (key != null && value != null) {
    		const tableKey = this.toStrFn(key); 
    		this.table[tableKey] = new ValuePair(key, value);
    		return true;
  		}
  		return false;
	}

	remove(key) {
  		if (this.hasKey(key)) {
    		delete this.table[this.toStrFn(key)];
    	return true;
  	}
 	 return false;
	}

	get(key) {
  		const valuePair = this.table[this.toStrFn(key)]; // {1}
  		return valuePair == null ? undefined : valuePair.value; // {2}
	} 

	keyValues() { 
  		const valuePairs = []; 
  		for (const k in this.table) { // {1} 
    		if (this.hasKey(k)) { 
      	valuePairs.push(this.table[k]); // {2} 
    		} 
  		} 
  		return valuePairs; 
	};

}


const dictionary = new Dictionary(); 
dictionary.set('Gandalf', 'gandalf@email.com'); 
dictionary.set('John', 'johnsnow@email.com'); 
dictionary.set('Tyrion', 'tyrion@email.com'); 
console.log(dictionary.keyValues()); 