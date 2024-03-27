import Banner from "../components/Banner/Banner";
import Info from '../components/Info/Info'
import "./About.css"


export default function About() {

    return (
 <>
    <Banner aboutPage />
    
    <div className="container-info">
    <Info
    title="Fiabilité"
    content="les annonces postées sur Kaza garantissent une fiabilité total. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    />
    <Info 
    title="Respect"
    content="la bienveillance fait partie des valeurs fondatrices de Kaza. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."
    />
    <Info 
    title="Services"
    content="Nos équipes se tiennent à votre disposition pour vous fournirune expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    />
    <Info 
    title="Sécurité"
    content="La sécurité est la priorité de Kaza. Aussi bien pour nos hotes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hote qu'au locataire , cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hotes."
    />
    </div>

 </>
  
    )
}