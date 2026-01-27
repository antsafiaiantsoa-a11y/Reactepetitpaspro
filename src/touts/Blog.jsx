function Blog() {
  return (
    <>
      <section className="hero">
        <h1>Le Blog E‑Petitpas</h1>
        <p>
          Inspirez-vous, formez-vous et réussissez ! Découvrez nos conseils,
          actualités et ressources pour booster votre carrière dans
          l’informatique, le management et la formation professionnelle.
        </p>
      </section>

      {/* Articles */}
      <section className="section articles">
        <div className="cards">
          <div className="card">
            <h3>Comment financer sa formation avec le CPF</h3>
            <span className="tag">Financement</span>
            <p>
              Le CPF permet à chacun de financer sa formation professionnelle.
              Découvrez comment l’utiliser efficacement pour booster votre
              carrière.
            </p>
            <a href="#" className="btn-main">
              Lire sur le site officiel →
            </a>
          </div>

          <div className="card">
            <h3>5 qualités que doit avoir un bon développeur web</h3>
            <span className="tag">Informatique</span>
            <p>
              Le métier de développeur web évolue constamment. Voici les 5
              qualités essentielles pour réussir dans ce domaine.
            </p>
            <a href="#" className="btn-main">
              Lire sur le site officiel →
            </a>
          </div>

          <div className="card">
            <h3>Formation présentielle ou à distance : que choisir ?</h3>
            <span className="tag">Orientation</span>
            <p>
              Présentiel, à distance ou hybride ? Découvrez les avantages et
              inconvénients de chaque format pour faire le bon choix.
            </p>
            <a href="#" className="btn-main">
              Lire sur le site officiel →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>🎓 Prêt à passer à l’action ?</h2>
        <p>
          Découvrez nos formations interactives et reconnues par l’État pour
          accélérer votre carrière.
        </p>
        <a href="formations.html" className="btn-main">
          Explorer nos formations →
        </a>
      </section>
    </>
  );
}

export default Blog;
