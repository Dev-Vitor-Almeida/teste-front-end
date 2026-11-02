
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Categories from './components/Categories/Categories'
import './App.scss'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Categories />

        <section id="categorias" aria-label="Categorias">
          {/* Categorias */}
        </section>

        <section id="vitrine-1" aria-label="Produtos relacionados">
          {/* Primeira vitrine de produtos */}
        </section>

        <section id="banner-parceiros" aria-label="Marcas parceiras">
          {/* Banner de parceiros */}
        </section>

        <section id="vitrine-2" aria-label="Mais produtos">
          {/* Segunda vitrine de produtos */}
        </section>

        <section id="marcas" aria-label="Marcas">
          {/* Marcas parceiras */}
        </section>

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

