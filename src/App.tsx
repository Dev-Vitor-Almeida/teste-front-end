
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Categories from './components/Categories/Categories'
import Products from './components/Products/Products'
import PartnerBanners from './components/PartnerBanners/PartnerBanners'
import Brands from './components/Brands/Brands'
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

        <section id="vitrine-2"                          className="products-section--second"        aria-label="Produtos relacionados">
          <Products variant="all" />
        </section>

        <PartnerBanners variant="second" />

        <Brands />

        <section id="vitrine-3" aria-label="Ofertas">
          {/* Terceira vitrine de produtos */}
        </section>

        <section id="newsletter" aria-label="Newsletter">
          {/* Cadastro de newsletter */}
        </section>
      </main>

      <footer>
        {/* Rodapé */}
      </footer>
    </>
  )
}

export default App
