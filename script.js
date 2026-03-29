function scanNetwork() {

  const loader = document.getElementById("loader");
  const result = document.getElementById("result");

  // reset
  result.innerHTML = "";
  loader.classList.remove("hidden");

  // simulation scan (2 secondes)
  setTimeout(() => {

    const networks = [
      { operator: "Orange", type: "4G", signal: -85 },
      { operator: "SFR", type: "5G", signal: -72 },
      { operator: "Bouygues", type: "4G", signal: -95 }
    ];
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
    <p>📡 ${net.type}</p>
    <p>${net.signal} dBm</p>
    <div class="signal">${bars}</div>
  </div>
`;


    });

    loader.classList.add("hidden");
    result.innerHTML = output;

  }, 2000);
}
