fetch('http://localhost:8080/api/convenio/all', {
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
  })
  .catch(error => {
    // Manejo de errores
    console.error('Error:', error);
  });


const button = document.getElementById("button");
const contenedor = document.getElementById("contenedor");
let arrayDatos=[{id:1,nconvenio:"45454",tipo:"Marco",nombre:"convenio 123456",
responsable:"UPeU",fechaini:"14/05/2017",fechater:"14/05/2025"}];

let cont = 1;
var id;
// estado = 1 guardar
// estado = 2 actualizar
var estado = 1;
const inicializar = () =>{
    contenedor.innerHTML='';
    for (const datos of arrayDatos) {
        let tr = document.createElement("tr");
        th = document.createElement("th");
        th.textContent = cont;
        datos.id = cont;
        td1 = document.createElement("td");
        td1.textContent = datos.nconvenio
        td2 = document.createElement("td");
        td2.textContent = datos.tipo
        td3 = document.createElement("td");
        td3.textContent = datos.nombre
        td4 = document.createElement("td");
        td4.textContent = datos.responsable
        td5 = document.createElement("td");
        td5.textContent = datos.fechaini
        td6 = document.createElement("td");
        td6.textContent = datos.fechater
        td7 = document.createElement("td");
        td7.textContent = "vigente"
        td8 = document.createElement("td");
        td8.innerHTML = "<a href='#' onclick=eliminar("+datos.id+")  class='material-symbols-outlined text-danger me-2'>delete</a><a href='#' onclick=editar("+datos.id+") class='material-symbols-outlined text-primary text-decoration-none' data-bs-target='#Modal' data-bs-toggle='modal'>border_color</a>" 
        tr.appendChild(th);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4)
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        tr.appendChild(td8);
        
        contenedor.appendChild(tr);
        
        cont++;
    }
    cont = 1;
}


inicializar();

button.addEventListener("click", ()=>{
    guardar();
})

function guardar(){
    const nconvenio = document.getElementById("nconvenio").value;
    const tipo = document.getElementById("tipo").value;
    const nombre = document.getElementById("nombre").value;
    const responsable = document.getElementById("responsable").value;
    const fechaini = document.getElementById("fechaini").value;
    const fechater = document.getElementById("fechater").value;

    if (estado === 1) {
        
        arrayDatos.push({nconvenio,tipo,nombre,responsable,fechaini,fechater})
        console.log(arrayDatos);

        contenedor.innerHTML="";

        inicializar();
        limpiar();
    }else if (estado ===2){

    for (const datos of arrayDatos) {
        if (datos.id === this.id) {
            datos.nconvenio = nconvenio;
            datos.tipo = tipo;
            datos.nombre = nombre;
            datos.responsable = responsable;
            datos.fechaini = fechaini;
            datos.fechater = fechater;
        }
    }
    inicializar();
    limpiar();
    estado=1;
    }
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

function editar(id){ 
let newArray = arrayDatos.find((item) => item.id === id);
console.log(newArray);
document.getElementById("nconvenio").value  = newArray.nconvenio;
document.getElementById("tipo").value = newArray.tipo;
document.getElementById("nombre").value =newArray.nombre;
document.getElementById("responsable").value =newArray.responsable;
document.getElementById("fechaini").value =newArray.fechaini;
document.getElementById("fechater").value =newArray.fechater;
estado = 2;
this.id=id;
}

function limpiar(){
    const nconvenio = document.getElementById("nconvenio").value="";
    const tipo = document.getElementById("tipo").value="";
    const nombre = document.getElementById("nombre").value="";
    const responsable = document.getElementById("responsable").value="";
    const fechaini = document.getElementById("fechaini").value="";
    const fechater = document.getElementById("fechater").value="";
}