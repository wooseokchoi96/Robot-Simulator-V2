document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)

  const movesContainer = document.querySelector("#moves-container");
  const moveButton = document.querySelector("#move-button");

  document.addEventListener("keydown", function(event) {
    if(event.key === "ArrowLeft") {
      movesContainer.insertAdjacentHTML("beforeend", `<li>left</li>`);
    } else if(event.key === "ArrowRight") {
      movesContainer.insertAdjacentHTML("beforeend", `<li>right</li>`);
    } else if(event.key === "ArrowUp") {
      movesContainer.insertAdjacentHTML("beforeend", `<li>up</li>`);
    } else if(event.key === "ArrowDown") {
      movesContainer.insertAdjacentHTML("beforeend", `<li>down</li>`);
    } else if(event.key === "Backspace") {
      let lis = movesContainer.querySelectorAll("li");
      if(lis.length){lis[lis.length - 1].remove()};
    }
  });

  document.addEventListener("click", function(event) {
    if(event.target === moveButton) {
      let timer = setInterval(function() {
        let lis = movesContainer.querySelectorAll("li");
        if(lis.length){
          move(lis[0].innerText);
          lis[0].remove();
        } else{
          clearInterval(timer);
        }
      }, 500);
    }
  });


}) // end document event listener
