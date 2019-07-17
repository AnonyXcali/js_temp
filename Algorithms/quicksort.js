let arr = [48, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 3];
/*         0  1   2   3  4   5   6   7   8   9  10  11  12  13  14*/
let quickSort = (arr, leftIndex,  rightIndex) => {

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
		quickSort(arr, index+1, rightIndex);
		quickSort(arr, leftIndex, index-1 )
	}

	return arr;
}

console.log(quickSort(arr, 0, arr.length-1));


