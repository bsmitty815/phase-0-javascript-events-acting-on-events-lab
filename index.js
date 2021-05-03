// Your code here
const dodger = document.getElementById("dodger"); 

/*
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    } 
  } 

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  }); 

  */

 /* function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    const rightNumbers = dodger.style.right.replace("px", "");
    const right = parseInt(rightNumbers, 1000);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    } else if (right < 0) {
        dodger.style.right = `${right + 1}px`;
  } 

}
*/

    function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left >= 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
 

  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    } 
  } 

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
        moveDodgerRight();
      }
    });  
  
/*
  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } 
  }); 

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  }); 
*/
/*
  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
        moveDodgerRight();
      }
    });  
    */