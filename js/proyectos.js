const button = document.getElementById("button1");
const contenedor = document.getElementById("contenedor1");
let arrayDatos = [{
    id: 1, nproyecto: "727272", tipo:"Proyecto", nombrepro: "La Hora del Codigo", responsable: "UPeU",
    poblacion: "Niños 8-10 años", zona: "Carapongo", fechaini: "13/05/2023", fechater: "24/06/2023", semestre: "2023-1", facultad: "FIA", escuela: "EP Sistemas", ciclo: "3er Ciclo", 
    actividad:"Ejecucion", presupuesto:"S/.200", cursos: "Lenguajes de Programacion", descripcion:"", objetivo:""
}];

let cont = 1;
var id;
// estado = 1 guardar
// estado = 2 actualizar
var estado = 1;
const inicializar = () => {
    contenedor.innerHTML = '';
    for (const datos of arrayDatos) {
        let tr = document.createElement("tr");
        th = document.createElement("th");
        th.textContent = cont;
        datos.id = cont;
        td1 = document.createElement("td");
        td1.textContent = datos.nproyecto
        td2 = document.createElement("td");
        td2.textContent = datos.nombrepro
        td3 = document.createElement("td");
        td3.innerHTML = "<a href='#' onclick=eliminar(" + datos.id + ")  class='material-symbols-outlined text-danger me-2'>delete</a><a href='#' onclick=editar(" + datos.id + ") class='material-symbols-outlined text-primary text-decoration-none' data-bs-target='#Modal' data-bs-toggle='modal'>border_color</a>"
        tr.appendChild(th);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        contenedor.appendChild(tr);

        cont++;
    }
    cont = 1;
}


inicializar();

button.addEventListener("click", () => {
    guardar();
})

function guardar() {
    const nproyecto = document.getElementById("nproyecto").value;
    const tipo = document.getElementById("tipo").value;
    const nombrepro = document.getElementById("nombrepro").value;
    const responsable = document.getElementById("responsable").value;
    const poblacion = document.getElementById("poblacion").value;
    const zona = document.getElementById("zona").value;
    const fechaini = document.getElementById("fechaini").value;
    const fechater = document.getElementById("fechater").value;
    const semestre = document.getElementById("semestre").value;
    const facultad = document.getElementById("facultad").value;
    const escuela = document.getElementById("escuela").value;
    const ciclo = document.getElementById("ciclo").value;
    const actividad = document.getElementById("actividad").value;
    const cursos = document.getElementById("cursos").value;
    const presupuesto = document.getElementById("presupuesto").value;
    const descripcion = document.getElementById("descripcion").value;
    const objetivo = document.getElementById("objetivo").value;

    if (estado === 1) {

        arrayDatos.push({ nproyecto, tipo, nombrepro, responsable, poblacion, zona, fechaini, fechater, semestre, facultad, escuela, ciclo, actividad, cursos, presupuesto, descripcion, objetivo })
        console.log(arrayDatos);

        contenedor.innerHTML = "";

        inicializar();
        limpiar();
    } else if (estado === 2) {

        for (const datos of arrayDatos) {
            if (datos.id === this.id) {
                datos.nproyecto = nproyecto;
                datos.tipo = tipo;
                datos.nombrepro = nombrepro;
                datos.responsable = responsable;
                datos.poblacion = poblacion;
                datos.zona = zona;
                datos.fechaini = fechaini;
                datos.fechater = fechater;
                datos.semestre = semestre;
                datos.facultad = facultad;
                datos.escuela = escuela;
                datos.ciclo = ciclo;
                datos.actividad = actividad;
                datos.cursos = cursos;
                datos.presupuesto = presupuesto;
                datos.descripcion = descripcion;
                datos.objetivo = objetivo;
            }
        }
        inicializar();
        limpiar();
        estado = 1;
    }
}

function borrarDatos() {
    let arrayDelete = Array.from(contenedor.children);
    console.log(arrayDelete)
    for (const iterator of arrayDelete) {
        console.log(iterator)
        contenedor.removeChild(iterator)
        console.log(contenedor)
    }
    console.log(contenedor)
}


function eliminar(id) {
    console.log(typeof id)
    let newArray = arrayDatos.filter((item) => item.id !== id);
    arrayDatos = newArray;
    console.log(arrayDatos)
    contenedor.innerHTML = '';
    inicializar();
}

function editar(id) {
    let newArray = arrayDatos.find((item) => item.id === id);
    console.log(newArray);
    document.getElementById("nproyecto").value = newArray.nproyecto;
    document.getElementById("tipo").value = newArray.tipo;
    document.getElementById("nombrepro").value = newArray.nombrepro;
    document.getElementById("responsable").value = newArray.responsable;
    document.getElementById("poblacion").value = newArray.poblacion;
    document.getElementById("zona").value = newArray.zona;
    document.getElementById("fechaini").value = newArray.fechaini;
    document.getElementById("fechater").value = newArray.fechater;
    document.getElementById("semestre").value = newArray.semestre;
    document.getElementById("facultad").value = newArray.facultad;
    document.getElementById("escuela").value = newArray.escuela;
    document.getElementById("ciclo").value = newArray.ciclo;
    document.getElementById("actividad").value = newArray.actividad;
    document.getElementById("cursos").value = newArray.cursos;
    document.getElementById("presupuesto").value = newArray.presupuesto;
    document.getElementById("descripcion").value = newArray.descripcion;
    document.getElementById("objetivo").value = newArray.objetivo;
    estado = 2;
    this.id = id;
}

function limpiar() {
    const nproyecto = document.getElementById("nproyecto").value = "";
    const tipo = document.getElementById("tipo").value = "";
    const nombrepro = document.getElementById("nombrepro").value = "";
    const responsable = document.getElementById("responsable").value = "";
    const poblacion = document.getElementById("poblacion").value = "";
    const zona = document.getElementById("zona").value = "";
    const fechaini = document.getElementById("fechaini").value = "";
    const fechater = document.getElementById("fechater").value = "";
    const semestre = document.getElementById("semestre").value = "";
    const facultad = document.getElementById("facultad").value = "";
    const escuela = document.getElementById("escuela").value = "";
    const ciclo = document.getElementById("ciclo").value = "";
    const actividad = document.getElementById("actividad").value = "";
    const cursos = document.getElementById("cursos").value = "";
    const presupuesto = document.getElementById("presupuesto").value = "";
    const descripcion = document.getElementById("descripcion").value = "";
    const objetivo = document.getElementById("objetivo").value = "";
}