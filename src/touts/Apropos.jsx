function Apropos() {
  return (
    <>
      <section className="hero-apropos text-center">
        <h1>
          Transformez votre avenir <br />avec E-PetitPas
        </h1>
        <p>
          Chez E-PetitPas, nous croyons en un monde où chacun peut <br />
          accéder à une formation d’excellence en informatique <br /> et
          management, sans barrière ni frontière.
        </p>
      </section>

      <section className="container my-5">
        <h2 className="text-center">Nos Réalisations en Chiffres</h2>
        <p className="text-center">
          L’impact de notre engagement envers l’excellence et la réussite de nos
          apprenants.
        </p>

        <div className="stats-grid">
          <div className="stat-card">
            <i className="bi bi-graph-up"></i>
            <h2>+90%</h2>
            <p>Taux de réussite 2024</p>
          </div>

          <div className="stat-card">
            <i className="bi bi-mortarboard"></i>
            <h2>86%</h2>
            <p>Insertion pro en 6 mois</p>
          </div>

          <div className="stat-card">
            <i className="bi bi-people"></i>
            <h2>200+</h2>
            <p>Objectif apprenants 2025</p>
          </div>

          <div className="stat-card">
            <i className="bi bi-building"></i>
            <h2>10+</h2>
            <p>Parcours & micro-certifications</p>
          </div>
        </div>
      </section>

      <section className="mission-section my-5">
        <div className="container mission-card">
          <h2 className="text-center mb-4">Notre Mission</h2>
          <p className="text-center">
            Nous sommes convaincus que chacun mérite un accès à une formation de
            haute <br /> qualité en informatique et management. Notre mission est
            de lever les barrières à <br />
            l’entrée et de créer un environnement d’apprentissage bienveillant et
            stimulant, où <br /> chaque apprenant peut pleinement s’épanouir et
            réussir.
          </p>

          <div className="row mt-5 align-items-center text-center">
            <div className="col-md-6 mb-4">
              <h5 className="fw-bold">Nos Valeurs</h5>
              <ul className="list-unstyled vertical-list">
                <li>✔ Excellence pédagogique</li>
                <li>✔ Innovation continue</li>
                <li>✔ Inclusion et accessibilité</li>
                <li>✔ Accompagnement personnalisé</li>
              </ul>
            </div>

            <div className="col-md-6 mb-4">
              <h5 className="fw-bold">Notre Approche</h5>
              <ul className="list-unstyled vertical-list">
                <li>✔ Formations pratiques et certifiantes</li>
                <li>✔ Apprentissage orienté métier</li>
                <li>✔ Suivi individualisé</li>
                <li>✔ Partenariats professionnels</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container my-5">
        <h2 className="text-center mb-4">Notre Équipe de Direction</h2>

        <div className="row g-4 justify-content-center">
          <div className="col-md-4">
            <div className="team-card">
              <div className="avatar blue">MM</div>
              <h5>Mme Marina BOULIER</h5>
              <p>Assistante de direction</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="team-card">
              <div className="avatar green">MA</div>
              <h5>Mr. Alix HERBENT HERIVELNA</h5>
              <p>Président Directeur Général et Formateur</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="team-card">
              <div className="avatar purple">MS</div>
              <h5>Mr. Soufiane RADOUANE</h5>
              <p>Développeur Fullstack et Assistant Formation</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Apropos;
