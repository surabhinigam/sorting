var bubbleSort = function(arr){
	for(var i=0; i<arr.length; i++){
		for(var j=0; j<arr.length-i; j++){
				if(compare(arr, j, j+1)){
					arr = swap(arr, j, j+1);
				}
		}
	}

	return arr;

}

swap = function(arr, index1, index2){
	var temp =arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
	return arr;

}

compare = function(arr, index1, index2){
	if(arr[index2] > arr[index1]) {
		return false;
	}else{
		return true;
	}
}
