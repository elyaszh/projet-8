import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import data from "../../data/logements.json";
import Info from "../Info/Info";
import Slideshow from "../Slide/Slides";
import Stars from "../Stars/Stars";
import "./Logement.css";

export default function Logement() {
  const [logement, setLogement] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const appart = data.find((appart) => appart.id === id);

    if (appart === undefined) {
      return navigate("/erreur-404");
    }

    setLogement(appart);
  }, [id]);

  if (logement === null) return <div>Ca chauffe...</div>;

  return (
    <>
      <Slideshow images={logement.pictures} />
      <header className="logement">
        <section className="infos">
          <h1 className="title">{logement.title}</h1>
          <div className="location">{logement.location}</div>
          <div className="tags">
            {logement.tags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </div>
        </section>
        <section className="host">
            <div className="host-infos">
                      <h2>{logement.host.name}</h2>
          <img src={logement.host.picture} alt={logement.host.name} />
            </div>
    
          <Stars rating={logement.rating} />
        </section>
      </header>
      <div className="descriptions">
        <Info title="description" content={logement.description} />
        <Info title="equipements" equipments={logement.equipments} />
      </div>
    </>
  );
}
