const input = document.getElementById("input");
const taskList = document.getElementById("taskList");

function action(){

    const task = input.value.trim();

    if(task===""){
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");

    const text = document.createElement("span");
    text.innerText = task;

    const btns = document.createElement("div");
    btns.className="buttons";

    const complete = document.createElement("button");
    complete.innerText="✔";
    complete.className="complete";

    complete.onclick=function(){
        text.classList.toggle("completed");
    };

    const del = document.createElement("button");
    del.innerText="Delete";
    del.className="delete";

    del.onclick=function(){
        li.remove();
    };

    btns.appendChild(complete);
    btns.appendChild(del);

    li.appendChild(text);
    li.appendChild(btns);

    taskList.appendChild(li);

    input.value="";
    input.focus();
}
