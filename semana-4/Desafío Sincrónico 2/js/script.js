const DATA = [
  { name: "Juan", lastname: "Perez" },
  { name: "Roberto", lastname: "Carlos" },
  { name: "Fulano", lastname: "Detal" },
  { name: "Gian", lastname: "Laic" },
  { name: "Fernando", lastname: "Saavedra" },
];

// Escribe el código necesario aquí

let container = document.getElementById('container')

for (let i = 0; i < DATA.length; i++) {
  let parrafo = document.createElement('p')
  parrafo.innerHTML = `${DATA[i].name} ${DATA[i].lastname}`
  container.appendChild(parrafo)
}

//
