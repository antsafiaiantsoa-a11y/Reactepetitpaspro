import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Inscription() {
  const navigate = useNavigate(); // pour rediriger après inscription
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Gestion des changements dans le formulaire
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  // Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validation côté client
    if (formData.password !== formData.confirmPassword) {
      setError("Les mots de passe ne correspondent pas !");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Une erreur est survenue.");
        navigate("/After"); 
      } else {
        setSuccess("Inscription réussie !");
        // Optionnel : redirection vers la page login après 2s
        setTimeout(() => {
          navigate("/After");
        }, 2000);
      }
    } catch (err) {
      setError("Impossible de se connecter au serveur.");
      console.error(err);
    }
  };

  return (
    <div className="register-card">
      <div className="brand">E-<span>Petitpas</span></div>
      <h2>Créer un compte</h2>
      <p className="subtitle">Rejoignez notre plateforme de formation</p>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

      <form id="formulaire" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Nom complet</label>
          <input
            id="username"
            type="text"
            className="form-control"
            placeholder="Votre nom"
            required
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            id="email"
            type="email"
            className="form-control"
            placeholder="exemple@email.com"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Mot de passe</label>
          <input
            id="password"
            type="password"
            className="form-control"
            placeholder="••••••••"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Confirmer le mot de passe</label>
          <input
            id="confirmPassword"
            type="password"
            className="form-control"
            placeholder="••••••••"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="terms"
            checked={formData.terms}
            onChange={handleChange}
            required
          />
          <label className="form-check-label" htmlFor="terms">
            J'accepte les <Link to="#" className="register-links">conditions d'utilisation</Link>
          </label>
        </div>

        <button type="submit" className="btn btn-main">Créer mon compte</button>
      </form>

      <div className="text-center mt-4 register-links">
        <p className="mb-1">Déjà un compte ?</p>
        <Link to="/after">Se connecter</Link>

      </div>
    </div>
  );
}

export default Inscription;
