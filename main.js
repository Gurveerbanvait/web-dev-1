// Message of the day webv dev 1 assignment

// HTML Element for Output
let outputEl = document.getElementById("output");

// HTML Element For Input

// Menu Button
document.getElementById("go-btn").addEventListener("click", goBtnClicked);

function goBtnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu").value;

  // Process Selection
  if (selection === "winter-in") {
    Winter();
  } else if (selection === "summer-in") {
    Summer();
  } else if (selection === "fall-in") {
    Fall();
  } else if (selection === "spring-in") {
    Spring();
  }
}
function Winter() {
  outputEl.innerHTML = "hello";
  style.backgroundImage = url("img/winter.jpg");
}
