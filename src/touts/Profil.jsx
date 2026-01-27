import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Profil() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/users", { credentials: "include" })
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error(err));
  }, []);

  if (!user) {
    return <p>Chargement du profil...</p>;
  }

  return (
    <>
      {/* Header profil */}
      <header className="d-flex align-items-center justify-content-between mb-4">
        <div className="d-flex align-items-center gap-2">
          <img src="image/e-petitpas.jpg" alt="Logo" style={{ width: 150 }} />
          <h1 className="fw-bold mt-2">E-Petitpas</h1>
        </div>
        <nav>
          <ul className="d-flex gap-3 list-unstyled mb-0">
            <li><Link to="/accueil">Accueil</Link></li>
            <li><Link to="/formations">Formations</Link></li>
            <li><Link to="/logout">Déconnexion</Link></li>
          </ul>
        </nav>
      </header>

      {/* Profil utilisateur */}
      <div className="profile-header text-center py-5">
        <img
          id="user-photo"
          src={user.avatar || "image/default-avatar.jpg"}
          alt="Photo"
          className="profile-pic mb-3"
          style={{ width: 120, height: 120, borderRadius: "50%", objectFit: "cover" }}
        />

        <div className="profile-info">
          <h2 id="user-name">{user.full_name}</h2>
          <p id="user-email" className="text-muted">{user.email}</p>

          <Link to="/modification" className="btn btn-primary">
            <i className="bi bi-pencil-square me-2"></i>
            Modifier profil
          </Link>
        </div>
      </div>

      {/* Contenu */}
      <div className="container my-5">
        <div className="row g-4">
          <div className="col-md-3">
            <div className="card p-3 text-center h-100">
              <i className="bi bi-mortarboard-fill fs-1 text-primary"></i>
              <h3 className="mt-2">Mes Formations</h3>
              <p>Gérez vos cours en ligne</p>
              <Link to="/formation" className="btn btn-outline-primary">
                Voir
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profil;
