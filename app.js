
let draggable_list = document.getElementById("draggable_list");
 
let check = document.getElementById("check");

const richestpeople=[
    "Jeff Bezos",
    "Elon Musk",
    "Bernard Arnault",
    "Bill Gates",
    "Mark Zuckerberg",
    "Warren Buffett",
    "Larry Ellison",
    "Larry Page",
    "Sergey Brin",
    "Mukesh Ambani"
]
const listitems = [];

let dragindex;

function creatlist(){
    [...richestpeople]
    .map((person) =>({value:person,sort:Math.random()}))
    .sort((a,b) => a.sort-b.sort)
    .forEach((person,index) => {
       // creat the list item
       console.log(person)
       const listitem = document.createElement('li');
       
       listitem.setAttribute("deta-index",index);

       listitem.innerHTML = ` 
       <span class="number">${index + 1}</span>
       <div class="draggable" draggable="true">
           <p class="person_name">${person.value}</p>
       </div>
       `
       listitems.push(listitem);
       draggable_list.appendChild(listitem);
       addEventListeners()
    })
}
creatlist();
function addEventListeners(){
    let draggables = document.querySelectorAll('.draggable');
    let dragListItem = document.querySelectorAll('.draggable_list li');
    draggables.forEach(draggable =>{
        draggable.addEventListener('dragstart', dragStart);
    })
    dragListItem.forEach(item =>{
        item.addEventListener('dragover' , dragOver);
        item.addEventListener('drop' , dragDrop);
        item.addEventListener('dragenter' , dragEnter);
        item.addEventListener('dragleave' , dragLeave);
    })

}
function dragEnter(){
    this.classList.add('over');
}
function dragLeave(){
    this.classList.remove('over');
}
function dragDrop(){
    console.log("Event: drag Drop")
}

function dragStart(){
    dragStartIndex = +this.closest('li').getAttribute('deta-index');
}
function dragOver(){
    console.log("Event: drag Over")
}
