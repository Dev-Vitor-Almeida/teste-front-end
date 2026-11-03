
import './Brands.scss'
import logoMarcas from '../../assets/logo-navegacao.png'

function Brands() {
  return (
    <section id="marcas" className="brands" aria-labelledby="brands-title">
      <h2 id="brands-title" className="brands__title">
        Navegue por marcas
      </h2>

      <div className="brands__list">
        {Array.from({ length: 5 }, (_, index) => (
          <a
            href="#"
            className="brands__item"
            key={index}
            aria-label={`Marca ${index + 1}`}
          >
            <img src={logoMarcas} alt="" />
          </a>
        ))}
      </div>
    </section>
  )
}

export default Brands
