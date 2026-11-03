
import './Footer.scss'

import logoEconverse from '../../assets/icons/logo.svg'
import instagram from '../../assets/icons/instagram.svg'
import facebook from '../../assets/icons/facebook.svg'
import linkedin from '../../assets/icons/linkedin.svg'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__brand">
          <div className="footer__brand-info">
            <div className="footer__logo">
              <img src={logoEconverse} alt="Econverse" />
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="footer__social">
            <a
              href="https://www.instagram.com/econverse.ag/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img src={instagram} alt="" />
            </a>

            <a
              href="https://web.facebook.com/agenciaeconverse/?locale=pt_BR"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img src={facebook} alt="" />
            </a>

            <a
              href="https://www.linkedin.com/company/econverse/home/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img src={linkedin} alt="" />
            </a>
          </div>
        </div>

        <div className="footer__divider" />

        <nav className="footer__links" aria-label="Links do rodapé">
          <div className="footer__column">
            <h3>Institucional</h3>
            <a href="#">Sobre Nós</a>
            <a href="#">Movimento</a>
            <a href="#">Trabalhe conosco</a>
          </div>

          <div className="footer__column">
            <h3>Ajuda</h3>
            <a href="#">Suporte</a>
            <a href="#">Fale Conosco</a>
            <a href="#">Perguntas Frequentes</a>
          </div>

          <div className="footer__column">
            <h3>Termos</h3>
            <a href="#">Termos e Condições</a>
            <a href="#">Política de Privacidade</a>
            <a href="#">Troca e Devolução</a>
          </div>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
