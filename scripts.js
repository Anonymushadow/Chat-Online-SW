  "use strict"

  let usuario1 = document.querySelector(".usuario1");
  let usuario2 = document.querySelector(".usuario2");
  let usuario0;
  let hombre = document.querySelector(".left");
  let mujer = document.querySelector(".right");
  let btnEnvio = document.querySelectorAll(".mensajeEnviar");
  let inputU1 = document.querySelector(".redacto1");
  let inputU2 = document.querySelector(".redacto2");
  let input = [inputU1, inputU2];
  let dialogo1 = document.querySelector(".dialogo1");
  let dialogo2 = document.querySelector(".dialogo2");
  let dialogos = [dialogo1, dialogo2];
  let chat;
  let ajustes = document.querySelectorAll(".ajustes");
  let is;




  if (navigator.serviceWorker) {
  	navigator.serviceWorker.register("usuarioMensaje.js");
  }else{
  	alert("lo sentimos pero algo esta fallando");
  }


  hombre.addEventListener("click", ()=>{
  	eleccion(usuario1, 0);
  })

  mujer.addEventListener("click", ()=>{
  	eleccion(usuario2, 1);
  })

  const eleccion = (usuario, numeroUsuario)=>{
  	hombre.classList.add("hide");
  	mujer.classList.add("hide");
  	usuario.classList.toggle("hide");
  	usuario0 = numeroUsuario;
  }



  for (let i = 0; i < btnEnvio.length; i++) {
    btnEnvio[i].addEventListener("click", ()=> {
     msgs(i);
     input[i].value = "";
     is = i;
   });
  } 

  const msgs = (i)=>{
    if (input[i].value !== "") {
      let msg = input[i].value;
      navigator.serviceWorker.ready.then(res => res.active.postMessage(msg));
    }
  }

  navigator.serviceWorker.addEventListener("message", e=>{
    creacion(e.data.msg, is);
    is++
  });





  const creacion = (msg, user)=>{
  	for (let j = 0; j < dialogos.length; j++) {
  		chat = document.createElement("DIV");
  		chat.classList.add("chat");
  		clases(usuario0, user, j);
  		chat.textContent = msg;
  		dialogos[j].appendChild(chat);
  	}
  }


  //usuario, mensaje, chat
  const clases = (u, m, c)=>{
  	if (u == m) {
  		if (m == c){
  			chat.classList.add("derecha");
  		}else{
  			chat.classList.add("izq");
  		}
  	}else{
  		if (m == c){
  			chat.classList.add("derecha");
  		}else{
  			chat.classList.add("izq");
  		}
  	}
  }