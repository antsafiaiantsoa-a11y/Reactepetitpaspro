import { Link } from "react-router-dom";


function Financement() {
  return (
    <>
      {/* Hero */}
      <section className="hero text-center">
        <h1>Financez Votre Avenir Professionnel</h1>
        <p>
          Chez E-Petitpas, nous vous aidons à trouver la solution de financement
          adaptée à votre situation pour vous concentrer sur l’essentiel :
          votre réussite.
        </p>
      </section>

      {/* Solutions rapides */}
      <section className="financement-solutions py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 text-primary">
            Explorer les solutions de financement
          </h2>

          <div className="financement-cards">
            <div className="fin-card">
              <i className="bi bi-briefcase"></i>
              <p>Alternance</p>
            </div>

            <div className="fin-card">
              <img src="/image/fr.jpg" alt="France Travail" />
              <p>France Travail</p>
            </div>

            <div className="fin-card">
              <img src="/image/formation.jpg" alt="CPF" />
              <p>Mon Compte Formation</p>
            </div>

            <div className="fin-card">
              <i className="bi bi-person-check"></i>
              <p>Dispositifs Spécifiques</p>
            </div>

            <div className="fin-card">
              <i className="bi bi-credit-card"></i>
              <p>Personnel & Banques</p>
            </div>
          </div>
        </div>
      </section>

      {/* Alternance */}
      <section className="section accompagnement py-5">
        <div className="container">
          <div className="accompagnement-header">
            <div className="icon-circle">
              <i className="bi bi-briefcase"></i>
            </div>
            <h2>L'Alternance : Formation Pratique et Rémunérée</h2>
          </div>

          <p className="accompagnement-text">
            Plongez au cœur du métier avec l'alternance. Cette formule combine
            enseignement théorique et immersion professionnelle en entreprise.
            Non seulement votre formation est intégralement financée, mais vous
            percevez également une rémunération mensuelle. C'est une voie privilégiée
            pour une insertion rapide et réussie sur le marché du travail.
          </p>

          <ul className="accompagnement-list">
            <li>Aucun frais de scolarité à votre charge.</li>
            <li>Acquisition d'une expérience professionnelle solide et valorisée.</li>
            <li>Statut de salarié avec une rémunération mensuelle.</li>
            <li>Forte employabilité à l'obtention du diplôme.</li>
          </ul>
        </div>
      </section>

      

      {/* Blocs détaillés */}
      <section className="financement">
        <h2>Nos Solutions de Financement</h2>

        <div className="financement-block">
          <img src="/image/fr.jpg" alt="France Travail logo" className="financement-logo" />
          <div className="financement-content">
            <h3>Aides de France Travail</h3>
            <p>Si vous êtes demandeur d'emploi, France Travail (anciennement Pôle Emploi) offre diverses solutions pour financer votre projet de formation.</p>
            <ul>
              <li>L’Aide Individuelle à la Formation (AIF) complète d’autres financements.</li>
              <li>Projet validé par votre conseiller France Travail.</li>
              <li>Aides spécifiques selon profil et région.</li>
            </ul>
            <a href="#" className="btn-main">S'informer sur France Travail</a>
          </div>
        </div>

        <div className="financement-block">
          <img src="/image/formation.jpg" alt="CPF logo" className="financement-logo" />
          <div className="financement-content">
            <h3>Mon Compte Formation (CPF)</h3>
            <p>Le CPF vous permet de financer vos formations tout au long de votre vie professionnelle.</p>
            <ul>
              <li>Financement individuel, sans employeur.</li>
              <li>Accessible à tous les actifs.</li>
              <li>Procédure 100% en ligne.</li>
              <li>Formations certifiées et éligibles.</li>
            </ul>
            <a href="https://www.moncompteformation.gouv.fr" className="btn-main">Accéder à Mon Compte Formation</a>
          </div>
        </div>

        <div className="financement-block">
            <img src="public/image/capture.png" alt="CPF logo" className="financement-logo" />
          <div className="financement-content">
            <h3>CSP, POE, FSE et autres dispositifs</h3>
            <p>Des dispositifs spécifiques pour accompagner la réinsertion et l’acquisition de compétences stratégiques.</p>
            <ul>
              <li><strong>CSP :</strong> accompagnement renforcé pour licenciement économique.</li>
              <li><strong>POE :</strong> combler l’écart de compétences avant embauche.</li>
              <li><strong>FSE :</strong> projets de formation pour inclusion sociale.</li>
              <li>OPCO, Conseils Régionaux, Agefiph : aides complémentaires.</li>
            </ul>
          </div>
        </div>

        <div className="financement-block">
            <img src="public/image/captur1.png" alt="CPF logo" className="financement-logo" />
          <div className="financement-content">
            <h3>Financement Personnel & Banques Partenaires</h3>
            <p>Investir dans votre formation est une décision stratégique pour votre avenir.</p>
            <ul>
              <li>Échéanciers de paiement personnalisés.</li>
              <li>Prêts étudiants ou crédits formation via banques partenaires.</li>
              <li>Possibles déductions fiscales.</li>
            </ul>
            <a href="#" className="btn-main">Contactez-nous</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-finance text-center">
        <div className="cta-icon">💡</div>
        <h2>Un Projet de Formation ? Parlons Financement !</h2>
        <p>
          Chaque parcours est unique. Nos conseillers dédiés sont là pour vous aider
          à identifier les solutions de financement les plus adaptées à votre profil
          et à vos ambitions. Prenez contact dès aujourd’hui.
        </p>

        <div className="cta-buttons">
          <Link to="/contact" className="btn btn-warning">
            📞 Demander un Rappel Gratuit
          </Link>
          <Link to="/contact" className="btn btn-outline-light">
            Poser une Question
          </Link>
        </div>
      </section>
    </>
  );
}

export default Financement;
