let arr = [2,1,0,2,2,1,0,0,1,1,2,1,0];
// [1,1,1,1,1,0,0,0,0,2,2,2,2]


let refactorWarehouse = (arr, leftIndex, rightIndex) => {

		let partition = (arr, leftBoundary, rightBoundary ) => {

		let pivotIndex = rightBoundary;
		let replaceMark = leftBoundary - 1;

		for(let i = leftBoundary; i<pivotIndex; i++){

			if(arr[i] < arr[pivotIndex]){
				replaceMark++;
				swap(i,replaceMark);
			}

		}
		swap(replaceMark+1, pivotIndex);
		return replaceMark+1;
	}



	let swap = (element, elementToBeSwapped) => {
		let temp = arr[element];
		arr[element] = arr[elementToBeSwapped];
		arr[elementToBeSwapped] = temp
		return arr;
	}

	if(leftIndex < rightIndex){
		let index = partition(arr, leftIndex, rightIndex);
		refactorWarehouse(arr, index+1, rightIndex);
		refactorWarehouse(arr, leftIndex, index-1 )
	}



	return arr;
}


console.log(refactorWarehouse(arr, 0 , arr.length-1))