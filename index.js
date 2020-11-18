const infoMaes = [
  {
    id: 1,
    nombre: 'XIOMARA ZAPATA',
    imagen: 'assets/img1.png'
  },
  {
    id: 2,
    nombre: 'JUAN MICELI',
    imagen: 'assets/img2.jpg'
  },
  {
    id: 3,
    nombre: 'JOHN MELO',
    imagen: 'assets/img2.jpg'
  },
  {
    id: 4,
    nombre: 'AMAWTA RELMU',
    imagen: 'assets/img3.jpeg'
  },
  {
    id: 5,
    nombre: 'NIC MOTTA',
    imagen: 'assets/img2.jpg'
  }
]

const containerInfo = document.getElementById('container-info');
containerInfo.innerHTML = `
  ${infoMaes.map(item => {
    return`<div class="info">
      <img class="img-info" src="${item.imagen}"/>
      <p>${item.nombre}</p>
    </div>`
  }).join('')}
`
