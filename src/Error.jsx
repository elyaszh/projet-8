import { Link } from "react-router-dom";

import './Error.css'


function Error() {
    return (
        <section className="Error">
            <h1 className="Error-404">404</h1>
            <h2 className="Error-msg">Oups! La page que vous demandez n' existe pas.</h2>
            <Link to="/" className="backlink">Retourner sur la page d'accueil</Link>

        </section>
    )
}

export default Error