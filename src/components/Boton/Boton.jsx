import estilos from './Boton.module.css'

export default function Boton({ children, variante = 'primario', activo = false, onClick, type = 'button' }) {
  const claseVariante = variante === 'secundario' ? estilos.secundario : estilos.primario
  const claseActivo = activo ? estilos.activo : ''

  return (
    <button
      type={type}
      className={`${estilos.boton} ${claseVariante} ${claseActivo}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}