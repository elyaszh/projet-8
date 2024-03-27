import './banner.css';
import BannerHome from '../../assets/banner-home.png';
import BannerAbout from '../../assets/banner-about.png';

export default function Banner({ aboutPage = false }) {
    return (
        <figure className='banner'>
            <img src={aboutPage ? BannerAbout : BannerHome} alt="bannere de la page" />
            {/* \:<div className="overlay"></div> */}
           {!aboutPage && <figcaption>Chez vous, <span>partout et ailleurs.</span></figcaption>}
        </figure>
    )
}