import Thumbnail from '../components/Thumbnail/Thumbnail'
import Data from '../data/logements.json'

import Banner from '../components/Banner/Banner'

import './home.css'
export default function Home() {
    console.log(Data)
    return (
        <>
        <Banner />
        <div className="thumbnails">
          { Data.map(item => <Thumbnail key={item.id} logement={item} />) }
        </div>
    
        </>

    )
}