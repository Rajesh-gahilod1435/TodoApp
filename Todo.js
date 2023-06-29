// let Todos=[addTask,addItem,lastFun,];
// console.log(addItem);


function addTask() {
    document.getElementById("Task").style.visibility=" visible";
    document.getElementById("heder").style.filter="blur(8px)";
    document.getElementById("addItem").style.filter="blur(8px)";
}


function addItem() {
    document.getElementById("Task").style.visibility=" hidden";
let todoContenair=document.getElementById('addItem');
let creatDiv=document.createElement('div');
creatDiv.setAttribute('class',"todoItem");
creatDiv.setAttribute('id',"creatDiv");
todoContenair.appendChild(creatDiv);
creatDiv.style.display="block";
let header=document.createElement('h2');
header.classList.add("heading");
creatDiv.appendChild(header);
 let AddvisitedName=document.getElementById("visitedName").value;
 header.innerHTML=AddvisitedName;
let Itembtn=document.createElement('img'); 
Itembtn.src ="plus-circle-fill.svg";
Itembtn.setAttribute("id","Box");

Itembtn.classList.add("ItembtnClass");
Itembtn.setAttribute("id","addIDItembtn");
Itembtn.setAttribute("class","addIDItembtn");

creatDiv.appendChild(Itembtn);
let deletItem = document.createElement('img');
deletItem.src ="trash.svg";
deletItem.setAttribute("id","deletItembtn");
deletItem.setAttribute("id","deletItemId");
creatDiv.appendChild(deletItem);
document.getElementById("heder").style.filter="blur(0px)";
document.getElementById("addItem").style.filter="blur(0px)";


let Even=document.querySelector("img");
Even.addEventListener("click", function() {
    let Box=document.getElementById("BOX").style.display="block";
    document.getElementById("BOX").style.display="block";
    console.log(Box,"221");
})
}
let lastadbtn=document.getElementById("lastadbtn");
function lastFun() {
    let creatDiv=document.getElementById("creatDiv");
    let Box=document.getElementById("BOX");
    Box.style.display="none";
    let ul=document.createElement('ul');
    let li=document.createElement('li');
    // li.classList.add('ltLi');
    
    li.setAttribute('id',"ltLi");
    li.style.textDecoration=" line-through";
    console.log(ul);
    creatDiv.appendChild(ul);
    ul.appendChild(li);
    let lastInpu=document.getElementById("lastInpu").value;
    li.innerHTML=lastInpu;
}
// let de= document.getElementById("deletItembtn")
// de.addEventListener('click',()=>{
//     console.log("Delet");
// });