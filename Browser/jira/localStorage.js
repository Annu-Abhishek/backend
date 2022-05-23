//set data
 localStorage.setItem("name", "Abhishek");
 localStorage.setItem("lastName", "kumar");
 localStorage.setItem("Stream", "CSE");
 localStorage.setItem("place", "Delhi")
 
//get data
let data = localStorage.getItem("name");
console.log(data);
let tata = localStorage.getItem("Stream");
console.log(tata);
let data1 = localStorage.name;   /* 9 & 13 th line m same chiz print hoga */
console.log(data1);

//delete/remove data
let a =localStorage.removeItem("name");
delete localStorage.name;


//length of local storage
let l= localStorage.length;
console.log(l);

let d =localStorage.key(2);
console.log(d);

