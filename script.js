function scanNetwork() {
  console.log("Scan déclenché");

  const result = document.getElementById("result");

  if (!result) {
    console.log("DIV result introuvable !");
    return;
  }

  result.innerHTML = "<p>Test OK</p>";
}
