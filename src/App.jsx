import { useState, useEffect } from 'react'
import { talleres } from './data/talleres'
import TarjetaTaller from './components/TarjetaTaller/TarjetaTaller'

function App() {
  const [tema, setTema] = useState('claro')

  useEffect(() => {
    document.body.setAttribute('data-tema', tema)
  }, [tema])

  function cambiarTema() {
    setTema(tema === 'claro' ? 'oscuro' : 'claro')
  }

  return (
    <main className="container py-5">
      <h1 className="mb-4">Catálogo de Talleres</h1>

      <button className="btn btn-primary mb-4" onClick={cambiarTema}>
        {tema === 'claro' ? 'Tema oscuro' : 'Tema claro'}
      </button>

      <div className="row g-4">
        {talleres.map(taller => (
          <div key={taller.id} className="col-12 col-md-6 col-lg-4">
            <TarjetaTaller taller={taller} />
          </div>
        ))}
      </div>
    </main>
  )
}

export default App