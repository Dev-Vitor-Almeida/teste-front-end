
import { useEffect, useRef, useState } from 'react'
import './Products.scss'

interface Product {
  productName: string
  descriptionShort: string
  photo: string
  price: number
}

interface ProductsResponse {
  success: boolean
  products: Product[]
}

interface ProductsProps {
  variant?: 'default' | 'all'
}

const categories = [
  'CELULAR',
  'ACESSÓRIOS',
  'TABLETS',
  'NOTEBOOKS',
  'TVS',
  'VER TODOS',
]

function Products({ variant = 'default' }: ProductsProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('CELULAR')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [quantity, setQuantity] = useState(1)

  const carouselRef = useRef<HTMLDivElement>(null)

  const showCategories = variant === 'default'

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          '/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'
        )

        if (!response.ok) {
          throw new Error('Não foi possível buscar os produtos.')
        }

        const data: ProductsResponse = await response.json()

        if (!data.success) {
          throw new Error('A API não conseguiu carregar os produtos.')
        }

        setProducts(data.products)
      } catch (error) {
        setError('Ocorreu um erro ao carregar os produtos.')
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setSelectedProduct(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  function moveCarousel(direction: 'left' | 'right') {
    if (!carouselRef.current) return

    const distance = carouselRef.current.clientWidth

    carouselRef.current.scrollBy({
      left: direction === 'right' ? distance : -distance,
      behavior: 'smooth',
    })
  }

  function openProductModal(product: Product) {
    setSelectedProduct(product)
    setQuantity(1)
  }

  if (loading) return <p>Carregando produtos...</p>
  if (error) return <p>{error}</p>

  return (
    <section className={`products products--${variant}`}>
      <div className="products__heading">
        <span />
        <h2>Produtos relacionados</h2>
        <span />
      </div>

      {showCategories ? (
        <div className="products__tabs">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                selectedCategory === category
                  ? 'products__tab products__tab--active'
                  : 'products__tab'
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      ) : (
        <a href="#vitrine-2" className="products__all-link">
          VER TODOS
        </a>
      )}

      <div className="products__carousel">
        <button
          className="products__arrow products__arrow--left"
          type="button"
          aria-label="Produtos anteriores"
          onClick={() => moveCarousel('left')}
        >
          ‹
        </button>

        <div className="products__list" ref={carouselRef}>
          {products.map((product, index) => (
            <article
              className="products__card"
              key={`${product.productName}-${index}`}
            >
              <div className="products__image">
                <img src={product.photo} alt={product.productName} />
              </div>

              <div className="products__details">
                <p className="products__description">
                  {product.descriptionShort}
                </p>

                <strong className="products__price">
                  {product.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </strong>

                <span className="products__shipping">Frete grátis</span>

                <button
                  type="button"
                  className="products__buy"
                  onClick={() => openProductModal(product)}
                >
                  COMPRAR
                </button>
              </div>
            </article>
          ))}
        </div>

        <button
          className="products__arrow products__arrow--right"
          type="button"
          aria-label="Próximos produtos"
          onClick={() => moveCarousel('right')}
        >
          ›
        </button>
      </div>

      {selectedProduct && (
        <div
          className="products__modal-overlay"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="products__modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="products__modal-close"
              aria-label="Fechar janela"
              onClick={() => setSelectedProduct(null)}
            >
              ×
            </button>

            <div className="products__modal-image">
              <img
                src={selectedProduct.photo}
                alt={selectedProduct.productName}
              />
            </div>

            <div className="products__modal-details">
              <h2 id="product-modal-title">
                {selectedProduct.productName}
              </h2>

              <strong className="products__modal-price">
                {selectedProduct.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </strong>

              <p>{selectedProduct.descriptionShort}</p>

              <a href="#detalhes-produto" className="products__modal-link">
                Veja mais detalhes do produto &gt;
              </a>

              <div className="products__modal-actions">
                <div className="products__quantity">
                  <button
                    type="button"
                    aria-label="Diminuir quantidade"
                    disabled={quantity <= 1}
                    onClick={() => setQuantity((current) => current - 1)}
                  >
                    −
                  </button>

                  <span>{String(quantity).padStart(2, '0')}</span>

                  <button
                    type="button"
                    aria-label="Aumentar quantidade"
                    onClick={() => setQuantity((current) => current + 1)}
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  className="products__modal-buy"
                  onClick={() => setSelectedProduct(null)}
                >
                  COMPRAR
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Products
