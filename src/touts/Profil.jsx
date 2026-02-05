import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Profil() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://backendepetitpas-production.up.railway.app/api/users", {
      credentials: "include",
    })
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error(err));
  }, []);

  if (!user) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary"></div>
        <p className="mt-3">Chargement du profil...</p>
      </div>
    );
  }

  return (
    <div className="container py-4">

      {/* HEADER */}
      <header className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center gap-2">
          <img src="image/e-petitpas.jpg" alt="Logo" style={{ width: 120 }} />
          <h4 className="fw-bold m-0">E-Petitpas</h4>
        </div>
        <nav>
          <Link to="/accueil" className="me-3">Accueil</Link>
          <Link to="/formations" className="me-3">Formations</Link>
          <Link to="/logout" className="text-danger">Déconnexion</Link>
        </nav>
      </header>

      {/* PROFIL CARD */}
      <div className="card shadow-sm p-4 mb-5 text-center">
        <img
          src={user.avatar || "image/default-avatar.jpg"}
          alt="Avatar"
          className="rounded-circle border mb-3"
          style={{ width: 130, height: 130, objectFit: "cover" }}
        />

        <h2 className="mb-1">{user.full_name}</h2>
        <p className="text-muted mb-3">{user.email}</p>

        <Link to="/modification" className="btn btn-primary px-4">
          <i className="bi bi-pencil-square me-2"></i>
          Modifier mon profil
        </Link>
      </div>

      {/* DASHBOARD */}
      <div className="row g-4">

        <div className="col-md-4">
          <div className="card h-100 text-center shadow-sm p-4">
            <i className="bi bi-mortarboard-fill fs-1 text-primary"></i>
            <h4 className="mt-3">Mes formations</h4>
            <p className="text-muted">
              Accédez à vos cours et suivez votre progression.
            </p>
            <Link to="/formations" className="btn btn-outline-primary">
              Voir mes formations
            </Link>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 text-center shadow-sm p-4">
            <i className="bi bi-credit-card-fill fs-1 text-success"></i>
            <h4 className="mt-3">Financement</h4>
            <p className="text-muted">
              Consultez vos demandes de financement.
            </p>
            <Link to="/financement" className="btn btn-outline-success">
              Voir mes financements
            </Link>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 text-center shadow-sm p-4">
            <i className="bi bi-bell-fill fs-1 text-warning"></i>
            <h4 className="mt-3">Notifications</h4>
            <p className="text-muted">
              Messages, rappels et annonces importantes.
            </p>
            <Link to="/notifications" className="btn btn-outline-warning">
              Voir les notifications
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Profil;
