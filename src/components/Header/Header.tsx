
import { useState } from 'react'
import logoMarcas from '../../assets/logo-navegacao.png'
import './Header.scss'

function Header() {
  const [activeLink, setActiveLink] = useState('Ofertas do dia')

  return (
    <header className="header">
      <div className="header__benefits">
        <div className="header__benefit">
          <span aria-hidden="true">✓</span>
          <p>Compra <strong>100% segura</strong></p>
        </div>

        <div className="header__benefit">
          <span aria-hidden="true">🚚</span>
          <p><strong>Frete grátis</strong> acima de R$ 200</p>
        </div>

        <div className="header__benefit">
          <span aria-hidden="true">▤</span>
          <p><strong>Parcele</strong> suas compras</p>
        </div>
      </div>

      <div className="header__main">
        <img
          className="header__logo"
          src={logoMarcas}
          alt="Econverse"
        />

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
          {/* Ícone de compras/devolução */}
          <button type="button" aria-label="Pedidos e devoluções">
            <svg
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M21.0896 0.199958C21.3512 0.223887 21.5919 0.406602 21.6852 0.652163L24.1558 7.36906C24.1845 7.44652 24.1995 7.52907 24.1999 7.6117V11.494C24.2052 11.867 23.867 12.21 23.494 12.21C23.121 12.21 22.7829 11.867 22.7881 11.494V8.31758H1.61171V22.7881H22.7881V15.7293H13.9646V17.494C13.9628 17.9946 13.3078 18.3555 12.8837 18.0896L9.0014 15.619C8.60272 15.3653 8.60272 14.6816 9.0014 14.4279L12.8837 11.9573C13.0223 11.8664 13.1936 11.8266 13.358 11.847C13.6934 11.8946 13.968 12.2141 13.9646 12.5529V14.3176H23.494C23.8636 14.3176 24.1999 14.6539 24.1999 15.0234V23.494C24.1999 23.8636 23.867 24.1999 23.494 24.1999H0.90583C0.536242 24.1999 0.199987 23.8636 0.19995 23.494V7.6117C0.199835 7.55226 0.207268 7.49281 0.22201 7.43523L1.98671 0.718339C2.06839 0.421953 2.3631 0.198545 2.67053 0.199958C8.80875 0.199958 14.9561 0.199958 21.0896 0.199958ZM20.5271 1.61172H13.2587V6.90582H22.4793L20.5271 1.61172ZM11.847 1.61172H3.21097L1.82127 6.90582H11.847V1.61172ZM12.5529 13.8323L10.6889 15.0234L12.5529 16.2146V13.8323Z"
                strokeWidth="0.4"
                stroke="#9F9F9F"
              />
            </svg>
          </button>

          {/* Favoritos */}
          <button type="button" aria-label="Favoritos">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.8 8.8c0 4.2-8.8 11-8.8 11s-8.8-6.8-8.8-11a4.8 4.8 0 0 1 8.8-2.6 4.8 4.8 0 0 1 8.8 2.6Z" />
            </svg>
          </button>

          {/* Minha conta */}
          <button type="button" aria-label="Minha conta">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="8" r="3.5" />
              <path d="M5 21c0-4 2.8-6.5 7-6.5s7 2.5 7 6.5" />
            </svg>
          </button>

          {/* Carrinho */}
          <button type="button" aria-label="Carrinho de compras">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 4h2l2.5 11h10L20 8H6" />
              <circle cx="9" cy="19" r="1.2" />
              <circle cx="17" cy="19" r="1.2" />
            </svg>
          </button>
        </div>
      </div>

      <nav className="header__nav" aria-label="Navegação principal">
        {[
          'Todas as categorias',
          'Supermercado',
          'Livros',
          'Moda',
          'Lançamentos',
          'Ofertas do dia',
          'Assinatura',
        ].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replaceAll(' ', '-')}`}
            className={activeLink === item ? 'header__nav-link--active' : ''}
            onClick={() => setActiveLink(item)}
          >
            {item === 'Assinatura' && (
              <svg
                width="19"
                height="15"
                viewBox="0 0 19 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M3.00447 13.1519C3.02395 13.234 3.05985 13.3114 3.11002 13.3793C3.16018 13.4472 3.22356 13.5043 3.29636 13.5471C3.36915 13.5899 3.44984 13.6175 3.53359 13.6283C3.61733 13.6391 3.70239 13.6328 3.78365 13.6098C7.50937 12.5811 11.4441 12.5808 15.1701 13.6088C15.2513 13.6317 15.3363 13.6379 15.42 13.6271C15.5037 13.6164 15.5844 13.5888 15.6572 13.546C15.7299 13.5032 15.7933 13.4462 15.8435 13.3783C15.8936 13.3104 15.9296 13.2331 15.9491 13.151L17.9404 4.68874C17.967 4.57545 17.9615 4.45698 17.9245 4.34665C17.8874 4.23632 17.8203 4.13853 17.7307 4.06428C17.6411 3.99003 17.5325 3.94229 17.4172 3.92641C17.3019 3.91054 17.1845 3.92718 17.0782 3.97444L13.1263 5.73082C12.9836 5.79425 12.8223 5.80195 12.6742 5.75242C12.5261 5.7029 12.4019 5.59972 12.3261 5.46322L10.0251 1.32147C9.97101 1.22404 9.89181 1.14286 9.79575 1.08633C9.69968 1.02981 9.59025 1 9.47879 1C9.36733 1 9.2579 1.02981 9.16184 1.08633C9.06577 1.14286 8.98657 1.22404 8.93244 1.32147L6.63148 5.46322C6.55564 5.59972 6.43145 5.7029 6.28336 5.75242C6.13526 5.80195 5.97399 5.79424 5.83129 5.73082L1.87884 3.97418C1.77251 3.92692 1.6551 3.91028 1.53983 3.92614C1.42455 3.942 1.316 3.98972 1.22638 4.06393C1.13676 4.13814 1.06964 4.2359 1.03257 4.34619C0.995496 4.45649 0.989952 4.57494 1.01656 4.68822L3.00447 13.1519Z"
                  stroke="#9F9F9F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
            {item}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header
