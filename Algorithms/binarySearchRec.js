const binarySearch = (arr, target, leftIndex, rightIndex) => {
	if(leftIndex < rightIndex){
		let mid = Math.floor((rightIndex+leftIndex)/2);
		if(arr[mid] === target) return `found at ${mid}`;

		if(target < arr[mid]){
			rightIndex = mid - 1;
			return binarySearch(arr, target, leftIndex, rightIndex);
		}else{
			leftIndex = mid + 1;
			return binarySearch(arr, target, leftIndex, rightIndex);
		}
	}else{
		return -1;
	}

}

let arr = [1, 4, 5, 9 , 22, 45, 65];
let target = 45;
let ans = binarySearch(arr ,target, 0 , arr.length - 1);
console.log(ans);
