function cambiarEstado(id, estado){

let m = document.getElementById(id);

// ❌ si está bloqueada, no hacer nada
if(m.classList.contains("bloqueada")) return;

// cambiar estado visual
m.classList.remove("curso","aprobada","reprobada");
m.classList.add(estado);

// actualizar texto
let t = m.querySelector(".estado-texto");

if(estado==="curso") t.textContent="EN CURSO";
if(estado==="aprobada") t.textContent="APROBADA";
if(estado==="reprobada") t.textContent="REPROBADA";



// verificar cadenas
verificarCadena();
}

function verificarCadena(){

// ===== CADENA CÁLCULO =====
controlCadena("calculo1","calculo2");
controlCadena("calculo2","calculo3");

// ===== CADENA PROGRAMACIÓN =====
controlCadena("fundamentos","poo");
controlCadena("poo","estructuras");

}

function controlCadena(prevId, nextId){

let prev = document.getElementById(prevId);
let next = document.getElementById(nextId);

// botones de la siguiente materia
let botones = next.querySelectorAll("button");

// 🔓 SI APROBADA → DESBLOQUEAR
if(prev.classList.contains("aprobada")){

next.classList.remove("bloqueada");
next.querySelector(".candado").textContent="🔓";

// activar botones
botones.forEach(b => b.disabled = false);

if(!next.classList.contains("curso") && !next.classList.contains("aprobada")){
next.querySelector(".estado-texto").textContent="DISPONIBLE";
}

}

// 🔒 SI NO → BLOQUEAR
else{

next.classList.add("bloqueada");
next.querySelector(".candado").textContent="🔒";
next.querySelector(".estado-texto").textContent="BLOQUEADA";

// desactivar botones
botones.forEach(b => b.disabled = true);

}
}

function iniciarMateria(id){

let m = document.getElementById(id);

// quitar estado no cursada
m.classList.remove("no-cursada","sem2","sem3");

// activar como curso
m.classList.add("curso");

// cambiar texto
m.querySelector(".estado-texto").textContent="EN CURSO";

// ocultar botón "cursar"
m.querySelector(".btn-cursar").style.display="none";

// mostrar botones reales
m.querySelector(".botones-estado").style.display="flex";
}