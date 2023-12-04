(function () {
	// Variables
	let lista = document.getElementById("lista"),
		tareaInput = document.getElementById("tareaInput"),
		btnNuevaTarea = document.getElementById("btn-agregar");

	// Obtener tareas del Local Storage o inicializar un array vacío
	let tareas = JSON.parse(localStorage.getItem('tareas')) || [];

	// Función constructora para las tareas
	function Tarea(nombre) {
		this.nombre = nombre;
	}

	// Método para guardar las tareas en el Local Storage
	function guardarTareas() {
		localStorage.setItem('tareas', JSON.stringify(tareas));
	}

	// Método para agregar tarea al objeto y actualizar el Local Storage
	function agregarTarea() {
		let nombreTarea = tareaInput.value.trim();

		if (nombreTarea === "") {
			tareaInput.setAttribute("placeholder", "Agrega una tarea válida");
			tareaInput.className = "error";
			return false;
		}

		let nuevaTarea = new Tarea(nombreTarea);
		tareas.push(nuevaTarea);

		guardarTareas(); // Guardar en Local Storage
		actualizarLista();

		tareaInput.value = "";
		tareaInput.className = "";
		tareaInput.setAttribute("placeholder", "Agrega tu tarea");
	}

	// Método para actualizar la lista visual y el Local Storage
	function actualizarLista() {
		lista.innerHTML = ""; // Limpiar la lista antes de volver a crearla

		tareas.forEach(function (tarea, index) {
			let nuevaTarea = document.createElement("li"),
				enlace = document.createElement("a"),
				contenido = document.createTextNode(tarea.nombre);

			enlace.appendChild(contenido);
			enlace.setAttribute("href", "#");
			nuevaTarea.appendChild(enlace);
			lista.appendChild(nuevaTarea);

			enlace.addEventListener("click", function () {
				tareas.splice(index, 1);
				guardarTareas(); // Guardar en Local Storage
				actualizarLista();
			});
		});
	}

	// Eventos
	btnNuevaTarea.addEventListener("click", agregarTarea);

	tareaInput.addEventListener("click", function () {
		tareaInput.className = "";
		tareaInput.setAttribute("placeholder", "Agrega tu tarea");
	});

	// Inicializar la lista
	actualizarLista();
})();