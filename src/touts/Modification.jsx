import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Modification() {
  const [user, setUser] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [avatar, setAvatar] = useState("image/default-avatar.jpg");

  // 🔄 Récupérer le profil utilisateur
  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setFullName(data.full_name);
        setEmail(data.email);
        setAvatar(data.avatar || "image/default-avatar.jpg");
      })
      .catch(err => console.error(err));
  }, []);

  // 🔹 Modifier nom et email
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/api/users", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ full_name: fullName, email })
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) setMessage(data.error);
        else {
          setUser(data.user);
          setMessage(data.message);
        }
      })
      .catch(err => console.error(err));
  };

  // 🔹 Sélectionner une photo et afficher un aperçu
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setAvatar(previewUrl);
  };

  if (!user) return <p>Chargement des informations...</p>;

  return (
    <div className="container mt-4">

      {/* Header simple avec liens */}
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
      <div className="profile-header mt-4 d-flex align-items-center gap-3">
        <img
          src={avatar}
          alt="Avatar"
          style={{ width: 120, height: 120, borderRadius: "50%", objectFit: "cover" }}
        />
        <div className="profile-info">
          <h2>{user.full_name}</h2>
          <p>{user.email}</p>
        </div>
      </div>

      {/* Formulaire de modification */}
      <div className="card mt-4 p-4">
        <h3>Modifier mon profil</h3>

        {/* Upload photo */}
        <div className="mb-3">
          <label className="form-label">Photo de profil</label>
          <input
            type="file"
            accept="image/*"
            className="form-control"
            onChange={handleFileChange}
          />
        </div>

        {/* Nom + Email */}
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
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">Enregistrer</button>
        </form>

        {message && <p className="mt-3 text-success">{message}</p>}
      </div>
    </div>
  );
}

export default Modification;
