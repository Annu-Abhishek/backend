const addBtn= document.querySelector(".add-btn");
const modalCont = document.querySelector(".modal-cont");
const allPriorityColors = document.querySelectorAll(".priority-color");

let colors =['lightPink', 'lightgreen', 'lightblue','black'];
let modalPriorityColor = colors[colors.length-1];   //black bydefault select kiya
let textAreaCont = document.querySelector(".textArea-cont");
const mainCont = document.querySelector(".main-cont");
let ticketsArr= [];
let toolBoxColors = document.querySelectorAll(".color");
let removeBtn = document.querySelector(".remove-btn");

 let isModalPresent = false;
 addBtn.addEventListener('click', function(){
     if(!isModalPresent){
         modalCont.style.display ="flex";    //modal add ho gya//
         
     }else{
         modalCont.style.display="none";   
         
     }
     isModalPresent = !isModalPresent;           //toggling effect....agr true h to false kr do and vice-versa//
 });

 

 allPriorityColors.forEach(function(colorElement){
     colorElement.addEventListener("click", function (){
         allPriorityColors.forEach(function(priorityColorElem){
             priorityColorElem.classList.remove("active");
         });
         colorElement.classList.add("active");
         modalPriorityColor = colorElement.classList[0];
     });
 });

 modalCont.addEventListener("keydown", function(e){
     let key =e.key;
     if (key == "Shift"){
         console.log(modalPriorityColor);
         console.log(textAreaCont.value);
         createTicket(modalPriorityColor, textAreaCont.value);
         modalCont.style.display = "none";
         isModalPresent = false;
         textAreaCont.value= "";
         allPriorityColors.forEach(function (colorElem){
             colorElem.classList.remove("active")
         });
     }
 });

 function createTicket(ticketColor, data){                  /* JS ki help s HTML likha ja rha h*/
     let ticketCont = document.createElement("div");     
     ticketCont.setAttribute("class", "ticket-cont");
     ticketCont.innerHTML = `
     <div class = "ticket-color ${ticketColor}"></div>
     <div class = "ticket-id"></div>
     <div class = "task-area">${data}</div>
     `;
     mainCont.appendChild(ticketCont);

 }


