// Inicializar las variables del DOM
const taskForm = document.querySelector('#task-form')
const taskInput = document.querySelector('#task-input')
const taskList = document.querySelector('#task-list')
const taskClear = document.querySelector('#task-clear')

taskClear.addEventListener('click', () => {
  window.localStorage.clear('tareas')
  taskList.innerHTML = ''
})

taskForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const nuevaTarea = taskInput.value.trim()
  agregarTarea(nuevaTarea)
  taskInput.value = ''
})

// agregar el li de tarea al DOM y a la estructura
function agregarTarea(tarea) {
  // Agregamos la tarea al DOM
  const liTarea = crearLiTarea({ name: tarea, completed: false })
  taskList.appendChild(liTarea)
  liTarea.classList.add('sortable-item')

  // Agregamos la tarea al almacenamiento
  const tareas = obtenerTareasDelStorage()
  tareas.push({ name: tarea, completed: false })
  guardarTareasEnStorage(tareas)
}

// Crea el <li></li> para la tarea
function crearLiTarea(tarea) {
  const li = document.createElement('li')
  li.textContent = tarea.name

  // Agregar boton de completado
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.checked = tarea.completed

  checkbox.addEventListener('change', () => {
    tarea.completed = checkbox.checked
    actualizarTarea(tarea)
  })
  li.appendChild(checkbox)

  // Agregar boton de borrado
  const botonBorrado = document.createElement('button')
  botonBorrado.textContent = 'Eliminar'
  botonBorrado.addEventListener('click', () => {
    // Sweet Alert 2 !
    Swal.fire({
      title: 'tas seguro??',
      text: 'mira que no hay vuelta atras!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borrala!'
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarTarea(tarea)
        Swal.fire({
          title: 'Borrado!',
          text: 'Tu tarea ha sido eliminada.',
          icon: 'success'
        })
      } else {
        Swal.fire({
          title: 'No se ha borrado!',
          text: 'tu tarea esta a salvo.',
          icon: 'info'
        })
      }
    })
  })
  botonBorrado.classList.add('delete-btn')
  li.appendChild(botonBorrado)

  return li
}

function actualizarTarea(tarea) {
  const tareas = obtenerTareasDelStorage()
  const id = tareas.findIndex((t) => t.name === tarea.name)
  if (id !== -1) {
    tareas[id] = tarea
    guardarTareasEnStorage(tareas)
  }
}

function eliminarTarea(tarea) {
  let tareas = obtenerTareasDelStorage()
  tareas = tareas.filter((t) => t.name !== tarea.name)
  guardarTareasEnStorage(tareas)
  renderizarTareas()
}

function renderizarTareas() {
  taskList.innerHTML = ''
  const tareas = obtenerTareasDelStorage()
  tareas.forEach((tarea) => {
    const liTarea = crearLiTarea(tarea)
    taskList.appendChild(liTarea)
  })
}

function obtenerTareasDelStorage() {
  const tareas = JSON.parse(window.localStorage.getItem('tareas'))
  return tareas ?? []
}

function guardarTareasEnStorage(tareas) {
  window.localStorage.setItem('tareas', JSON.stringify(tareas))
}

renderizarTareas()
