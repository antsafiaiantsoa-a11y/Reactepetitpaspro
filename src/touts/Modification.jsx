import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Modification() {
  const [user, setUser] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [avatar, setAvatar] = useState("image/default-avatar.jpg");
  const [loading, setLoading] = useState(false);

  // 🔄 Charger profil
  useEffect(() => {
    fetch("https://backendepetitpas-production.up.railway.app/api/users")
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setFullName(data.full_name);
        setEmail(data.email);
        setAvatar(data.avatar || "image/default-avatar.jpg");
      })
      .catch(err => console.error(err));
  }, []);

  // 💾 Enregistrer modifications
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    fetch("https://backendepetitpas-production.up.railway.app/api/users", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ full_name: fullName, email })
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) setMessage(data.error);
        else {
          setUser(data.user);
          setMessage("✅ Profil mis à jour avec succès");
        }
      })
      .catch(() => setMessage("❌ Une erreur est survenue"))
      .finally(() => setLoading(false));
  };

  // 🖼 Aperçu avatar
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setAvatar(URL.createObjectURL(file));
  };

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
          <Link className="me-3" to="/accueil">Accueil</Link>
          <Link className="me-3" to="/formations">Formations</Link>
          <Link to="/logout" className="text-danger">Déconnexion</Link>
        </nav>
      </header>

      {/* PROFIL */}
      <div className="card shadow-sm p-4 mb-4">
        <div className="d-flex align-items-center gap-4">
          <label style={{ cursor: "pointer" }}>
            <img
              src={avatar}
              alt="Avatar"
              className="rounded-circle border"
              style={{ width: 130, height: 130, objectFit: "cover" }}
            />
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleFileChange}
            />
          </label>

          <div>
            <h3 className="mb-1">{user.full_name}</h3>
            <p className="text-muted mb-0">{user.email}</p>
            <small className="text-secondary">
              Cliquez sur la photo pour la modifier
            </small>
          </div>
        </div>
      </div>

      {/* FORMULAIRE */}
      <div className="card shadow-sm p-4">
        <h4 className="mb-4">Modifier mes informations</h4>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nom complet</label>
            <input
              type="text"
              className="form-control"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Adresse email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button className="btn btn-primary px-4" disabled={loading}>
            {loading ? "Enregistrement..." : "💾 Enregistrer"}
          </button>
        </form>

        {message && (
          <div className="alert alert-success mt-3 mb-0">
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

export default Modification;
