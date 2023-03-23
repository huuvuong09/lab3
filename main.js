// bài 1 lỗi
function reset() {
  document.getElementById("input").value = "";
}
function checkNumber() {
  let x = document.getElementById("input").value;
  if (isNaN(x)) {
    alert("Mã SV Phải Là Số");
    return false;
  }
}
function validateInput() {
  let formElement = document.querySelector(".form");
  let inputElement = formElement.getElementById(".form-input");
  for (i = 0; i < inputElement.length; i++) {
    if (inputElement[i].value == "") {
      inputElement[i].getElementsByClassName(
        ".error-message"
      ).innerText = ` Vui long nhap  ${inputElement[i].id}:`;
    } else {
      inputElement[i].getElementsByClassName(".error-message").innerText = "";
    }
  }
}
function add() {
  validateInput();
  let a = checkNumber();
  let formElement = document.querySelector(".form");
  let errorElement = formElement.querySelectorAll(".error-message");
  let arrErrorElement = [];
  for (let i = 0; i < errorElement.length; i++) {
    arrErrorElement.push(errorElement[i].innerText);
  }
  let checkError = arrErrorElement.every((value) => value === "");
  if (checkError) {
    let name = document.getElementById("input").value;

    let list = localStorage.getItem("list")
      ? JSON.parse(localStorage.getItem("list"))
      : [];
    if (a == false) {
      return;
    } else {
    }
    list.push({
      name: input,
    });
    localStorage.setItem("list", JSON.stringify(list));
    renderData();
    reset();
  }
}
function renderData() {
  let list = localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
  let price = `  <tr>

          <th>Name</th>

      </tr> `;
  list.map((value, index) => {
    tab += `
              <tr>

              <td>${value.name}</td>

              <td>
                      <button id="edit" onclick= edit(${index})>Edit</button>
                      <button id="delete"onclick= del(${index})>Delete</button>
              </td>
              </tr>
              `;
  });
  document.getElementById("table").innerHTML = tab;
  console.log("gdfgfd", tab);
}
function edit(index) {
  let list = localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
  document.getElementById("name").value = list[index].name;

  document.getElementById("save").style.display = "none";
  document.getElementById("update").style.display = "inline-block";
  let a = checkNumber();
  if (a == false) {
    return;
  } else {
  }
}
function change() {
  let list = localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];

  list[index] = {
    name: document.getElementById("input").value,
  };
  localStorage.setItem("list", JSON.stringify(list));

  renderData();

  if (a == false) {
    return;
  } else {
  }
  reset();
}
function del() {
  let list = localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
  if (confirm("chac chan xoa?")) {
    list.splice(index, 1);
  }
  localStorage.setItem("list", JSON.stringify(list));
  renderData();
}
//end bài 1 lỗi
let playerandsc = JSON.parse(localStorage.getItem("playerandsc"));
let ttSC = 0;

function addPlayer() {
  let play = document.getElementById("inputPlayer").value;
  let sc = 0;
  let player = {
    play: play,
    score: sc,
  };
  if (playerandsc == null) {
    playerandsc = [];
  }
  playerandsc.push(player);
  localStorage.setItem("playerandsc", JSON.stringify(playerandsc));
  renderPlayer();
}

function renderPlayer() {
  let result = "";
  for (i = 0; i < playerandsc.length; i++) {
    result += `
    
                <tr  >
                    <td><button onclick="del(${i})" >X</button></td>
                    <i class="fa-sharp fa-solid fa-chess-queen"></i> <td ></td>
                    <td>${playerandsc[i].play}</td>
                    <td><button onclick="downSC(${i})"  class ="up">-</button></td>
                    <td>${playerandsc[i].score}</td>
                    <td><button onclick="upSC(${i})"  class ="up">+</button></td>
                </tr>
                
                `;
  }
  document.getElementById("tableName").innerHTML = result;
  document.getElementById("inputPlayer").value = "";
}
renderPlayer();

function del(idLP) {
  playerandsc.splice(idLP, 1);
  localStorage.setItem("playerandsc", JSON.stringify(playerandsc));
  renderPlayer();
}

function upSC(id) {
  ++playerandsc[id].score;
  localStorage.setItem("playerandsc", JSON.stringify(playerandsc));
  renderPlayer();
  renderHeader();
}

function downSC(a) {
  --playerandsc[a].score;
  localStorage.setItem("playerandsc", JSON.stringify(playerandsc));
  renderPlayer();
  renderHeader();
}
function renderHeader() {
  let a = 0;
  for (j = 0; j < playerandsc.length; j++) {
    a += playerandsc[j].score;
    ttSC = a;
  }
  let headerRender = `
            <div class ="playAndPoint">
                <div>Player:${playerandsc.length}</div>
                <div>Total Points:${ttSC}</div>
            </div>
            <div class="logoRikkei"><h2>Rikkei Scoreboard</h2></div>
            <div class="stopwatch">
                <div>Stopwatch</div>
                <div id="time">0</div>
                <button  id="myForm" onclick="start()">START</button>
                <button id="myForm" onclick="reset()">RESSET</button>
    
            </div>
            `;

  document.getElementById("headrImportant").innerHTML = headerRender;
}
renderHeader();

function start() {
  ctime = 0;
  for (k = 0; k < 100; k++) {
    setTimeout(() => {
      document.getElementById("time").innerHTML = ctime;
    }, 1000);
    ++ctime;
    renderHeader();
  }
}
function reset() {
  clearTimeout(time);
  renderHeader();
}
