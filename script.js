const noteForm = document.querySelector(".note");
const notes = document.querySelector(".notes");
const bodytag = document.querySelector("body");
const notes2 = document.querySelector(".notes2");
const bold = document.getElementById("bold");
const italic = document.getElementById("italic");
const linethru = document.getElementById("linethru");
const textarea = document.getElementById("noteText");
const vio = document.getElementById("vio");
const ind = document.getElementById("ind");
const blu = document.getElementById("blu");
const gre = document.getElementById("gre");
const yel = document.getElementById("yel");
const ora = document.getElementById("ora");
const red = document.getElementById("red");
const whi = document.getElementById("whi");

vio.addEventListener("click", (e) => {
  textarea.className = "violetFocus";
});

ind.addEventListener("click", (e) => {
  console.log(e);
  textarea.className = "indigoFocus";
});

blu.addEventListener("click", (e) => {
  console.log(e);
  textarea.className = "blueFocus";
});

gre.addEventListener("click", (e) => {
  console.log(e);
  textarea.className = "greenFocus";
});

yel.addEventListener("click", (e) => {
  console.log(e);
  textarea.className = "yellowFocus";
});

ora.addEventListener("click", (e) => {
  console.log(e);
  textarea.className = "orangeFocus";
});

red.addEventListener("click", (e) => {
  console.log(e);
  textarea.className = "redFocus";
});

whi.addEventListener("click", (e) => {
  console.log(e);
  textarea.className = "";
});

noteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const noteText2 = noteForm.noteText.value.trim();
  const convert = noteText2
    .replace("bitch", "good woman")
    .replace("fuck", "duck")
    .replace("shit", "poop");
  const color = noteForm.colors.value;

  if (noteText2.length) {
    //generateTemplate(noteText2);
    console.log(convert);
    console.log(color);
    genTemplate(convert, color);
    noteForm.reset();
    textarea.className = "";
  }
});

function submitOnEnter(event) {
  if (event.which === 13 && !event.shiftKey) {
    event.target.form.dispatchEvent(new Event("submit", { cancelable: true }));
    event.preventDefault();
    event.target.value = "";
  }
}
document.getElementById("noteText").addEventListener("keypress", submitOnEnter);
/* const generateTemplate = (noteText2) => {
  const htmltext = `<div class = "container2 noteText">
                     ${noteText2}
                     </div>`;
  notes.innerHTML += htmltext;
}; */

const genTemplate = (note, color) => {
  /*   const htmltext = `<div class = "container2 noteText">
                    ${note}
                    </div>`;
  console.log(htmltext);
  notes2.innerHTML = notes2.innerHTML + htmltext; */
  const col = "white";

  const div = document.createElement("div");
  const text = document.createTextNode(`${note}`);
  div.classList.add("container2");
  div.classList.add("noteText");
  if (color === "violet") {
    div.classList.add("violetColor");
  } else if (color === "indigo") {
    div.classList.add("indigoColor");
  } else if (color === "blue") {
    div.classList.add("blueColor");
  } else if (color === "green") {
    div.classList.add("greenColor");
  } else if (color === "yellow") {
    div.classList.add("yellowColor");
  } else if (color === "orange") {
    div.classList.add("orangeColor");
  } else if (color === "red") {
    div.classList.add("redColor");
  } else {
    div.classList.add("whiteColor");
  }

  if (bold.checked == true) {
    console.log("checked");
    div.classList.add("boldDec");
  }
  if (italic.checked == true) {
    div.classList.add("italicDec");
  }
  if (linethru.checked == true) {
    div.classList.add("lineThruDec");
  }

  div.classList.add("blur");

  console.log(color);
  div.appendChild(text);
  console.log(div);
  notes.append(div);

  window.scrollTo(0, document.body.scrollHeight);
};
