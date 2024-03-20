const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	documentos: /^\d{7,11}$/, 
	nombres: /^[a-zA-ZÀ-ÿ\s]{15,20}$/,
	edad: /^\d{1,3}$/,
	telefono: /^\d{7,14}$/,  
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,

	
}

const campos = {
	documento: false,
	nombres: false,
	edad: false,
	correo: false,

	
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "documento":
			validarCampo(expresiones.documento, e.target, 'documento');
		break;
		case "nombres":
			validarCampo(expresiones.nombres, e.target, 'nombres');
		break;
		case "edad":
			validarCampo(expresiones.edad, e.target, 'edad');
		break;
		
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
		var doc = document.getElementById('documento').value;
		var nom = document.getElementById('nombres').value;
		var edad = document.getElementById('edad').value;
		var correo = document.getElementById('correo').value;
		

	const terminos = document.getElementById('terminos');
	if(campos.documento && campos.nombres && campos.correo  && terminos.checked ){
		formulario.reset();
		console.log(documento);console.log(nombres);console.log(edad);console.log(edad);console.log(correo);
		$.post ("registro.php?cod=datos",{documento: documento, nombres: nommbres, edad: edad,  correo: correo}, function(document){$("#mensaje").html(document);
		
		}),
		
		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} 
});
