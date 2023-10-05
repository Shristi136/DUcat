const addbutton=document.querySelector("#add");

// update user's data on ls(local storage)
const updatalocalstorage=()=>{
    const userdata= document.querySelectorAll("textarea");
    const notes=[];
    console.log(userdata);
    userdata.forEach((note)=>{
        return notes.push(note.value);
    })
    console.log(notes);

    localStorage.setItem("notes", JSON.stringify(notes));
}

const addNewNote =(text="")=>{
    const  note =document.createElement("div");
    note.classList.add("note");

    const htmldata=`<div class="operation">
    <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
    <button class="delete"><i class="fa-solid fa-trash"></i></button>
</div>
<div class="main ${text ? "" : "hidden"}"></div>
<textarea class="${text ? "hidden" : ""}"></textarea>`;

note.insertAdjacentHTML("afterbegin",htmldata);
console.log(note);

// getting reference from note
const editbutton =note.querySelector(".edit");
const delbutton =note.querySelector(".delete");
const maindiv =note.querySelector(".main");
const textarea =note.querySelector("textarea");

// delete functionality
delbutton.addEventListener("click",()=>{
    note.remove();
    updatalocalstorage();
});

textarea.value=text;
maindiv.innerHTML=text;

// toggle on editbutton
editbutton.addEventListener("click", ()=>{
    maindiv.classList.toggle("hidden");
    textarea.classList.toggle("hidden");
})

// user text save with textarea
textarea.addEventListener("change",(event)=>{
    const value =event.target.value;
    // console.log(value);
    maindiv.innerHTML=value;

    updatalocalstorage();
})


document.body.appendChild(note);
}

// getting data back from local Storage
const notes  = JSON.parse(localStorage.getItem("notes"));
if (notes){
    notes.forEach((note)=> {addNewNote(note)});
}


addbutton.addEventListener("click",()=>{
    addNewNote()
})
