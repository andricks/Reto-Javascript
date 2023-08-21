const agregarTareaBtns = document.querySelectorAll(".agregar-tarea-btn");
const agregarColumnaBtn = document.querySelector(".agregar-columna-btn");
const columnasTareas = document.querySelectorAll(".tareas");

function crearTarjetaTarea(texto) {
  const tarjetaTarea = document.createElement("div");
  tarjetaTarea.className = "tarjeta-tarea";
  tarjetaTarea.textContent = texto;
  tarjetaTarea.draggable = true;
  return tarjetaTarea;
}

agregarTareaBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const textoTarea = prompt("Ingrese la nueva tarea:");
    if (textoTarea) {
      const tarjetaTarea = crearTarjetaTarea(textoTarea);
      columnasTareas[index].appendChild(tarjetaTarea);

      tarjetaTarea.addEventListener("dragstart", () => {
        tarjetaTarea.classList.add("arrastrando");
      });

      tarjetaTarea.addEventListener("dragend", () => {
        tarjetaTarea.classList.remove("arrastrando");
      });
    }
  });
});

columnasTareas.forEach(columna => {
  columna.addEventListener("dragover", e => {
    e.preventDefault();
  });

  columna.addEventListener("drop", e => {
    e.preventDefault();
    const tarjetaArrastrada = document.querySelector(".arrastrando");
    if (tarjetaArrastrada) {
      columna.appendChild(tarjetaArrastrada);
    }
  });
});

agregarColumnaBtn.addEventListener("click", () => {
  const nuevaColumna = document.createElement("div");
  nuevaColumna.className = "columna";
  nuevaColumna.innerHTML = `
    <h2>Nueva Columna</h2>
    <div class="tareas"></div>
    <button class="agregar-tarea-btn">Agregar Tarea</button>
  `;

  const tableroTareas = document.querySelector(".tablero-tareas");
  tableroTareas.insertBefore(nuevaColumna, agregarColumnaBtn);
  agregarTareaBtns.forEach(btn => {
    btn.removeEventListener("click", () => {});
  });
  columnasTareas.forEach(columna => {
    columna.removeEventListener("dragover", () => {});
    columna.removeEventListener("drop", () => {});
  });
  agregarTareaBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const textoTarea = prompt("Ingrese la nueva tarea:");
      if (textoTarea) {
        const tarjetaTarea = crearTarjetaTarea(textoTarea);
        columnasTareas[index].appendChild(tarjetaTarea);

        tarjetaTarea.addEventListener("dragstart", () => {
          tarjetaTarea.classList.add("arrastrando");
        });

        tarjetaTarea.addEventListener("dragend", () => {
          tarjetaTarea.classList.remove("arrastrando");
        });
      }
    });
  });

  columnasTareas.forEach(columna => {
    columna.addEventListener("dragover", e => {
      e.preventDefault();
    });

    columna.addEventListener("drop", e => {
      e.preventDefault();
      const tarjetaArrastrada = document.querySelector(".arrastrando");
      if (tarjetaArrastrada) {
        columna.appendChild(tarjetaArrastrada);
      }
    });
  });
});
