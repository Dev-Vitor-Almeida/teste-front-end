
import './Hero.scss'
import bannerPrincipal from '../../assets/banner-principal.svg'

function Hero() {
  return (
    <section className="hero">
      <img
        className="hero__background"
        src={bannerPrincipal}
        alt=""
      />

      <div className="hero__content">
        <h1>Venha conhecer nossas promoções</h1>

        <p>
          <strong>50% Off</strong> nos produtos
        </p>

        <a href="#vitrine-1" className="hero__button">
          Ver produto
        </a>
      </div>
    </section>
  )
}

export default Hero
