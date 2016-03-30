function hasRepeatingElements(arr) {
	for (var i = 0; i < arr.length; i++){
			for (var j = i + 1; j < arr.length; j++){
				if (arr[i] === arr[j]){
					return (true);
				}
			}
	}
			return (false);
		}
	

function negativeElementsSum(arr) {
	for (var i = 0, sum = 0; i < arr.length; i++){
		if (arr[i] === 0){
			for (var j = i + 1; j < arr.length; j++){
				if (arr[j] < 0){
					sum += arr[j];
				}
				if ( j == arr.length -1){
					return sum;
				}
			}
		}
	}
	return sum;
}

function commonElements(arr1, arr2) {
	for (var i = 0, generalArr = []; i < arr1.length; i++){
		for (var j = 0; j < arr2.length; j++){
			if(arr1[i] === arr2[j]){
				generalArr.push(arr1[i]);
			}
		}
	}
	return generalArr;
}

function identityMatrix(size) {
	if (size < 1 || size > 11){
		return null;
	}else{
		var lineMatrix = [];
		for (var i = 0; i < size; i++){
			var columnMatrix = [];
			for (var j = 0; j < size;  j++){
				if (i == j){
					columnMatrix.push(1);
				}else{
					columnMatrix.push(0);
				}
		}
			lineMatrix.push(columnMatrix);
		}
		return lineMatrix;
	}
}
