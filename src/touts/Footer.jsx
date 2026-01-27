import { Link } from "react-router-dom";

function Footer() {

    return (
        <footer>
  <div className="footer-container">
   
    <div className="footer-brand">
      <h3>E‑Petitpas</h3>
      <p>Votre partenaire pour une carrière réussie en tech et management.</p>
    </div>

  
    <div className="footer-links">
      <h4>Nos Formations</h4>
      <ul>
        <li><Link to="/formation">Développement Web & Mobile (DWWM)</Link></li>
        <li><Link to="/formation">Technicien Supérieur Systèmes & Réseaux (TSSR)</Link></li>
      </ul>
    </div>

   
    <div className="footer-links">
      <h4>L'École</h4>
      <ul>
        <li><Link to="apropos.html">À Propos de Nous</Link></li>
        <li><Link to="contact.html">Nous Contacter</Link></li>
        <li><Link to="financement.html">Options de Financement</Link></li>
        <li><Link to="entreprises.html">Espace Entreprises</Link></li>
        <li><Link to="plan.html">Plan du Site</Link></li>
      </ul>
    </div>

    <div className="footer-links">
      <h4>Nos Résultats</h4>
      <ul>
        <li><Link to="resultats.html">Résultats 2024</Link></li>
        <li><Link to="handicap.html">Politique Handicap 2025</Link></li>
      </ul>
    </div>
  </div>


  <div className="footer-bottom">
    <p>© 2026 e‑Petitpas Learning. Tous droits réservés.</p>
    <p>
      <Link to="#">Politique de confidentialité</Link> | 
      <Link to="#">Conditions d'utilisation</Link> | 
      <Link to="#">Politique de cookies</Link>
    </p>
  </div>
</footer>
    )
}
export default Footer;