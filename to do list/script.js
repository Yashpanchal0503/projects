let content = document.getElementsByClassName("text")[0];
let contanier=document.getElementsByClassName("list-container")[0];
function addtask() {
    
    if(""==content.value){
        alert("fill the task");
    }
    else{
        let el=document.createElement("li");
        el.innerText=content.value;
        contanier.append(el);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        el.appendChild(span);
    }
    content.value='';
}
contanier.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); 
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);



