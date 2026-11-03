import { type FormEvent } from 'react'
import './Newsletter.scss'

function Newsletter() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    alert('Cadastro enviado!')
  }

  return (
    <section className="newsletter" aria-label="Newsletter">
      <div className="newsletter__content">
        <div className="newsletter__text">
          <h2>Inscreva-se na nossa newsletter</h2>
          <p>
            Assine a nossa newsletter e receba as novidades e
            conteúdos exclusivos da Econverse.
          </p>
        </div>

        <form className="newsletter__form" onSubmit={handleSubmit}>
          <div className="newsletter__fields">
            <input
              type="text"
              placeholder="Digite seu nome"
              aria-label="Seu nome"
              required
            />

            <input
              type="email"
              placeholder="Digite seu e-mail"
              aria-label="Seu e-mail"
              required
            />

            <button type="submit">INSCREVER</button>
          </div>

          <label className="newsletter__terms">
            <input type="checkbox" required />
            <span>Aceito os termos e condições</span>
          </label>
        </form>
      </div>
    </section>
  )
}

export default Newsletter
