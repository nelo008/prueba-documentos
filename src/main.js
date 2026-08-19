import './style.css'
import { jsPDF } from 'jspdf'

document.querySelector('#app').innerHTML = `
  <div class="contenedor">

    <div class="tarjeta">

      <h1>Solicitud de Constancias1</h1>
      <p class="descripcion">
        Capture sus datos para generar el documento.
      </p>

      <form id="formulario">

        <div class="campo">
          <label>Nombre</label>
          <input 
            type="text" 
            id="nombre"
            placeholder="Ej. Manuel"
            required
          >
        </div>

        <div class="campo">
          <label>Apellidos</label>
          <input 
            type="text" 
            id="apellidos"
            placeholder="Ej. García Hernández"
            required
          >
        </div>

        <div class="campo">
          <label>Matrícula</label>
          <input 
            type="text" 
            id="matricula"
            placeholder="Ej. 20260001"
            required
          >
        </div>

        <div class="campo">
          <label>Carrera</label>
          <input 
            type="text" 
            id="carrera"
            placeholder="Ej. Ingeniería"
            required
          >
        </div>

        <div class="campo">
          <label>Semestre</label>
          <select id="semestre" required>
            <option value="">Seleccione</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
        </div>

        <div class="campo">
          <label>Correo electrónico</label>
          <input 
            type="email" 
            id="correo"
            placeholder="ejemplo@correo.com"
            required
          >
        </div>

        <button type="submit">
          PREVISUALIZAR
        </button>

      </form>

    </div>

    <div id="vistaPrevia"></div>

  </div>
`

const formulario = document.querySelector('#formulario')
const vistaPrevia = document.querySelector('#vistaPrevia')

formulario.addEventListener('submit', (e) => {

  e.preventDefault()

  const datos = {

    nombre: document.querySelector('#nombre').value,
    apellidos: document.querySelector('#apellidos').value,
    matricula: document.querySelector('#matricula').value,
    carrera: document.querySelector('#carrera').value,
    semestre: document.querySelector('#semestre').value,
    correo: document.querySelector('#correo').value

  }

  mostrarVistaPrevia(datos)

})


function mostrarVistaPrevia(datos) {

  vistaPrevia.innerHTML = `

    <div class="documento">

      <h2>VISTA PREVIA</h2>

      <hr>

      <h3>CONSTANCIA DE ESTUDIOS</h3>

      <p>
        Se hace constar que:
      </p>

      <h2>
        ${datos.nombre} ${datos.apellidos}
      </h2>

      <p>
        Matrícula: <strong>${datos.matricula}</strong>
      </p>

      <p>
        Carrera: <strong>${datos.carrera}</strong>
      </p>

      <p>
        Semestre: <strong>${datos.semestre}</strong>
      </p>

      <p>
        El presente documento se expide a petición
        del interesado para los fines que a éste convengan.
      </p>

      <p class="fecha">
        Fecha: ${new Date().toLocaleDateString('es-MX')}
      </p>

      <div class="firma">
        ______________________________
        <br>
        FIRMA
      </div>

      <button id="generarPDF">
        GENERAR PDF
      </button>

    </div>

  `

  document
    .querySelector('#generarPDF')
    .addEventListener('click', () => {

      generarPDF(datos)

    })

}


function generarPDF(datos) {

  const pdf = new jsPDF()

  pdf.setFontSize(18)

  pdf.text(
    'CONSTANCIA DE ESTUDIOS',
    105,
    30,
    { align: 'center' }
  )

  pdf.setFontSize(12)

  pdf.text(
    'Se hace constar que:',
    20,
    55
  )

  pdf.setFontSize(16)

  pdf.text(
    `${datos.nombre} ${datos.apellidos}`,
    105,
    70,
    { align: 'center' }
  )

  pdf.setFontSize(12)

  pdf.text(
    `Matricula: ${datos.matricula}`,
    20,
    90
  )

  pdf.text(
    `Carrera: ${datos.carrera}`,
    20,
    105
  )

  pdf.text(
    `Semestre: ${datos.semestre}`,
    20,
    120
  )

  pdf.text(
    'El presente documento se expide a petición',
    20,
    145
  )

  pdf.text(
    'del interesado para los fines que a éste convengan.',
    20,
    155
  )

  pdf.text(
    `Fecha: ${new Date().toLocaleDateString('es-MX')}`,
    20,
    180
  )

  pdf.text(
    '____________________________',
    105,
    220,
    { align: 'center' }
  )

  pdf.text(
    'FIRMA',
    105,
    230,
    { align: 'center' }
  )

  const nombreArchivo =
    `Constancia_${datos.matricula}_${datos.nombre}_${datos.apellidos}.pdf`

  pdf.save(nombreArchivo)

}