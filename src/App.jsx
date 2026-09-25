import { useState, useEffect } from 'react'

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
      <h1>Catálogo de Talleres</h1>

      <button className="btn btn-primary" onClick={cambiarTema}>
        {tema === 'claro' ? 'Tema oscuro' : 'Tema claro'}
      </button>
    </main>
  )
}

export default App