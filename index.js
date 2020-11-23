const INFO_MAES = [
  {
    id: 0,
    nombre: `XIOMARA ZAPATA`,
    imagen: `assets/xiomara/img1.png`, 
    video: `video`,
    titulo: `Titulo de la obra Xio`,
    texto: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  },
  {
    id: 1,
    nombre: 'JUAN MICELI',
    imagen: 'assets/img2.jpg',
    video: 'video',
    titulo: 'Titulo de la obra Juan'
  },
  {
    id: 2,
    nombre: 'JOHN MELO',
    imagen: 'assets/img2.jpg',
    video: 'video',
    titulo: 'Titulo de la obra John'
  },
  {
    id: 3,
    nombre: 'AMAWTA RELMU',
    imagen: 'assets/img3.jpeg',
    video: 'video',
    titulo: 'Titulo de la obra Amawta'
  },
  {
    id: 4,
    nombre: 'NIC MOTTA',
    imagen: 'assets/img2.jpg',
    video: 'video',
    titulo: 'Titulo de la obra Nic'
  }
];

const CONTAINER_INFO = document.getElementById('container');

function renderContainer(element) {
  CONTAINER_INFO.children[0] && CONTAINER_INFO.children[0].remove();
  const infoLocal = window.localStorage.getItem('element');

  if(Array.isArray(element) && !infoLocal) {
    index_html = `
      <div class="container">
        <h1>MORADA MAE</h1>
        <p>MAESTRÍA EN ARTES ELECTRÓNICAS / UNTREF</p>
        <p>cohorte 2020</p>
        <div class="img-fondo">
          <img src="./assets/grafico_fondo.png" />
          <div id="container-info" class="container-info">
            ${
              INFO_MAES.map(item => {
                return`
                  <div onclick="redirect('${item.id}')" class="info">
                    <img class="img-info" src="${item.imagen}"/>
                    <p>${item.nombre}</p>
                  </div>
                `
              }).join('')
            }
          </div>
          <a href="./texto_curatorial.html" class="link-texto-curatorial">TEXTO CURATORIAL</a>
        </div>
      </div>
    `;
  } else {
    let elementInfo =  '';
    if(Array.isArray(element) && infoLocal) {
      elementInfo =  JSON.parse(infoLocal);
    } else {
      elementInfo = element;
    }
    index_html = `
      <div class='container-detalle'>
        <button class="boton-volver-detalle" onclick='volver()'>volver</button>
        <div class="titulo-info">
          <img src="./assets/pista_der.png" />
          <div class="textos-info">
            <h1>${elementInfo.nombre}</h1>
            <h3>${elementInfo.titulo}</h3>
          </div>
        </div>
        <div class="info-obra">
          <div class="imagen" style="background-image:url(${elementInfo.imagen})"></div>
          <p>${elementInfo.texto}</p>
        </div>
      </div>
    `;
  }
  return CONTAINER_INFO.innerHTML += index_html;
}

function redirect(item) {
  window.localStorage.setItem('element', JSON.stringify(INFO_MAES[item]));
  renderContainer(INFO_MAES[item]);
}

function volver() {
  window.localStorage.clear();
  renderContainer(INFO_MAES);
}

renderContainer(INFO_MAES);
