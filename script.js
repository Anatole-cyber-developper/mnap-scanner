function scanNetwork() {

  const loader = document.getElementById("loader");
  const result = document.getElementById("result");

  if (!result) {
    alert("Erreur: result introuvable");
    return;
  }

  // reset affichage
  result.innerHTML = "";

  // afficher loader si existe
  if (loader) loader.classList.remove("hidden");

  setTimeout(() => {

    const networks = [
      { operator: "Orange", type: "4G", signal: -85 },
      { operator: "SFR", type: "5G", signal: -72 },
      { operator: "Bouygues", type: "4G", signal: -95 }
    ];

    let output = "";

    networks.forEach(net => {

      let bars = "";
      let level = 1;

      if (net.signal > -80) level = 4;
      else if (net.signal > -90) level = 3;
      else if (net.signal > -100) level = 2;

      for (let i = 1; i <= 4; i++) {
        bars += `<div class="bar ${i <= level ? "active" : ""}"></div>`;
      }

      output += `
        <div class="card">
          <h3>${net.operator}</h3>
          <p>${net.type}</p>
          <p>${net.signal} dBm</p>
          <div class="signal">${bars}</div>
        </div>
      `;
    });

    // cacher loader si existe
    if (loader) loader.classList.add("hidden");

    result.innerHTML = output;

  }, 2000);
}


function toggleHacker() {
  document.body.classList.toggle("hacker");
}
