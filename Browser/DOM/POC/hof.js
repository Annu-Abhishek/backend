let arr=[1, 2, 3, 4];
// output=[1, 4, 9, 16]

// let square=[];
// for(let i=0; i<arr.length;i++){
//     square[i]=arr[i]*arr[i];
// }



// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array

square = arr.map(function(ele){
    return ele*ele;
})

console.log(square);
