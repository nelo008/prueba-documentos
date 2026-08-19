import './style.css'

// =====================================================
// PLANES DE ESTUDIO
// =====================================================

const planesEstudio = {
  "Licenciatura en Enfermería y Obstetricia": {
    "3er ciclo": [
      {
        clave: "CPAO",
        nombre: "Proceso de Atención en Enfermería y Obstetricia"
      },
      {
        clave: "SIE",
        nombre: "Interculturalidad, Salud y Embarazo"
      },
      {
        clave: "BRH",
        nombre: "Anatomía y Fisiología de la Reproducción Humana"
      },
      {
        clave: "BMP",
        nombre: "Microbiología y Parasitología"
      },
      {
        clave: "BFF",
        nombre: "Fundamentos de Farmacología"
      }
    ],

    "5to ciclo": [
      {
        clave: "CEC",
        nombre: "Cuidado Integral de la Mujer en el Embarazo, Parto y Posparto Complicado"
      },
      {
        clave: "BPH",
        nombre: "Parto Humanizado"
      },
      {
        clave: "CPS",
        nombre: "Políticas Públicas en Salud"
      },
      {
        clave: "NLD",
        nombre: "Legislación y Derechos Humanos"
      },
      {
        clave: "BFC",
        nombre: "Farmacología Clínica"
      }
    ],

    "7mo ciclo": [
      {
        clave: "CNA",
        nombre: "Cuidado Integral del Niño y del Adolescente"
      },
      {
        clave: "CEOQ",
        nombre: "Enfermería Quirúrgica y Cuidados Obstétricos"
      },
      {
        clave: "CEI",
        nombre: "Enfermería en Cuidados Intensivos"
      },
      {
        clave: "IBE",
        nombre: "Atención de Brotes, Emergencias y Desastres"
      },
      {
        clave: "NPS",
        nombre: "Psicología Social en Salud Pública"
      }
    ],

    "8vo ciclo": [
      {
        clave: "CAM",
        nombre: "Cuidado Integral del Adulto y Adulto Mayor"
      },
      {
        clave: "CAE",
        nombre: "Administración de Servicios de Enfermería"
      },
      {
        clave: "CIP",
        nombre: "Información y Comunicación de Problemas de Salud"
      },
      {
        clave: "IEC",
        nombre: "Estrategias de Intervención Clínica y Comunitaria"
      },
      {
        clave: "EIEO",
        nombre: "Estrategias de Intervención en Enfermería y Obstetricia"
      }
    ]
  },

  "Lic. Enfermería Integral y Salud Comunitaria": {
    "1er ciclo": [
      {
        clave: "HYS",
        nombre: "Higiene y salud"
      },
      {
        clave: "MF",
        nombre: "Morfo fisiología"
      },
      {
        clave: "AN",
        nombre: "Alimentación y nutrición"
      },
      {
        clave: "PEI",
        nombre: "Procedimientos de enfermería integral"
      }
    ]
  }
}


// =====================================================
// DOCENTES
// =====================================================

const docentes = [
  "JIMENEZ DEMA LIDIA",
  "GOMEZ SANCHEZ EDDY ANTONIO"
]


// =====================================================
// SEMANAS
// =====================================================

const semanas = [
  ["Semana 1", "10 al 14 de agosto"],
  ["Semana 2", "17 al 21 de agosto"],
  ["Semana 3", "24 al 28 de agosto"],
  ["Semana 4", "31 de agosto al 4 de septiembre"],
  ["Semana 5", "7 al 11 de septiembre"],
  ["Semana 6", "14 al 18 de septiembre"],
  ["Semana 7", "21 al 25 de septiembre"],
  ["Semana 8", "28 de septiembre al 2 de octubre"],
  ["Semana 9", "5 al 9 de octubre"],
  ["Semana 10", "12 al 16 de octubre"],
  ["Semana 11", "19 al 23 de octubre"],
  ["Semana 12", "26 al 30 de octubre"],
  ["Semana 13", "2 al 6 de noviembre"],
  ["Semana 14", "9 al 13 de noviembre"],
  ["Semana 15", "16 al 20 de noviembre"],
  ["Semana 16", "23 al 27 de noviembre"],
  ["Semana 17", "30 de noviembre al 4 de diciembre"],
  ["Semana 18", "7 al 11 de diciembre"]
]


// =====================================================
// DÍAS
// =====================================================

const dias = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes"
]


// =====================================================
// TEMAS
// =====================================================
// Aquí posteriormente cargaremos los temas reales
// de cada materia.

const temas = {}


// =====================================================
// CREAR HTML
// =====================================================

document.querySelector('#app').innerHTML = `

  <div class="agenda-container">

    <header class="encabezado">

      <div class="encabezado-icono">
        📋
      </div>

      <div>
        <h1>Agenda semanal</h1>
        <h2>Ciclo 2026-1</h2>
      </div>

    </header>


    <section class="datos">

      <div class="campo campo-sede">

        <label>SEDE:</label>

        <input
          type="text"
          value="Ejido San Martín Chamizal"
          readonly
        >

      </div>


      <div class="campo campo-carrera">

        <label>CARRERA:</label>

        <select id="carrera">

          <option value="">
            Seleccionar carrera
          </option>

          <option value="Licenciatura en Enfermería y Obstetricia">
            Licenciatura en Enfermería y Obstetricia
          </option>

          <option value="Lic. Enfermería Integral y Salud Comunitaria">
            Lic. Enfermería Integral y Salud Comunitaria
          </option>

        </select>

      </div>


      <div class="campo campo-ciclo">

        <label>CICLO:</label>

        <select id="ciclo" disabled>

          <option value="">
            Seleccionar ciclo
          </option>

        </select>

      </div>


      <div class="campo campo-materia">

        <label>MATERIA:</label>

        <select id="materia" disabled>

          <option value="">
            Seleccionar materia
          </option>

        </select>

      </div>


      <div class="campo campo-semana">

        <label>SEMANA:</label>

        <select id="semana">

          <option value="">
            Seleccionar semana
          </option>

          ${semanas.map((semana, index) => `
            <option value="${index + 1}">
              ${semana[0]} — ${semana[1]}
            </option>
          `).join('')}

        </select>

      </div>


      <div class="campo campo-tema">

        <label>TEMA:</label>

        <select id="tema" disabled>

          <option value="">
            Primero selecciona una materia
          </option>

        </select>

      </div>

    </section>


    <section class="docentes">

      <div class="titulo-seccion">
        DOCENTES
      </div>

      <div class="docentes-contenedor">

        <div class="docente">

          <label>Docente 1:</label>

          <select id="docente1">

            <option value="">
              Seleccionar docente
            </option>

            ${docentes.map(docente => `
              <option value="${docente}">
                ${docente}
              </option>
            `).join('')}

          </select>

        </div>


        <div class="docente">

          <label>Docente 2:</label>

          <select id="docente2">

            <option value="">
              Seleccionar docente
            </option>

            ${docentes.map(docente => `
              <option value="${docente}">
                ${docente}
              </option>
            `).join('')}

          </select>

        </div>

      </div>

      <small>
        Puede seleccionar máximo 2 docentes.
      </small>

    </section>


    <section class="agenda">

      ${dias.map(crearDia).join('')}

    </section>


    <section class="acciones">

      <button id="btnGuardar">
        💾 Guardar
      </button>

      <button id="btnVistaPrevia">
        👁️ Vista previa PDF
      </button>

      <button id="btnPDF">
        📄 Generar PDF
      </button>

    </section>

  </div>

`


// =====================================================
// CREAR DÍA
// =====================================================

function crearDia(nombre) {

  const id = nombre
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")

  return `

    <div
      class="dia"
      id="dia-${id}"
      data-tipo=""
    >

      <div class="dia-titulo">

        <strong>${nombre}</strong>

        <div class="tipo-dia">

          <label>

            <input
              type="radio"
              name="tipo-${id}"
              value="aula"
              data-dia="${id}"
            >

            <span class="aula-label">
              Aula
            </span>

          </label>


          <label>

            <input
              type="radio"
              name="tipo-${id}"
              value="practica"
              data-dia="${id}"
            >

            <span class="practica-label">
              Práctica
            </span>

          </label>

        </div>

      </div>


      <div class="bloque">

        <label>
          NOMBRE DE DOCENTE
        </label>

        <div
          class="docentes-dia"
          data-dia="${nombre}"
        >

          <span>
            Seleccione los docentes arriba
          </span>

        </div>

      </div>


      <div class="bloque">

        <label>
          SUBTEMAS:
        </label>

        <textarea
          placeholder="Escriba los subtemas..."
        ></textarea>

      </div>


      <div class="bloque">

        <label>
          ACTIVIDAD DOCENTE:
        </label>

        <textarea
          placeholder="Actividad realizada por el docente..."
        ></textarea>

      </div>


      <div class="bloque">

        <label>
          ACTIVIDAD ALUMNO:
        </label>

        <textarea
          placeholder="Actividad realizada por el alumno..."
        ></textarea>

      </div>


      <div class="bloque bibliografia">

        <label>
          BIBLIOGRAFÍA:
        </label>

        <textarea
          placeholder="Bibliografía..."
        ></textarea>

      </div>

    </div>

  `
}


// =====================================================
// VENTANA DE VISTA PREVIA
// =====================================================

document.body.insertAdjacentHTML('beforeend', `

  <div id="modalPreview" class="modal-preview">

    <div class="preview-header">

      <div>

        <strong>
          Vista previa del documento
        </strong>

        <span id="previewNombreArchivo">
        </span>

      </div>


      <button id="cerrarPreview">
        ✕
      </button>

    </div>


    <div class="preview-area">

      <div id="hojaPDF" class="hoja-pdf">

        <div class="pdf-encabezado">

          <h1>
            AGENDA SEMANAL
          </h1>

          <h2>
            CICLO 2026-1
          </h2>

        </div>


        <div class="pdf-datos">

          <div>
            <strong>SEDE:</strong>
            <span id="pdfSede">
              Ejido San Martín Chamizal
            </span>
          </div>

          <div>
            <strong>CARRERA:</strong>
            <span id="pdfCarrera">-</span>
          </div>

          <div>
            <strong>CICLO:</strong>
            <span id="pdfCiclo">-</span>
          </div>

          <div>
            <strong>MATERIA:</strong>
            <span id="pdfMateria">-</span>
          </div>

          <div>
            <strong>SEMANA:</strong>
            <span id="pdfSemana">-</span>
          </div>

          <div>
            <strong>TEMA:</strong>
            <span id="pdfTema">-</span>
          </div>

        </div>


        <div class="pdf-docentes">

          <strong>DOCENTES:</strong>

          <span id="pdfDocentes">
            -
          </span>

        </div>


        <div id="pdfAgenda" class="pdf-agenda">
        </div>


        <div class="pdf-pie">

          Agenda semanal — Ciclo 2026-1

        </div>

      </div>

    </div>


    <div class="preview-footer">

      <button id="cerrarPreview2">
        Cerrar
      </button>

      <button id="generarDesdePreview">
        📄 Generar PDF
      </button>

    </div>

  </div>

`)


// =====================================================
// REFERENCIAS
// =====================================================

const carrera =
  document.querySelector('#carrera')

const ciclo =
  document.querySelector('#ciclo')

const materia =
  document.querySelector('#materia')

const semana =
  document.querySelector('#semana')

const tema =
  document.querySelector('#tema')

const docente1 =
  document.querySelector('#docente1')

const docente2 =
  document.querySelector('#docente2')


// =====================================================
// CARRERA → CICLO
// =====================================================

carrera.addEventListener('change', () => {

  const carreraSeleccionada =
    carrera.value

  ciclo.innerHTML = `
    <option value="">
      Seleccionar ciclo
    </option>
  `

  materia.innerHTML = `
    <option value="">
      Seleccionar materia
    </option>
  `

  tema.innerHTML = `
    <option value="">
      Primero selecciona una materia
    </option>
  `

  ciclo.disabled = true
  materia.disabled = true
  tema.disabled = true


  if (!carreraSeleccionada) {
    return
  }


  const ciclos =
    planesEstudio[carreraSeleccionada]


  Object.keys(ciclos).forEach(nombreCiclo => {

    const option =
      document.createElement('option')

    option.value =
      nombreCiclo

    option.textContent =
      nombreCiclo

    ciclo.appendChild(option)

  })


  ciclo.disabled = false

})


// =====================================================
// CICLO → MATERIA
// =====================================================

ciclo.addEventListener('change', () => {

  const carreraSeleccionada =
    carrera.value

  const cicloSeleccionado =
    ciclo.value


  materia.innerHTML = `
    <option value="">
      Seleccionar materia
    </option>
  `

  tema.innerHTML = `
    <option value="">
      Primero selecciona una materia
    </option>
  `


  materia.disabled = true
  tema.disabled = true


  if (!cicloSeleccionado) {
    return
  }


  const materias =
    planesEstudio
      [carreraSeleccionada]
      [cicloSeleccionado]


  materias.forEach(item => {

    const option =
      document.createElement('option')

    option.value =
      item.clave

    option.textContent =
      `${item.clave} — ${item.nombre}`

    materia.appendChild(option)

  })


  materia.disabled = false

})


// =====================================================
// MATERIA → TEMA
// =====================================================

materia.addEventListener('change', () => {

  const claveMateria =
    materia.value


  tema.innerHTML = ''


  if (!claveMateria) {

    tema.innerHTML = `
      <option value="">
        Primero selecciona una materia
      </option>
    `

    tema.disabled = true

    return
  }


  const listaTemas =
    temas[claveMateria] || []


  if (listaTemas.length === 0) {

    tema.innerHTML = `
      <option value="">
        Temas pendientes de cargar
      </option>
    `

    tema.disabled = true

    return
  }


  tema.innerHTML = `
    <option value="">
      Seleccionar tema
    </option>
  `


  listaTemas.forEach((nombreTema, index) => {

    const option =
      document.createElement('option')

    option.value =
      nombreTema

    option.textContent =
      `${index + 1}. ${nombreTema}`

    tema.appendChild(option)

  })


  tema.disabled = false

})


// =====================================================
// DOCENTES
// =====================================================

docente1.addEventListener('change', () => {

  const valor =
    docente1.value


  Array.from(
    docente2.options
  ).forEach(option => {

    option.disabled =
      valor !== "" &&
      option.value === valor

  })


  actualizarDocentesDias()

})


docente2.addEventListener('change', () => {

  const valor =
    docente2.value


  Array.from(
    docente1.options
  ).forEach(option => {

    option.disabled =
      valor !== "" &&
      option.value === valor

  })


  actualizarDocentesDias()

})


// =====================================================
// ACTUALIZAR DOCENTES
// =====================================================

function actualizarDocentesDias() {

  const seleccionados = []


  if (docente1.value) {
    seleccionados.push(docente1.value)
  }


  if (docente2.value) {
    seleccionados.push(docente2.value)
  }


  document
    .querySelectorAll('.docentes-dia')
    .forEach(contenedor => {

      if (seleccionados.length === 0) {

        contenedor.innerHTML =
          '<span>Seleccione los docentes arriba</span>'

        return

      }


      contenedor.innerHTML =
        seleccionados
          .map(docente => `<div>${docente}</div>`)
          .join('')

    })

}


// =====================================================
// AULA / PRÁCTICA
// =====================================================

document
  .querySelectorAll(
    'input[type="radio"][data-dia]'
  )
  .forEach(radio => {

    radio.addEventListener(
      'change',
      () => {

        const diaId =
          radio.dataset.dia


        const dia =
          document.querySelector(
            `#dia-${diaId}`
          )


        if (!dia) {
          return
        }


        dia.dataset.tipo =
          radio.value

      }
    )

  })


// =====================================================
// NOMBRE DEL DOCUMENTO
// =====================================================

function obtenerNombreDocumento() {

  const cicloTexto =
    ciclo.value
      ? ciclo.options[ciclo.selectedIndex].text
      : 'Sin ciclo'


  const materiaTexto =
    materia.value
      ? materia.options[materia.selectedIndex].text
      : 'Sin materia'


  const semanaTexto =
    semana.value
      ? semana.options[semana.selectedIndex].text
      : 'Sin semana'


  return `${cicloTexto} - ${materiaTexto} - ${semanaTexto}`
    .replace(/[\\/:*?"<>|]/g, '')
}


// =====================================================
// CONSTRUIR VISTA PREVIA
// =====================================================

function construirVistaPrevia() {

  const nombreDocumento =
    obtenerNombreDocumento()


  document
    .querySelector('#previewNombreArchivo')
    .textContent =
      nombreDocumento


  document
    .querySelector('#pdfCarrera')
    .textContent =
      carrera.value
        ? carrera.options[carrera.selectedIndex].text
        : '-'


  document
    .querySelector('#pdfCiclo')
    .textContent =
      ciclo.value
        ? ciclo.options[ciclo.selectedIndex].text
        : '-'


  document
    .querySelector('#pdfMateria')
    .textContent =
      materia.value
        ? materia.options[materia.selectedIndex].text
        : '-'


  document
    .querySelector('#pdfSemana')
    .textContent =
      semana.value
        ? semana.options[semana.selectedIndex].text
        : '-'


  document
    .querySelector('#pdfTema')
    .textContent =
      tema.value || '-'


  const listaDocentes = []


  if (docente1.value) {
    listaDocentes.push(docente1.value)
  }


  if (docente2.value) {
    listaDocentes.push(docente2.value)
  }


  document
    .querySelector('#pdfDocentes')
    .textContent =
      listaDocentes.length
        ? listaDocentes.join(' / ')
        : '-'


  const pdfAgenda =
    document.querySelector('#pdfAgenda')


  pdfAgenda.innerHTML = ''


  document
    .querySelectorAll('.dia')
    .forEach(dia => {

      const nombreDia =
        dia
          .querySelector(
            '.dia-titulo strong'
          )
          ?.textContent || ''


      const tipo =
        dia.dataset.tipo


      let tipoTexto =
        'SIN SELECCIONAR'


      if (tipo === 'aula') {
        tipoTexto = 'AULA'
      }


      if (tipo === 'practica') {
        tipoTexto = 'PRÁCTICA'
      }


      const textareas =
        dia.querySelectorAll('textarea')


      const subtemas =
        textareas[0]?.value || ''


      const actividadDocente =
        textareas[1]?.value || ''


      const actividadAlumno =
        textareas[2]?.value || ''


      const bibliografia =
        textareas[3]?.value || ''


      const docentesDia =
        dia.querySelector(
          '.docentes-dia'
        )?.innerHTML || '-'


      let claseColor = ''


      if (tipo === 'aula') {
        claseColor = 'pdf-aula'
      }


      if (tipo === 'practica') {
        claseColor = 'pdf-practica'
      }


      const columna =
        document.createElement('div')


      columna.className =
        `pdf-dia ${claseColor}`


      columna.innerHTML = `

        <div class="pdf-dia-titulo">

          <strong>
            ${nombreDia}
          </strong>

          <span>
            ${tipoTexto}
          </span>

        </div>


        <div class="pdf-bloque">

          <strong>
            DOCENTE
          </strong>

          <div>
            ${docentesDia}
          </div>

        </div>


        <div class="pdf-bloque">

          <strong>
            SUBTEMAS
          </strong>

          <div>
            ${subtemas || '-'}
          </div>

        </div>


        <div class="pdf-bloque">

          <strong>
            ACTIVIDAD DOCENTE
          </strong>

          <div>
            ${actividadDocente || '-'}
          </div>

        </div>


        <div class="pdf-bloque">

          <strong>
            ACTIVIDAD ALUMNO
          </strong>

          <div>
            ${actividadAlumno || '-'}
          </div>

        </div>


        <div class="pdf-bloque">

          <strong>
            BIBLIOGRAFÍA
          </strong>

          <div>
            ${bibliografia || '-'}
          </div>

        </div>

      `


      pdfAgenda.appendChild(columna)

    })

}


// =====================================================
// VALIDAR FORMULARIO
// =====================================================

function validarFormulario() {

  const camposObligatorios = [
    { elemento: carrera, nombre: 'Carrera' },
    { elemento: ciclo, nombre: 'Ciclo' },
    { elemento: materia, nombre: 'Materia' },
    { elemento: semana, nombre: 'Semana' }
  ]

  for (const campo of camposObligatorios) {

    if (!campo.elemento.value) {

      alert(`Debes seleccionar: ${campo.nombre}`)

      campo.elemento.focus()

      return false
    }
  }


  // El tema solamente se valida si está habilitado.
  if (!tema.disabled && !tema.value) {

    alert(
      'Debes seleccionar un tema.'
    )

    tema.focus()

    return false
  }


  // Al menos un docente es obligatorio.
  // El segundo docente es opcional.
  if (!docente1.value && !docente2.value) {

    alert(
      'Debes seleccionar al menos un docente.'
    )

    docente1.focus()

    return false
  }


  // Cada día debe tener Aula o Práctica.
  for (const nombreDia of dias) {

    const id =
      nombreDia
        .toLowerCase()
        .normalize('NFD')
        .replace(
          /[\u0300-\u036f]/g,
          ''
        )


    const dia =
      document.querySelector(
        `#dia-${id}`
      )


    const seleccionado =
      dia?.querySelector(
        'input[type="radio"]:checked'
      )


    if (!seleccionado) {

      alert(
        `Debes seleccionar Aula o Práctica para ${nombreDia}.`
      )


      dia?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })


      return false
    }

  }


  return true
}


// =====================================================
// VISTA PREVIA
// =====================================================

document
  .querySelector('#btnVistaPrevia')
  .addEventListener(
    'click',
    () => {

      if (!validarFormulario()) {
        return
      }


      construirVistaPrevia()


      document
        .querySelector('#modalPreview')
        .classList.add('mostrar')

    }
  )


// =====================================================
// CERRAR VISTA PREVIA
// =====================================================

function cerrarVistaPrevia() {

  document
    .querySelector('#modalPreview')
    .classList.remove('mostrar')

}


document
  .querySelector('#cerrarPreview')
  .addEventListener(
    'click',
    cerrarVistaPrevia
  )


document
  .querySelector('#cerrarPreview2')
  .addEventListener(
    'click',
    cerrarVistaPrevia
  )


// =====================================================
// GENERAR PDF
// =====================================================

function generarPDF() {

  if (!validarFormulario()) {
    return
  }


  construirVistaPrevia()


  const nombreDocumento =
    obtenerNombreDocumento()


  const hoja =
    document.querySelector(
      '#hojaPDF'
    )


  if (!hoja) {

    alert(
      'No se encontró la hoja de vista previa.'
    )

    return
  }


  const ventana =
    window.open(
      '',
      '_blank'
    )


  if (!ventana) {

    alert(
      'El navegador bloqueó la ventana de impresión. Permite ventanas emergentes para este sitio.'
    )

    return
  }


  // Copiar los estilos actuales
  // para conservar el diseño.
  const estilos =
    Array
      .from(
        document.querySelectorAll('style')
      )
      .map(
        style =>
          style.textContent
      )
      .join('\n')


  ventana.document.write(`

    <!DOCTYPE html>

    <html lang="es">

    <head>

      <meta charset="UTF-8">

      <title>
        ${nombreDocumento}
      </title>

      <style>

        ${estilos}


        html,
        body {

          margin: 0;

          padding: 0;

          background: white !important;

        }


        .hoja-pdf {

          margin:
            0 auto !important;

          box-shadow:
            none !important;

        }


        @page {

          size: landscape;

          margin: 7mm;

        }


        .pdf-dia.pdf-aula {

          background:
            #eaf4ff !important;

          -webkit-print-color-adjust:
            exact !important;

          print-color-adjust:
            exact !important;

        }


        .pdf-dia.pdf-practica {

          background:
            #eaf8ef !important;

          -webkit-print-color-adjust:
            exact !important;

          print-color-adjust:
            exact !important;

        }

      </style>

    </head>


    <body>

      ${hoja.outerHTML}

    </body>

    </html>

  `)


  ventana.document.close()


  ventana.onload = () => {

    ventana.focus()

    ventana.print()

  }

}


// =====================================================
// GENERAR PDF DESDE PREVIEW
// =====================================================

document
  .querySelector('#generarDesdePreview')
  .addEventListener(
    'click',
    () => {

      generarPDF()

    }
  )


// =====================================================
// BOTÓN PDF PRINCIPAL
// =====================================================

document
  .querySelector('#btnPDF')
  .addEventListener(
    'click',
    generarPDF
  )


// =====================================================
// GUARDAR
// =====================================================

document
  .querySelector('#btnGuardar')
  .addEventListener(
    'click',
    () => {

      alert(
        'La función de guardar se implementará posteriormente.'
      )

    }
  )