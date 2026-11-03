
import { useState } from 'react'
import logo from '../../assets/icons/logo.svg'
import busca from '../../assets/icons/busca.svg'
import pedidos from '../../assets/icons/pedidos.svg'
import favoritos from '../../assets/icons/coracao.svg'
import usuario from '../../assets/icons/usuario.svg'
import carrinho from '../../assets/icons/carrinho.svg'
import coroa from '../../assets/icons/coroa.svg'
import escudo from '../../assets/icons/escudo.svg'
import caminhao from '../../assets/icons/caminhao.svg'
import cartao from '../../assets/icons/cartao.svg'
import divisor from '../../assets/icons/linhas.svg'
import './Header.scss'

function Header() {
  const [activeLink, setActiveLink] = useState('Ofertas do dia')

  const benefits = [
    {
      icon: escudo,
      text: <>Compra <strong>100% segura</strong></>,
    },
    {
      icon: caminhao,
      text: <><strong>Frete grátis</strong> acima de R$ 200</>,
    },
    {
      icon: cartao,
      text: <><strong>Parcele</strong> suas compras</>,
    },
  ]

  const actions = [
    { icon: pedidos, label: 'Pedidos e devoluções' },
    { icon: favoritos, label: 'Favoritos' },
    { icon: usuario, label: 'Minha conta' },
    { icon: carrinho, label: 'Carrinho de compras' },
  ]

  const links = [
    'Todas Categorias',
    'Supermercado',
    'Livros',
    'Moda',
    'Lançamentos',
    'Ofertas do dia',
    'Assinatura',
  ]

  return (
    <header className="header">
      <div className="header__benefits">
        {benefits.map((benefit, index) => (
          <div className="header__benefit" key={index}>
            <img src={benefit.icon} alt="" />
            <p>{benefit.text}</p>
            {index < benefits.length - 1 && (
              <img className="header__divider" src={divisor} alt="" />
            )}
          </div>
        ))}
      </div>

      <div className="header__main">
        <img className="header__logo" src={logo} alt="Econverse" />

        <form
          className="header__search"
          role="search"
          onSubmit={(event) => event.preventDefault()}
        >
          <label className="visually-hidden" htmlFor="product-search">
            Buscar produtos
          </label>

          <input
            id="product-search"
            type="search"
            placeholder="O que você está buscando?"
          />

          <button type="submit" aria-label="Pesquisar">
            <img src={busca} alt="" />
          </button>
        </form>

        <div className="header__actions">
          {actions.map((action) => (
            <button type="button" aria-label={action.label} key={action.label}>
              <img src={action.icon} alt="" />
            </button>
          ))}
        </div>
      </div>

      <nav className="header__nav" aria-label="Navegação principal">
        {links.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replaceAll(' ', '-')}`}
            className={
              activeLink === item ? 'header__nav-link--active' : ''
            }
            onClick={() => setActiveLink(item)}
          >
            {item === 'Assinatura' && (
              <img src={coroa} alt="" />
            )}
            {item}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header
