function scanNetwork() {

  const networks = [
    { operator: "Orange", type: "4G", signal: -85 },
    { operator: "SFR", type: "5G", signal: -72 },
    { operator: "Bouygues", type: "4G", signal: -95 }
  ];

  let output = "";

  networks.forEach(net => {

    let quality = "📶 Mauvais";

    if (net.signal > -80) quality = "🔥 Excellent";
    else if (net.signal > -90) quality = "👍 Bon";

    output += `
      <div class="card">
        <h3>${net.operator}</h3>
        <p>📡 Type: ${net.type}</p>
        <p>📶 Signal: ${net.signal} dBm</p>
        <p>${quality}</p>
      </div>
    `;
  });

  document.getElementById("result").innerHTML = output;
}
