let cubes = document.querySelectorAll(".main-cube div");
let Player1 = [];
let Player2 = [];
let caracter = "X";
let counter = 0;
let end = false;

cubes.forEach((cube) => {
  cube.addEventListener("click", (a) => {
    if (end) {
      console.log("gotova je igra")
    } else if (!(cube.innerHTML == "")) {
      console.log("vec je neko tu igrao");
    } else {
      cube.innerHTML = caracter;
      if (caracter == "X") {
        Player1.push(cube.getAttribute("class"));
        checkWin(Player1, caracter);
        caracter = "O";
      } else {
        Player2.push(cube.getAttribute("class"));
        checkWin(Player2, caracter);
        caracter = "X";
      }
      counter++;
      if (counter == 9) {
        const winnerText = document.querySelector(".winner");
        const newGame = document.querySelector(".new-game");
        const endGame = document.querySelector(".end-game");

        winnerText.innerHTML = "Tied Game";
        end = true;
        endGame.hidden = false;
        newGame.addEventListener("click", () => {
          location.replace(location.href);
        });
      }
    }
  });
});

function checkWin(array, caracter) {
  const winnerText = document.querySelector(".winner");
  const newGame = document.querySelector(".new-game");
  const endGame = document.querySelector(".end-game");
  if (
    (array.includes("A") && array.includes("B") && array.includes("C")) ||
    (array.includes("A") && array.includes("E") && array.includes("J")) ||
    (array.includes("A") && array.includes("D") && array.includes("G")) ||
    (array.includes("B") && array.includes("E") && array.includes("H")) ||
    (array.includes("C") && array.includes("E") && array.includes("G")) ||
    (array.includes("C") && array.includes("F") && array.includes("J")) ||
    (array.includes("D") && array.includes("E") && array.includes("F")) ||
    (array.includes("F") && array.includes("E") && array.includes("D")) ||
    (array.includes("G") && array.includes("H") && array.includes("J"))
  ) {
    if (caracter == "X") {
      winnerText.innerHTML = "Player 1 Win";
      end = true;
    } else {
      winnerText.innerHTML = "Player 2 Win";
      end = true;
    }
    endGame.hidden = false;
    newGame.addEventListener("click", () => {
      //location.replace(location.href);

      reset(endGame);
    });
  }
}


function reset(endGame) {
  Player1 = [];
  Player2 = [];
  caracter = "X";
  counter = 0;
  end = false;
  cubes = document.querySelectorAll(".main-cube div");

  cubes.forEach((cell) => {
    cell.innerHTML = "";
  });
  endGame.hidden = true;
}
