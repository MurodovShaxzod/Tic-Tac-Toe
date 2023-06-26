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

    let spam1 = Number(document.getElementById("span1").textContent = 0);
    let spam2 = Number(document.getElementById("span2").textContent = 0);
    let player1 = document.querySelector(".player1");
    let player2 = document.querySelector(".player2");

    if(item.textContent == "X") {
      player1.style.color = "#fff";
      player2.style.color = "#ffffff59";
    }

    if(item.textContent == "O") {
      player1.style.color = "#ffffff59";
      player2.style.color = "#fff";
    }
    if (div1.textContent == "X" && div2.textContent == "X" && div3.textContent == "X" || div4.textContent == "X" && div5.textContent == "X" && div6.textContent == "X" || div7.textContent == "X" && div8.textContent == "X" && div9.textContent == "X" || div1.textContent == "X" && div4.textContent == "X" && div7.textContent == "X" || div2.textContent == "X" && div5.textContent == "X" && div8.textContent == "X" || div3.textContent == "X" && div6.textContent == "X" && div9.textContent == "X" || div3.textContent == "X" && div5.textContent == "X" && div7.textContent == "X" || div1.textContent == "X" && div5.textContent == "X" && div9.textContent == "X") {
      spam1 += 1;
      Number(document.getElementById("span1").textContent = spam1);
    } else if (div1.textContent == "O" && div2.textContent == "O" && div3.textContent == "O" || div4.textContent == "O" && div5.textContent == "O" && div6.textContent == "O" || div7.textContent == "O" && div8.textContent == "O" && div9.textContent == "O" || div1.textContent == "O" && div4.textContent == "O" && div7.textContent == "O" || div2.textContent == "O" && div5.textContent == "O" && div8.textContent == "O" || div3.textContent == "O" && div6.textContent == "O" && div9.textContent == "O" || div3.textContent == "O" && div5.textContent == "O" && div7.textContent == "O" || div1.textContent == "O" && div5.textContent == "O" && div9.textContent == "O") {
      spam2 += 1;
      Number(document.getElementById("span2").textContent = spam2);
    }













    // if(item.textContent == "X") {
    //   player1.classList.add("opacity-1");
    //   player2.classList.remove("opacity-06");
    // } else if(item.textContent == "X") {
    //   player2.classList.add("opacity-1");
    //   player1.classList.remove("opacity-06");
    // }
  })
});



// for (let i = 0; i < gamesContent.length; i++) {
//   gamesContent.addEventListener("click", () => {
//     if(gamesContent.textContent = "") {
//       console.log(5444412005612);
//     }
//   })

// }