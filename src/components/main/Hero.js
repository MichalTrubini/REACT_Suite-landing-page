import imageHero from '../../assets/image-hero-landscape.webp'
import imageHero2x from '../../assets/image-hero-landscape@2x.webp'
import Button from '../UI/Button';
import '../../css/hero.css'
import Stats from './Stats';
import Page from '../UI/Page';

function Hero () {
    return ( 
        <Page>
            <section className="hero">
                <div className="hero__about">
                    <div className="hero__content">
                        <h1 className="hero__heading">A <span className="hero__heading--bold">super solution</span> for your <span className="hero__heading--bold">business.</span></h1>
                        <p className='hero__paragraph'>Our marketing and sales automations help you scale your outreach to get more leads for your company.</p>
                        <Button className="hero__button">Request Beta access</Button>
                    </div>
                    <div className="hero__image-container">
                        <img srcSet={`${imageHero} 343w,
                                    ${imageHero2x} 686w`}
                            sizes="(max-width: 375px) 343px, 686px"
                            src={imageHero}
                            alt="hero">
                        </img>
                    </div>
                </div>
                <div className="hero__stats">
                    <Stats />
                </div>
            </section>
        </Page>
     );
}

export default Hero ;