import { Link } from "react-router-dom";

function After() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand fw-bold" to="/after">
              E-<span>Petitpas</span>
            </Link>

            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/formations">
                  Formations
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/profil">
                  Mon profil
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/logout">
                  Déconnexion
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <section className="hero">
        <h1>
          Bienvenue <span id="username"></span> 👋
        </h1>
        <p>
          Voici votre espace personnel pour suivre vos formations, vos financements
          et vos notifications.
        </p>
      </section>

      <section className="section">
        <h2>Vos accès rapides</h2>

        <div className="cards">
          <div className="card">
            <h3>📚 Mes Formations</h3>
            <p>Consultez vos formations en cours.</p>
            <Link to="/formations" className="btn-main">
              Voir mes formations
            </Link>
          </div>

          <div className="card">
            <h3>💳 Financement</h3>
            <p>Suivez vos demandes de financement.</p>
            <Link to="/financement" className="btn-main">
              Voir mes financements
            </Link>
          </div>

          <div className="card">
            <h3>👤 Mon Profil</h3>
            <p>Modifiez vos informations personnelles.</p>
            <Link to="/profil" className="btn-main">
              Modifier mon profil
            </Link>
          </div>

          <div className="card">
            <h3>🔔 Notifications</h3>
            <p>Consultez vos notifications.</p>
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
