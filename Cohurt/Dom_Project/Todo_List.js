const inp = document.querySelector("input");
const btn = document.querySelector("#Add");
const TodoBox = document.querySelector(".Todo_list");

btn.addEventListener("click",()=>{
    // console.log(Hello);
    const value = inp.value;
    if(value.trim()==="")return;

    TodoBox.innerHTML +=`
    <div class="li">
            <h3>${value}</h3>
            <div>
                <button class="btn edit">Edit</button>
                <button class="btn del">Delete</button>
            </div>
        </div>
        `;
        inp.value = "";
});

// for edit and delete 
TodoBox.addEventListener("click",(e) =>{
    //delete karne ke liye
     if (e.target.classList.contains("del")) {
        e.target.closest(".li").remove();
    }


    //edit karne ke liye
    if(e.target.classList.contains("edit")){
        let task = e.target.closest(".li").querySelector("h3");

       let newTask = prompt("Edit Task:", task.textContent);

        if (newTask !== null && newTask.trim() !== "") {
            task.textContent = newTask;
        } 
    }
})


//------------------------------------------------------------