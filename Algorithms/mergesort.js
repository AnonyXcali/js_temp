var arr = [54, 10 , 22, 6, 7 , 84, 21, 4 ,1 , 3, 5]

const mergeSort = (arr, leftIndex ,rightIndex) => {

	const merge = (arr, leftIndex, dividerIndex, rightIndex ) => {

		let l = [];
		let r = [];

		for(let i = leftIndex; i < dividerIndex + 1 ;i++){
			l.push(arr[i]);
		}

		for(let j=dividerIndex+1; j<=rightIndex; j++){
			r.push(arr[j]);
		}

		l.push(9999999999);
		r.push(9999999999);

		let leftCounter = 0;
		let rightCounter = 0;

		for(let index = leftIndex; index<=rightIndex; index++){
			if(l[leftCounter] <= r[rightCounter]){
				arr[index] = l[leftCounter];
				leftCounter++;
			}else{
				arr[index] = r[rightCounter];
				rightCounter++;
			}
		}
		
		return arr;
	}

		if(leftIndex < rightIndex){
			let divider = Math.floor((leftIndex+rightIndex)/2);
			mergeSort(arr, leftIndex, divider); // left
			mergeSort(arr, divider+1, rightIndex) // right
			merge(arr, leftIndex, divider, rightIndex);
		}
	return arr;
}

console.log(mergeSort(arr, 0, arr.length-1));
