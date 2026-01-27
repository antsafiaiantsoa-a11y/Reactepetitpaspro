import { Link } from "react-router-dom";




function Accueil() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1>Devenez Expert en Informatique & Management avec E‑PetitPas</h1>
              <p>
                Déployez tout votre potentiel avec E‑PetitPas grâce à des formations interactives, 
                en présentiel à Argenteuil ou à distance, adaptées aux débutants comme aux professionnels.
              </p>
              <Link to="#" className="btn btn-main px-4 py-2 me-2">Voir les formations</Link>
              <Link to="#" className="btn btn-outline-light px-4 py-2">Commencer</Link>
            </div>

            <div className="col-lg-6 text-center mt-5 mt-lg-0">
              <img src="/image/web.jpg" className="img-fluid hero-img" alt="Formation en ligne" />
            </div>
          </div>
        </div>
      </section>

      <section className="features py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-white">Nos cours populaires</h2>
            <p className="text-secondary">Des formations conçues pour répondre aux besoins du marché</p>
          </div>

          <div className="row g-4">

            {/* Développement Web */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm bg-dark text-white">
                <img src="/image/mobil.jpg"className="card-img-top" alt="Développement Web" />
                <div className="card-body">
                  <h5 className="card-title">💻 Développement Web</h5>
                  <p className="card-text">
                    HTML, CSS, JavaScript, Bootstrap et bases backend pour devenir développeur web professionnel.
                  </p>
                  <span className="badge bg-primary">Certifiant</span>
                </div>
              </div>
            </div>

            {/* Anglais & IA */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm bg-dark text-white">
                <img src="/image/aprendre.jpg" className="card-img-top" alt="Management & Leadership" />
                <div className="card-body">
                  <h5 className="card-title">
                    Anglais professionnel, bureautique et intelligence artificielle
                  </h5>
                  <p className="card-text">
                    Permettre à toute personne, y compris débutante, d’acquérir les compétences linguistiques,
                    numériques et digitales nécessaires pour progresser.
                  </p>
                  <span className="badge bg-success">Voir</span>
                </div>
              </div>
            </div>

            {/* Marketing Digital */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm bg-dark text-white">
                <img src="/image/inteligen.jpg" className="card-img-t op" alt="Marketing Digital" />
                <div className="card-body">
                  <h5 className="card-title">Compétences numériques, bureautiques et intelligence</h5>
                  <p className="card-text">
                    ⭐ OBJECTIFS 🎯 Objectif général : Acquérir les compétences numériques essentielles (bureautique,
                    IA, outils web) nécessaires pour progresser.
                  </p>
                  <span className="badge bg-warning text-dark">Voir</span>
                </div>
              </div>
            </div>

            {/* Autres cours */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm bg-dark text-white">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?fit=crop&w=600&q=80"
                  className="card-img-top" alt="Data & Informatique" />
                <div className="card-body">
                  <h5 className="card-title">Anglais Général & Professionnel – Communication & Conversation</h5>
                  <p className="card-text">
                    Cette formation intensive de 96 heures permet d’acquérir les bases nécessaires pour communiquer librement en anglais.
                  </p>
                  <span className="badge bg-info text-dark">Voir</span>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm bg-dark text-white">
                <img src="/image/burau.jpg" className="card-img-top" alt="Cybersécurité" />
                <div className="card-body">
                  <h5 className="card-title">Développement Front-End moderne (HTML5, CSS3, JavaScript ES6)</h5>
                  <p className="card-text">
                    Formation pratique et intensive, 100 % en ligne. Maîtrise complète du développement front-end moderne avec HTML, CSS, JS et React/Vue.
                  </p>
                  <span className="badge bg-danger">Voir</span>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm bg-dark text-white">
                <img src="/image/A2.jpg" className="card-img-top" alt="Gestion de projet" />
                <div className="card-body">
                  <h5 className="card-title">Français A0 → A2 – Parler, Comprendre et Communiquer</h5>
                  <p className="card-text">
                    Formation complète de 288 heures destinée aux personnes ne parlant pas français (niveau A0) ou ayant de grandes difficultés d’expression.
                  </p>
                  <span className="badge bg-secondary">Voir</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="cta text-center">
            <h2 className="fw-bold mb-3">Prêt à transformer votre avenir ?</h2>
            <p className="mb-4">Rejoignez des milliers d’étudiants qui ont choisi E‑Petitpas.</p>
            <Link to="/inscription" className="btn btn-light px-5 py-2 fw-bold">S’inscrire maintenant</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Accueil;
