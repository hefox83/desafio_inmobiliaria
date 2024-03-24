const propiedades_alquileres = [
    {
      nombre: "Apartamento en el centro de la ciudad",
      src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
      descripcion:
        "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
      ubicacion: "123 Main Street, Anytown, CA 91234",
      habitaciones: 2,
      banos: 2,
      costo: 2000,
      smoke: false,
      pets: true,
    },
    {
      nombre: "Apartamento luminoso con vista al mar",
      src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      descripcion:
        "Este hermoso apartamento ofrece una vista impresionante al mar",
      ubicacion: "123 Main Street, Anytown, CA 91234",
      habitaciones: 3,
      banos: 1,
      costo: 3200,
      smoke: true,
      pets: true,
    },
    {
      nombre: "Condominio moderno en zona residencial",
      src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
      descripcion:
        "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
      ubicacion: "7456 Ocean Avenue, Seaside Town, CA 56789",
      habitaciones: 3,
      banos: 2,
      costo: 4000,
      smoke: false,
      pets: false,
    },
  ];

const cardContainerA = document.querySelector("#cardAlquiler");
let allCardsA = "";

for (let index1 = 0; index1 < propiedades_alquileres.length; index1++) {
  allCardsA += `
    <div class="cardEstilo"> 
   <img class="card-imgV" src="${propiedades_alquileres[index1].src}"> </img> 
    <h5> ${propiedades_alquileres[index1].nombre} </h5> 
    <p> ${propiedades_alquileres[index1].descripcion} </p>
    <p> <i class="fas fa-map-marker-alt"></i> ${
      propiedades_alquileres[index1].ubicacion
    } </p> 
    <p> <i class="fas fa-bed"></i> ${
      propiedades_alquileres[index1].habitaciones
    } Habitaciones  | <i class="fas fa-bath"></i> ${
    propiedades_alquileres[index1].banos
  } Baños </p>
    <p> <i class="fas fa-dollar-sign"></i>  ${
      propiedades_alquileres[index1].costo
    } </p>
    <p>${propiedades_alquileres[index1].smoke== true? ' <i class="fas fa-smoking"></i><span style="color:green"> Permitido fumar </span>'
      : '<i class="fas fa-smoking-ban"></i><span style="color:red">No se permite fumar</span>'
    }</p>
    <p>${propiedades_alquileres[index1].pets == true? '<i class="fas fa-paw"></i><span style="color:green"> Mascotas Permitidas</span>' : '<p> <i class="fa-solid fa-ban"></i><span style="color:red">No se permiten mascotas</span>'
    }</p>
    </div>`;

}

cardContainerA.innerHTML = allCardsA;