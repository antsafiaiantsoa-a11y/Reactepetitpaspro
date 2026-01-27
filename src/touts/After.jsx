import { Link } from "react-router-dom";

function After () {
  return (
    <>
    <header>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand fw-bold" href="index.html">E‑<span>Petitpas</span></a>
      <ul class="navbar-nav ms-auto">
        
        <li class="nav-item"><a class="nav-link" href="formation.html">Formations</a></li>
        <li class="nav-item"><a class="nav-link" href="profil.html">Mon profil</a></li>
        <li class="nav-item"><a class="nav-link" href="logout.html">Déconnexion</a></li>
      </ul>
    </div>
  </nav>
</header>

<section class="hero">
  <h1>Bienvenue <span id="username"></span> 👋</h1>
  <p>Voici votre espace personnel pour suivre vos formations, vos financements et vos notifications.</p>
</section>

      
    <section className="section">
      <h2>Vos accès rapides</h2>
      <div className="cards">
        <div className="card">
          <h3>📚 Mes Formations</h3>
          <p>Consultez vos formations en cours et inscrivez‑vous à de nouveaux parcours.</p>
          <Link to="/formation" className="btn-main">
            Voir mes formations
          </Link>
        </div>
        <div className="card">
          <h3>💳 Financement</h3>
          <p>Suivez vos demandes de financement et explorez les solutions disponibles.</p>
          <Link to="/financement" className="btn-main">
            Voir mes financements
          </Link>
        </div>
        <div className="card">
          <h3>👤 Mon Profil</h3>
          <p>Mettez à jour vos informations personnelles et vos préférences.</p>
          <Link to="/profil" className="btn-main">
            Modifier mon profil
          </Link>
        </div>
        <div className="card">
          <h3>🔔 Notifications</h3>
          <p>Retrouvez vos rappels, messages et actualités importantes.</p>
          <Link to="/notifications" className="btn-main">
            Voir mes notifications
          </Link>
        </div>
      </div>
    </section>
 

    </>
  );
}

export default After;
