import { useState } from 'react'
import estilos from './TarjetaTaller.module.css'
import Boton from '../Boton/Boton'

export default function TarjetaTaller({ taller, vista }) {
  const { titulo, categoria, cupo, inscriptos, nuevo, descripcion } = taller

  const libres = cupo - inscriptos
  const porcentaje = Math.round((inscriptos / cupo) * 100)
  const [expandida, setExpandida] = useState(false)

  let claseCupo = estilos.disponible
  if (libres === 0) {
    claseCupo = estilos.completo
  } else if (libres <= 3) {
    claseCupo = estilos.pocos
  }

  const claseVista = vista === 'lista' ? estilos.lista : ''

  return (
    <article className={`${estilos.tarjeta} ${claseCupo} ${expandida ? estilos.expandida : ''} ${claseVista}`}>
      {nuevo && <span className={estilos.etiquetaNuevo}>Nuevo</span>}

      <h2 className={estilos.titulo}>{titulo}</h2>
      <p className={estilos.categoria}>{categoria}</p>

      <p className={estilos.cupos}>
        {libres === 0 ? 'Completo' : `Cupos libres: ${libres} de ${cupo}`}
      </p>

      <div className={estilos.barraFondo}>
        <div
          className={estilos.barraRelleno}
          style={{ width: `${porcentaje}%` }}
        />
      </div>

      <Boton onClick={() => setExpandida(!expandida)}>
        {expandida ? 'Ocultar detalles' : 'Ver detalles'}
      </Boton>

      {expandida && (
        <p className={estilos.descripcion}>{descripcion}</p>
      )}
    </article>
  )
}