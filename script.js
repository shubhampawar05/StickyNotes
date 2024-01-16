let addbtn = document.getElementById("btn");
// let intputTextValue = document.querySelector("textarea").value;



addbtn.addEventListener("click",()=>{
    let intputTextValue = document.querySelector("textarea").value;
    let color = document.querySelector("input").value;
    if(intputTextValue===""){
        alert("Please add something in your notes......");
        return;
    }
    addStickyNotes( intputTextValue, color);
    
   let p =  document.querySelector(".right-r").children[1];
    p.style.display = "none";
   
    document.querySelector("textarea").value="";
    removeNotes();
    console.log(removeNotes);
   let newPara = document.createElement('p');
   newPara.innerText= `Your have not added a notes yet`;
   p.appendChild(newPara);
   
  
})

function addStickyNotes( text , color){
    let div = document.createElement("div");

    div.innerHTML=`<p class="notePara">${text}</p>
    <button class="btn2"> X </button>`;
    let rightContainer = document.querySelector(".notessection");
    // console.log(rightContainer);
    div.classList.add("notesdiv");
    rightContainer.appendChild(div);
    div.style.backgroundColor = color;
    
}

function removeNotes(){
    let btn2 = document.querySelectorAll(".btn2");
    // console.log(mainDiv);


    // first way
    // This is the normal way to remove the sticky notes


    // btn2.forEach((single)=>{
    //     single.addEventListener("click",(e)=>{
    //         e.target.parentElement.remove()
    //     })
    // })

// EVENT DELIGATION

     let notesDivForRemoveNotes = document.querySelector(".notessection");
    //  console.log(notesDivForRemoveNotes);
     notesDivForRemoveNotes.addEventListener("click",(e)=>{
        console.log(e);
        // console.log(e.target.innerText );
        if(e.target.innerHTML === " X "){
            e.target.parentElement.remove();
        }   
     })
     
    

}



// let notesDiv = document.querySelector(".notessection").children
        // console.log(notesDiv);
        // let boxxx =  document.querySelector(".notessection");
        // if(notesDiv.length == 0){
        //     let para = document.createElement('p')
        //     para.innerText = "You have not added yet...."
          
        //     boxxx.appendChild(para);
        // }
