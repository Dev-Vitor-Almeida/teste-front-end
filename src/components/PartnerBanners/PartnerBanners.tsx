
import './PartnerBanners.scss'

import bannerCentral from '../../assets/banner-central.png'
import bannerCentral2 from '../../assets/banner-central2.png'

interface PartnerBannersProps {
  variant: 'first' | 'second'
}

function PartnerBanner({ image }: { image: string }) {
  return (
    <article
      className="partner-banner"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="partner-banner__content">
        <h2>Parceiros</h2>
        <p>Lorem ipsum dolor sit
          <br /> amet, consectetur</p> 
        <a href="#marcas" className="partner-banner__button">
          Confira
        </a>
      </div>
    </article>
  )
}

function PartnerBanners({ variant }: PartnerBannersProps) {
  const image = variant === 'first' ? bannerCentral : bannerCentral2

  return (
    <section
      id={variant === 'first' ? 'banner-parceiros' : 'banner-parceiros-2'}
      className="partner-banners"
      aria-label="Banners de parceiros"
    >
      <PartnerBanner image={image} />
      <PartnerBanner image={image} />
    </section>
  )
}

export default PartnerBanners
