import { useState, useEffect } from 'react'
import { talleres } from './data/talleres'
import TarjetaTaller from './components/TarjetaTaller/TarjetaTaller'
import Boton from './components/Boton/Boton'

function App() {
  const [tema, setTema] = useState('claro')
  const [vista, setVista] = useState('grilla')
  const [compacto, setCompacto] = useState(false)

  useEffect(() => {
    document.body.setAttribute('data-tema', tema)
  }, [tema])

  function cambiarTema() {
    setTema(tema === 'claro' ? 'oscuro' : 'claro')
  }

  function cambiarVista() {
    setVista(vista === 'grilla' ? 'lista' : 'grilla')
  }

  function cambiarCompacto() {
    setCompacto(!compacto)
  }

  const claseColumna = vista === 'grilla' ? 'col-12 col-md-6 col-lg-4' : 'col-12'
  const claseEspaciado = compacto ? 'py-2' : 'py-5'
  const claseGap = compacto ? 'g-2' : 'g-4'

  return (
    <main className={`container ${claseEspaciado}`}>
      <h1 className="mb-4">Catálogo de Talleres</h1>

      <div className="mb-4 d-flex gap-2 flex-wrap">
        <Boton onClick={cambiarTema}>
          {tema === 'claro' ? 'Tema oscuro' : 'Tema claro'}
        </Boton>

        <Boton variante="secundario" onClick={cambiarVista}>
          {vista === 'grilla' ? 'Ver en lista' : 'Ver en grilla'}
        </Boton>

        <Boton variante="secundario" activo={compacto} onClick={cambiarCompacto}>
          {compacto ? 'Modo normal' : 'Modo compacto'}
        </Boton>
      </div>

      <div className={`row ${claseGap}`}>
        {talleres.map(taller => (
          <div key={taller.id} className={claseColumna}>
            <TarjetaTaller taller={taller} vista={vista} />
          </div>
        ))}
      </div>
    </main>
  )
}

export default App