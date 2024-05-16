const input = document.querySelector("#input");
const btn = document.querySelector(".btn");
const list = document.querySelector(".todo-list-items")

btn.addEventListener('click',()=>{
    const list_box = document.createElement('div');
    list_box.classList.add("list_box");
    const p = document.createElement('p');
    p.classList.add("todo-text");
    const done = document.createElement('button');
    done.textContent = "Done";
    done.classList.add("done");
    const todoText = input.value;
    if(todoText.length && todoText.length<=50){
        p.innerHTML = todoText;
        list_box.appendChild(p);
        list_box.appendChild(done);
        input.value = "";
    }
    list.appendChild(list_box);
    list_box.onclick = ()=>{
        p.classList.toggle("line-through");
    }
    done.addEventListener('click',()=>{
        list.removeChild(list_box);
    })
})

