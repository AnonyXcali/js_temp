function a(){/**/};

let array = [];
let anotherObj = {
	c : true
}


let myObject = {

	a:2,
	b: a,
	c: array,
	d: anotherObj
}

array.push(anotherObj, myObject)

console.log(myObject.c );