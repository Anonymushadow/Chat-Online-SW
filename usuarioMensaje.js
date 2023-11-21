"use strict"


self.addEventListener("install", e=>{
	console.log("Iniciando intalacion");
})

self.addEventListener("activate", ()=>{
	console.log("activado");
})

self.addEventListener("fetch", e=>{
	console.log("Iniciando peticion");
})

self.addEventListener("error", e=>{
	console.log("ups... hubo un error");
})

self.addEventListener("message", e=>{
	console.log("Mensaje recibido del Navegador: ");
	console.log(e.data);
	self.clients.matchAll({includeUncontrolled: true, type: "all"})
	.then(function(clients){
		for (let i = 0; i < clients.length; i++) {
			if(clients[i].focused){
				clients[i].postMessage({
					msg: e.data,
					client: true,
				})
			}else{
				clients[i].postMessage({
					msg: e.data,
					client: false,
				})
			}
		}
})
})