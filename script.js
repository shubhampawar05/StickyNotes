let addbtn = document.getElementById("btn");
let notesDivForRemoveNotes = document.querySelector(".notessection");
let p = document.querySelector(".right-r").children[1];

addbtn.addEventListener("click", () => {
  let intputTextValue = document.querySelector("textarea").value;
  let color = document.querySelector("input").value;
  if (intputTextValue === "") {
    alert("Please add something in your notes......");
    return;
  }
  addStickyNotes(intputTextValue, color);

  p.style.display = "none";
  document.querySelector("textarea").value = "";
});

function addStickyNotes(text, color) {
  let div = document.createElement("div");

  div.innerHTML = `<p class="notePara">${text}</p>
    <button class="btn2"> X </button>`;
  let rightContainer = document.querySelector(".notessection");
  // console.log(rightContainer);
  div.classList.add("notesdiv");
  rightContainer.appendChild(div);
  div.style.backgroundColor = color;
  let btn2 = document.querySelectorAll(".btn2");
  removeNotes(btn2);
}

function removeNotes(btn2) {
  btn2.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (e.target.innerHTML === " X ") {
        e.target.parentElement.remove();
        displayPara();
      }
    });
  });
}
function displayPara() {
  let Addingpara = document.querySelector(".notessection").children;
  if (Addingpara.length == 0) {
    p.style.display = "block";
  }
}

