document
  .getElementsByClassName("project-1")[0]
  .addEventListener("click", (event) => {
    const url = "https://github.com/AnkushRajput11/Zomato";
    window.open(url, "_blank");
    // document.location.assign("https://github.com/AnkushRajput11/Zomato");
  });
document
  .getElementsByClassName("project-2")[0]
  .addEventListener("click", (event) => {
    const url = "https://github.com/AnkushRajput11/KrushiMart";
    window.open(url, "_blank");
    // document.location.assign("https://github.com/AnkushRajput11/KrushiMart");
  });
document
  .getElementsByClassName("project-3")[0]
  .addEventListener("click", (event) => {
    const url = "https://github.com/AnkushRajput11/To-Do-List";
    window.open(url, "_blank");
    // document.location.assign("https://github.com/AnkushRajput11/To-Do-List");
  });

//////////////////////////////////////////////////////////////

let trigger = 0;
function Chatbox() {
  if (trigger % 2 == 0) {
    document.getElementById("chatbox").style.cssText = "display:block;";
    // document.getElementById("chatbox").style.transitionDuration="2s";

    trigger = trigger + 1;
  } else {
    document.getElementById("chatbox").style.display = "none";
    trigger = trigger + 1;
  }
}

function changeContent(value) {
  let content = document.getElementById("skill-content");
  if (value == "java") {
    content.innerHTML = "JAVA skill";
  } else if (value == "sql") {
    content.innerHTML = "sql skill";
  } else if (value == "webtech") {
    content.innerHTML = "wetech skill";
  } else if (value == "webser") {
    content.innerHTML = "webser skill";
  } else if (value == "testing") {
    content.innerHTML = "testing skill";
  }

  let arr = ["java", "sql", "webtech", "webser", "testing"];

  for (let x of arr) {
    if (x == value) {
      let effect1 = document.getElementById(value);
      effect1.style.backgroundColor = "#1a1919";
      effect1.style.border = "2px solid slateblue";
    } else {
      let effect2 = document.getElementById(x);
      effect2.style.backgroundColor = "#222424";
      effect2.style.border = "none";
    }
  }
}
function changeColor(value) {
  let arr = ["h", "a", "s", "p", "c"];
  for (let x of arr) {
    if (x == value) {
      let effect1 = document.getElementById(value);
      effect1.style.color = "slateblue";
    } else {
      let effect2 = document.getElementById(x);
      effect2.style.color = "white";
    }
  }
}

function resetMenuColor() {
  let arr = ["h", "a", "s", "p", "c"];
  for (let x of arr) {
    let effect2 = document.getElementById(x);
    effect2.style.color = "white";
  }
}
