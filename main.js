// Question 1
function printInt(n){
	for (let i=1; i<=n; i++){
		console.log(i);
	}
}

//Question 2
function printIntRev(n){
	for (let i= n; i>=1; i--){
		console.log(i);
	}
}


// Question 3
 function checkInput(x){
	switch (typeof x) {
		case 'number':
			return 'number';
			break;
		case 'string':
			return 'string';
			break;
		case 'boolean':
			return 'boolean';
			break;
		default:
			return -1;
			break;
	}
}



// Question 4
function simpleEvenAdding(num){

let sum = 0;
for(let i = 0; i<= num; i+=2){
	
	sum = sum+i;
	
}
return sum;
}
function simpleEvenAdding2(num){
let sum = 0;
for(let i = 0; i<= num; i++){
	
	if(i%2 === 0){
		sum +=i;
	}
	
}
return sum;
}



//Question 5

function letterCapitalize(str){

let arr = str.split("");
// console.log(arr[0].toUpperCase());

	for (let i=0; i<arr.length; i++){		
		arr [0] = arr[0].toUpperCase();
		
		if (i === (arr.length-1) ){
			continue
		} 		
		if (arr[i] == " "){
		arr[i+1] = arr[i+1].toUpperCase(); 	
		}

		
		all = arr.join("");

	}return all 
	
}



//Question 6

function simpleReverse(str){
	let arr = str.split("");
	arr.reverse();
	let arr2 = arr.join("");
	return arr2 
}

function simpleReverse2(str){
 
  let arr= str.split("");

let arr2 = arr
	for(let i =arr.length; i>=0; i--){
	
       arr2.push(arr[i]);
		arr2.splice(i,1);	
	}		 
	 y =arr2.join("");
	 return y
}


// Question 7
function findDiff(arr){
	let diff = Math.max(...arr) - Math.min(...arr);
	return diff
}


// Question 8

function timeConvert(num){
	let time = parseInt((num/60)) + ":" + num%60 
	return time
}

;
// Question 9

function find(str,long){
	y = long.split(str).length-1; 
	return y
} 

function find2(str,long){
	
accumulator = 0;

	for(let i=0; i<long.length; i++){		
		if(long.slice(i,str.length+i) === str){
	 	 accumulator++	
        }
    }return accumulator 
}


// Question 10

function selfDividingNumbers(left, right){
	for(let i=left; i<=right; i++){	
		 [i.toString().split("")].forEach(function(x){
		 			if(x.every(z => i%z ==0)){
		 				console.log(i);
		 			}	
		 });	 		
	}  		
}	

//Extra Credit

function moveZeros(arr){
	for(let i = 0; i<arr.length; i++)

		if(arr[i] === 0){
				arr.push(arr[i]);
				 arr.splice(i,1);
			}
			let arr2 = arr
	for (let i = 0; i <arr2.length; i++) {	
		
		if(arr[i] === 0){
				arr.push(arr[i]);
				arr.splice(i,1);
	 		}
	}return arr2
}

		
 


