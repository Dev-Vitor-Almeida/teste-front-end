import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Categories from './components/Categories/Categories'
import Products from './components/Products/Products'
import PartnerBanners from './components/PartnerBanners/PartnerBanners'
import Brands from './components/Brands/Brands'
import Newsletter from './components/Newsletter/Newsletter'
import Footer from './components/Footer/Footer'
import './App.scss'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Categories />

        <section id="vitrine-1" aria-label="Produtos relacionados">
          <Products />
        </section>

        <PartnerBanners variant="first" />

        <section
          id="vitrine-2"
          className="products-section--second"
          aria-label="Produtos relacionados"
        >
          <Products variant="all" />
        </section>

        <PartnerBanners variant="second" />
        <Brands />

        <section id="vitrine-3" aria-label="Produtos relacionados">
          <Products variant="all" />
        </section>

        <Newsletter />
      </main>

      <Footer />

      <div className="footer-bottom">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </>
  )
}

export default App