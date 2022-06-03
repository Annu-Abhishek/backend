// // localStorage browser ka function h ..behave like an object

// //set data
//  localStorage.setItem("name", "Abhishek");
//  localStorage.setItem("lastName", "kumar");
//  localStorage.setItem("Stream", "CSE");
//  localStorage.setItem("place", "Delhi")
//  localStorage.hobby = "reading";

 
// //get data
// let data = localStorage.getItem("name");
// console.log(data);
// let tata = localStorage.getItem("Stream");
// console.log(tata);
// let data1 = localStorage.name;   /* 9 & 13 th line m same chiz print hoga */
// console.log(data1);

// //delete/remove data
// let a =localStorage.removeItem("name");
// delete localStorage.name;


// //length of local storage
// let l= localStorage.length;
// console.log(l);

// let d =localStorage.key(2);
// console.log(d);

let user= {
    name: "abhishek",
    age: 30,
    wife: "Annu",
    children: "not known",
    
};
let key = prompt("what do yor want to know about the user?", "name");

alert(user[key]);