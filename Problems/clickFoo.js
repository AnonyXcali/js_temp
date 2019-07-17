function foo(num){
	this.click++;
}


foo.click = 0;



for(let i = 0; i < 5; i++){
	foo.call(foo, i)
}

console.log(foo.click);