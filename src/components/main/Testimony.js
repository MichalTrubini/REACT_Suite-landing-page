import jeremyImage from '../../assets/image-jeremy-small.webp';
import jeremyImage2x from '../../assets/image-jeremy-small@2x.webp';
import '../../css/testimony.css'

function Testimony() {
    return ( 
        <section className="testimony">
            <div className="testimony__image-container">
                <picture>
                        <source 
                            srcSet={jeremyImage2x}
                            media="(min-width:800px)"
                        />
                        <img 
                            src={jeremyImage}
                            alt="Jeremy"
                            className='testimony__image'
                        />
                </picture>
            </div>
            <div className='testimony__oval'></div>
            <div className='testimony__content'>
                <h2 className='testimony__heading'>It just <span className='testimony__heading--bold'>works</span></h2>
                <p className='testimony__quote'>“I really like how it is an all-in-one solution that handle many of the tasks that you would normally need separate tools to do the same job. This thing is a miracle worker.”</p>
                <p className='testimony__name'>Jeremy Robinson</p>
                <p className='testimony__company'>cmo, fylo</p>
            </div>
        </section>
     );
}

export default Testimony;