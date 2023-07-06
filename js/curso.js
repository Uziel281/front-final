const button = document.getElementById("botoncu");
const contenedor = document.getElementById("tabla");

let cont = 1;
var id;
var datos;

var estado = 1;
const inicializar = () =>{
    fetch('http://localhost:8080/api/curso/all', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Otras cabeceras si es necesario
        }
      })
        .then(response => response.json())
        .then(data => {
          // Aquí puedes trabajar con los datos obtenidos
          console.log(data);
          datos=data;
          contenedor.innerHTML='';
          for (const datos of data) {
              let tr = document.createElement("tr");
              th = document.createElement("th");
              th.textContent = cont;
              td1 = document.createElement("td");
              td1.textContent = datos.nombre
              td2 = document.createElement("td");
              td2.textContent = datos.docente
              td3 = document.createElement("td");
              td3.innerHTML = "<a href='#' onclick=eliminar("+datos.id_curso+")  class='material-symbols-outlined text-danger me-2'>delete</a><a href='#' onclick=editar("+datos.id_curso+") class='material-symbols-outlined text-primary text-decoration-none' data-bs-target='#Modal' data-bs-toggle='modal'>border_color</a>" 
              tr.appendChild(th);
              tr.appendChild(td1);
              tr.appendChild(td2);
              tr.appendChild(td3);
      
              
              contenedor.appendChild(tr);
              
              cont++;
          }
          cont = 1;
        })
        .catch(error => {
          // Manejo de errores
          console.error('Error:', error);
        });
}


inicializar();

button.addEventListener("click", ()=>{
    guardar();
})

async function guardar(){
    const data = {
        nombre: document.getElementById("curso").value,
        docente:document.getElementById("profesor").value
      };
      
      await fetch('http://localhost:8080/api/curso/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (response.ok) {
          console.log('Datos insertados correctamente');
        } else {
          console.error('Error al insertar los datos');
        }
      })
      .catch(error => {
        console.error('Error en la solicitud:', error);
      });

      inicializar();
}

function borrarDatos(){
    let arrayDelete = Array.from(contenedor.children);
    console.log(arrayDelete)
    for (const iterator of arrayDelete) {
        console.log(iterator)
        contenedor.removeChild(iterator)
        console.log(contenedor)
    }
    console.log(contenedor)
}


function eliminar(id){
console.log(typeof id)
let newArray = arrayDatos.filter((item)=> item.id !== id );
arrayDatos = newArray;
console.log(arrayDatos)
contenedor.innerHTML = '';
inicializar();
}

// function editar(id){ 
// let newArray = arrayDatos.find((item) => item.id === id);
// console.log(newArray);
// document.getElementById("curso").value  = newArray.curso;
// document.getElementById("profesor").value = newArray.profesor;

// estado = 2;
// this.id=id;
// }

function limpiar(){
    const curso = document.getElementById("curso").value="";
    const profesor = document.getElementById("profesor").value="";
}