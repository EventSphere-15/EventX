const vendorData = [
  {
    name: "Royal Wedding Planners",
    event: "Wedding",
    city: "Lucknow",
    price: "₹3L+"
  },
  {
    name: "Elite Corporate Events",
    event: "Corporate",
    city: "Delhi",
    price: "₹5L+"
  }
];

function renderVendors(list) {
  const container = document.getElementById("vendors");
  container.innerHTML = "";

  list.forEach(v => {
    container.innerHTML += `
      <div class="card">
        <h3>${v.name}</h3>
        <p>${v.event} • ${v.city}</p>
        <p>Starting at ${v.price}</p>
      </div>
    `;
  });
}

function filterVendors() {
  const eventType = document.getElementById("eventType").value;
  const city = document.getElementById("city").value;

  const filtered = vendorData.filter(v =>
    (!eventType || v.event === eventType) &&
    (!city || v.city === city)
  );

  renderVendors(filtered);
}

renderVendors(vendorData);
