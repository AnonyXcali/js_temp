const lastGiftGivenTo = (kids, gifts, pos) => {

	let currentChild;

	while(gifts > 0){
		if(pos > kids) pos = 1;
		currentChild = pos
		gifts--;
		pos++;

	}

	return currentChild;
}



let ans = lastGiftGivenTo(3,5,3);
console.log(ans);