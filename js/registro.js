const button = document.getElementById("button");
const contenedor = document.getElementById("contenedor");
let arrayDatos=[{id:1,nombre:"Juan",apellido:"Ramos Soriano",codigo:"202210741",
rol:"Lider",email:"juan.ramos@upeu.edu.pe",telefono:"974251478"}];
// 
//.push({},......)
// Funcion flecha 
let cont = 1;
var id;
// estado = 1 guardar
// estado = 2 actualizar
var estado = 1;
const inicializar = () =>{
    contenedor.innerHTML='';
    //contenedor.remove();
    //contenedor.removeChild()
    for (const datos of arrayDatos) {
        let tr = document.createElement("tr");
        th = document.createElement("th");
        th.textContent = cont;
        datos.id = cont;
        td1 = document.createElement("td");
        td1.textContent = datos.nombre
        td2 = document.createElement("td");
        td2.textContent = datos.apellido
        td3 = document.createElement("td");
        td3.textContent = datos.codigo
        //td4 = document.createElement("td");
        //td4.textContent = datos.facultad
        //td5 = document.createElement("td");
        //td5.textContent = datos.escuela
        //td6 = document.createElement("td");
        //td6.textContent = datos.ciclo
        //td7 = document.createElement("td");
        //td7.textContent = datos.grupo
        td4 = document.createElement("td");
        td4.textContent = datos.rol
        td5 = document.createElement("td");
        td5.textContent = datos.email
        td6 = document.createElement("td");
        td6.textContent = datos.telefono
        td7 = document.createElement("td");
        td7.innerHTML = "<a href='#' onclick=eliminar("+datos.id+")  class='material-symbols-outlined text-danger me-2'>delete</a><a href='#' onclick=editar("+datos.id+") class='material-symbols-outlined text-primary text-decoration-none' data-bs-target='#Modal1' data-bs-toggle='modal'>border_color</a>" 
        tr.appendChild(th);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4)
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        //tr.appendChild(td8);
        //tr.appendChild(td9);
        //tr.appendChild(td10);
        //tr.appendChild(td11);

// .APPENDCHILD() AGREGA ELEMENTOS DE FORMA ORDENADA DENTRO DEL
//ELEMENTO SELECCIONADO
        contenedor.appendChild(tr);
        //console.log(datos);
        cont++;
    }
    cont = 1;
}


inicializar();

//funcion anonima
button.addEventListener("click", ()=>{
    guardar();
})

//RETO DEL DIA 
// Funcion tradicional
function guardar(){
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const codigo = document.getElementById("codigo").value;
    //const facultad = document.getElementById("facultad").value;
    //const escuela = document.getElementById("escuela").value;
    //const ciclo = document.getElementById("ciclo").value;
    //const grupo = document.getElementById("grupo").value;
    const rol = document.getElementById("rol").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;

    if (estado === 1) {
        //1. agregar 
        
        arrayDatos.push({nombre,apellido,codigo,rol,email,telefono})
        console.log(arrayDatos);
        //Pista para borrar todo lo que hay en el contenedor
        // .REMOVE() = VUELA TODA LA ETIQUETA
        // opcion 1
        contenedor.innerHTML="";
        //borrarDatos();
        inicializar();
        limpiar();
        // 1 LINEA DE CÓDIGO PARA QUE SE CARGUE LA DATA DE NUEVO
    }else if (estado ===2){
   // console.log(arrayDatos);
    for (const datos of arrayDatos) {
        if (datos.id === this.id) {
            datos.nombre = nombre;
            datos.apellido = apellido;
            datos.codigo = codigo;
            //datos.facultad = facultad;
            //datos.escuela = escuela;
            //datos.ciclo = ciclo;
            //datos.grupo = grupo;
            datos.rol = rol;
            datos.email = email;
            datos.telefono = telefono;
        }
    }
    //console.log(arrayDatos);
    inicializar();
    limpiar();
    estado=1;
    }
}

//Opcion 2
function borrarDatos(){
    let arrayDelete = Array.from(contenedor.children);
    console.log(arrayDelete)
    for (const iterator of arrayDelete) {
        console.log(iterator)
// .removeChild remueve hijo por hijo 
        contenedor.removeChild(iterator)
        console.log(contenedor)
    }
    console.log(contenedor)
}

//Eliminar

function eliminar(id){
//alert(id);
console.log(typeof id)
let newArray = arrayDatos.filter((item)=> item.id !== id );
arrayDatos = newArray;
console.log(arrayDatos)
contenedor.innerHTML = '';
inicializar();
}

//Actualizar

// hay un metodo en arrays llamado find()  = permite buscar
function editar(id){
//alert(id);  
let newArray = arrayDatos.find((item) => item.id === id);
console.log(newArray);
document.getElementById("nombre").value  = newArray.nombre;
document.getElementById("apellido").value = newArray.apellido;
document.getElementById("codigo").value =newArray.codigo;
//document.getElementById("facultad").value =newArray.facultad;
//document.getElementById("escuela").value =newArray.escuela;
//document.getElementById("ciclo").value =newArray.ciclo;
//document.getElementById("grupo").value =newArray.grupo;
document.getElementById("rol").value =newArray.rol;
document.getElementById("email").value =newArray.email;
document.getElementById("telefono").value =newArray.telefono;
estado = 2;
this.id=id;
}

function limpiar(){
    const nombre = document.getElementById("nombre").value="";
    const apellido = document.getElementById("apellido").value="";
    const codigo = document.getElementById("codigo").value="";
    //const facultad = document.getElementById("facultad").value="";
    //const escuela = document.getElementById("escuela").value="";
    //const ciclo = document.getElementById("ciclo").value="";
    //const grupo = document.getElementById("grupo").value="";
    const rol = document.getElementById("rol").value="";
    const email = document.getElementById("email").value="";
    const telefono = document.getElementById("telefono").value="";
}