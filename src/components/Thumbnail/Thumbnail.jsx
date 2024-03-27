import { Link } from 'react-router-dom'
import './Thumbnail.css'

export default function Thumbnail({ logement }) {
    return (
        <Link to={`/logement/${logement.id}`}>
        <figure className='thumbnail'>
            <img src={logement.cover} alt={logement.title} />
            <figcaption>{logement.title}</figcaption>
        </figure>
        </Link>
    )
}