(function () {
	// Variables
	let lista = document.getElementById("lista"),
		tareaInput = document.getElementById("tareaInput"),
		btnNuevaTarea = document.getElementById("btn-agregar");

	// Objeto para almacenar las tareas
	let tareas = [];

	// Función constructora para las tareas
	function Tarea(nombre) {
		this.nombre = nombre;
	}

	// Método para agregar tarea al objeto
	function agregarTarea() {
		let nombreTarea = tareaInput.value.trim();

		if (nombreTarea === "") {
			tareaInput.setAttribute("placeholder", "Agrega una tarea válida");
			tareaInput.className = "error";
			return false;
		}

		let nuevaTarea = new Tarea(nombreTarea);
		tareas.push(nuevaTarea);

		// Actualizar la lista visual
		actualizarLista();

		tareaInput.value = "";
		tareaInput.className = "";
		tareaInput.setAttribute("placeholder", "Agrega tu tarea");
	}

	// Método para actualizar la lista visual
	function actualizarLista() {
		lista.innerHTML = ""; // Limpiar la lista antes de volver a crearla

		// Recorrer el array de tareas y crear elementos de lista por cada tarea
		tareas.forEach(function (tarea, index) {
			let nuevaTarea = document.createElement("li"),
				enlace = document.createElement("a"),
				contenido = document.createTextNode(tarea.nombre);

			enlace.appendChild(contenido);
			enlace.setAttribute("href", "#");
			nuevaTarea.appendChild(enlace);
			lista.appendChild(nuevaTarea);

			// Agregar evento para eliminar la tarea al hacer clic
			enlace.addEventListener("click", function () {
				tareas.splice(index, 1); // Eliminar la tarea del array
				actualizarLista(); // Actualizar la lista visual
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