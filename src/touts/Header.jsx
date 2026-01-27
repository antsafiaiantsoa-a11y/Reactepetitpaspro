import { Link } from "react-router-dom";


function Header() {
  return (
    <header>

      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <img
            src="/image/logo1.png"
            alt="Logo E-Petitpas"
            className="nav-logo"
          />
          <Link className="navbar-brand fw-bold" to="/">
            E-<span>Petitpas</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/accueil">Accueil</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/formation">Formations</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/financement">Financement</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/apropos">À propos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">Blog</Link>
              </li>
            </ul>

            <div className="ms-lg-3">
              <Link to="/connexion" className="btn btn-outline-light btn-sm">
                Connexion
              </Link>
              <Link to="/inscription" className="btn btn-main btn-sm ms-2">
                S’inscrire
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
