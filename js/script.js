let gamesContent = document.querySelectorAll('#div');
let a = 1;
let div1 = document.querySelector(".div1");
let div2 = document.querySelector(".div2");
let div3 = document.querySelector(".div3");
let div4 = document.querySelector(".div4");
let div5 = document.querySelector(".div5");
let div6 = document.querySelector(".div6");
let div7 = document.querySelector(".div7");
let div8 = document.querySelector(".div8");
let div9 = document.querySelector(".div9");
gamesContent.forEach(item => {
  item.addEventListener("click", () => {
    if (item.textContent == "") {
      item.textContent = a === 1 ? ('X') : ("O");
      a = a === 1 ? 2 : 1;
    }

    let spam1 = Number(document.getElementById("span1").textContent);
    let spam2 = Number(document.getElementById("span2").textContent);
    let spam3 = Number(document.getElementById("span3").textContent);
    let player1 = document.querySelector(".player1");
    let player2 = document.querySelector(".player2");
    let tie = document.querySelector(".tie");

    if (item.textContent == "X") {
      player1.style.color = "#ffffff59";
      tie.style.color = "#ffffff59";
      player2.style.color = "#fff";
    }

    if (item.textContent == "O") {
      player1.style.color = "#fff";
      player2.style.color = "#ffffff59";
      tie.style.color = "#ffffff59";
    }
    if (div1.textContent == "X" && div2.textContent == "X" && div3.textContent == "X" || div4.textContent == "X" && div5.textContent == "X" && div6.textContent == "X" || div7.textContent == "X" && div8.textContent == "X" && div9.textContent == "X" || div1.textContent == "X" && div4.textContent == "X" && div7.textContent == "X" || div2.textContent == "X" && div5.textContent == "X" && div8.textContent == "X" || div3.textContent == "X" && div6.textContent == "X" && div9.textContent == "X" || div3.textContent == "X" && div5.textContent == "X" && div7.textContent == "X" || div1.textContent == "X" && div5.textContent == "X" && div9.textContent == "X") {
      spam1 += 1;
      document.getElementById("span1").textContent = spam1;
      player1.style.color = "#fff";
      tie.style.color = "#fff";
      player2.style.color = "#fff";
      timeFunc()

    } else if (div1.textContent == "O" && div2.textContent == "O" && div3.textContent == "O" || div4.textContent == "O" && div5.textContent == "O" && div6.textContent == "O" || div7.textContent == "O" && div8.textContent == "O" && div9.textContent == "O" || div1.textContent == "O" && div4.textContent == "O" && div7.textContent == "O" || div2.textContent == "O" && div5.textContent == "O" && div8.textContent == "O" || div3.textContent == "O" && div6.textContent == "O" && div9.textContent == "O" || div3.textContent == "O" && div5.textContent == "O" && div7.textContent == "O" || div1.textContent == "O" && div5.textContent == "O" && div9.textContent == "O") {
      spam2 += 1;
      document.getElementById("span2").textContent = spam2;
      player1.style.color = "#fff";
      tie.style.color = "#fff";
      player2.style.color = "#fff";
      timeFunc()
    }

    let isDraw = true;
    for (let i = 0; i < gamesContent.length; i++) {
      if (gamesContent[i].textContent === '') {
        isDraw = false;
        break;
      }
    }

    if (isDraw) {
      spam3 += 1;
      document.getElementById("span3").textContent = spam3;
      timeFunc();
      player1.style.color = "#fff";
      tie.style.color = "#fff";
      player2.style.color = "#fff";
    }

  })
});

function timeFunc() {
  div1.style.color = "#ffffff59";
  div2.style.color = "#ffffff59";
  div3.style.color = "#ffffff59";
  div4.style.color = "#ffffff59";
  div5.style.color = "#ffffff59";
  div6.style.color = "#ffffff59";
  div7.style.color = "#ffffff59";
  div8.style.color = "#ffffff59";
  div9.style.color = "#ffffff59";

  setTimeout(function () {

    div1.style.color = "#fff";
    div2.style.color = "#fff";
    div3.style.color = "#fff";
    div4.style.color = "#fff";
    div5.style.color = "#fff";
    div6.style.color = "#fff";
    div7.style.color = "#fff";
    div8.style.color = "#fff";
    div9.style.color = "#fff";
  }, 500)

  setTimeout(function () {

    div1.style.color = "#ffffff59";
    div2.style.color = "#ffffff59";
    div3.style.color = "#ffffff59";
    div4.style.color = "#ffffff59";
    div5.style.color = "#ffffff59";
    div6.style.color = "#ffffff59";
    div7.style.color = "#ffffff59";
    div8.style.color = "#ffffff59";
    div9.style.color = "#ffffff59";
  }, 1000)

  setTimeout(function () {

    div1.style.color = "#fff";
    div2.style.color = "#fff";
    div3.style.color = "#fff";
    div4.style.color = "#fff";
    div5.style.color = "#fff";
    div6.style.color = "#fff";
    div7.style.color = "#fff";
    div8.style.color = "#fff";
    div9.style.color = "#fff";
  }, 1500)
  setTimeout(function () {
    div1.textContent = "";
    div2.textContent = "";
    div3.textContent = "";
    div4.textContent = "";
    div5.textContent = "";
    div6.textContent = "";
    div7.textContent = "";
    div8.textContent = "";
    div9.textContent = "";

  }, 2000)
} 