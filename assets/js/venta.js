const propiedades_ventas = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "Prestige Suburb, CA 45678",
    habitaciones: 4,
    banos: 4,
    costo: 5000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    banos: 1,
    costo: 1200,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      " Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    banos: 2,
    costo: 4500,
    smoke: false,
    pets: true,
  },
];

const cardContainer = document.querySelector("#cardVenta"); 
let allCards = "";

for (let index = 0; index < propiedades_ventas.length; index++) {
  allCards += `
    <div class="cardEstilo"> 
    <img class="card-imgV" src="${propiedades_ventas[index].src}"> </img> 
    <h5> ${propiedades_ventas[index].nombre} </h5> 
    <p> ${propiedades_ventas[index].descripcion} </p>
    <p> <i class="fas fa-map-marker-alt"></i> ${
      propiedades_ventas[index].ubicacion
    } </p> 
    <p> <i class="fas fa-bed"></i> ${
      propiedades_ventas[index].habitaciones
    } Habitaciones  | <i class="fas fa-bath"></i> ${
    propiedades_ventas[index].banos
    } Baños </p>
    <p> <i class="fas fa-dollar-sign"></i>  ${
      propiedades_ventas[index].costo
    } </p>
    <p>  ${
      propiedades_ventas[index].smoke == true? ' <i class="fas fa-smoking"></i><span style="color:green"> Permitido fumar </span>'
        : '<i class="fas fa-smoking-ban"></i><span style="color:red">No se permite fumar</span>'
    }</p>${propiedades_ventas[index].pets == true? '<i class="fas fa-paw"></i><span style="color:green"> Mascotas Permitidas</span>' : '<p> <i class="fa-solid fa-ban"></i><span style="color:red">No se permiten mascotas</span>'
    }</p>
    </div>`;
}
cardContainer.innerHTML = allCards;
