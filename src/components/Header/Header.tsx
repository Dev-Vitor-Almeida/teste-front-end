
import './Header.scss'

function Header() {
  return (
    <header className="header">
      {/* Barra de benefícios */}
      <div className="header__benefits">
        <div className="header__benefit">
          <span aria-hidden="true">✓</span>
          <p>Compra <strong>100% segura</strong></p>
        </div>

        <div className="header__benefit">
          <span aria-hidden="true">🚚</span>
          <p><strong> Frete grátis </strong> acima de R$ 200</p>
        </div>

        <div className="header__benefit">
          <span aria-hidden="true">▤</span>
          <p><strong>Parcele</strong> suas compras</p>
        </div>
      </div>

      {/* Área principal do cabeçalho */}
      <div className="header__main">
        <a href="/" className="header__logo" aria-label="Econverse - Página inicial">
          ECON<span>VERSE</span>
        </a>

        <form className="header__search" role="search">
          <label className="visually-hidden" htmlFor="product-search">
            Buscar produtos
          </label>

          <input
            id="product-search"
            type="search"
            placeholder="O que você está buscando?"
          />

          <button type="submit" aria-label="Pesquisar">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="10.8" cy="10.8" r="6.8" />
              <path d="m16 16 5 5" />
            </svg>
          </button>
        </form>

        <div className="header__actions">
          <button type="button" aria-label="Favoritos">
            ♡
          </button>

          <button type="button" aria-label="Minha conta">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="8" r="3.5" />
              <path d="M5 21c0-4 2.8-6.5 7-6.5s7 2.5 7 6.5" />
            </svg>
          </button>

          <button type="button" aria-label="Carrinho de compras">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 4h2l2.5 11h10L20 8H6" />
              <circle cx="9" cy="19" r="1.2" />
              <circle cx="17" cy="19" r="1.2" />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu de navegação */}
      <nav className="header__nav" aria-label="Navegação principal">
        <a href="#categorias">Todas as categorias</a>
        <a href="#supermercado">Supermercado</a>
        <a href="#livros">Livros</a>
        <a href="#moda">Moda</a>
        <a href="#lancamentos">Lançamentos</a>
        <a href="#ofertas" className="header__nav-highlight">
          Ofertas do dia
        </a>
      </nav>
    </header>
  )
}

export default Header
