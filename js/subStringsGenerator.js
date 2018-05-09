function slicer(input, s, e){
	var substring='';
	for(l=s; l<e; l++){
		substring += input[l];
	}
	return substring;
}

String.prototype.substrings =  function (){
	var subArray = [];
	for(i=0; i<this.length; i++){
		for(j=i+1; j<=this.length; j++){
			if(i==0 && j == this.length)
				continue;
			subArray.push(slicer(this, i, j));
		}
	}
	return subArray;
}


