
import { useState } from 'react'
import './Categories.scss'

import tecnologia from '../../assets/icons/tecnologia.png'
import supermercado from '../../assets/icons/supermercado.svg'
import bebidas from '../../assets/icons/bebidas.svg'
import ferramentas from '../../assets/icons/ferramentas.svg'
import saude from '../../assets/icons/saude.svg'
import esportes from '../../assets/icons/esportes-fitness.svg'
import moda from '../../assets/icons/moda.svg'

const categories = [
  { name: 'Tecnologia', icon: tecnologia },
  { name: 'Supermercado', icon: supermercado },
  { name: 'Bebidas', icon: bebidas },
  { name: 'Ferramentas', icon: ferramentas },
  { name: 'Saúde', icon: saude },
  { name: 'Esportes e Fitness', icon: esportes },
  { name: 'Moda', icon: moda },
]

function Categories() {
  const [selectedCategory, setSelectedCategory] = useState('Tecnologia')

  return (
    <section className="categories" aria-label="Categorias">
      <div className="categories__list">
        {categories.map((category) => (
          <button
            key={category.name}
            type="button"
            className={`categories__item ${
              selectedCategory === category.name ? 'categories__item--selected' : ''
            }`}
            onClick={() => setSelectedCategory(category.name)}
            aria-pressed={selectedCategory === category.name}
          >
            <span className="categories__icon">
              <img src={category.icon} alt="" />
            </span>

            <span className="categories__name">{category.name}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

export default Categories
