import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Connexion() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Email ou mot de passe incorrect.");
        return; // 🔴 stop ici, ne pas naviguer
      }

      // Connexion réussie
      console.log("Utilisateur connecté :", data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("userid", data.userid);

      // Redirection vers After.jsx
      navigate("/after");
    } catch (err) {
      console.error(err);
      setError("Impossible de se connecter au serveur.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="d-flex justify-content-center align-items-center py-5">
      <div className="register-card">
        <div className="brand">E-<span>Petitpas</span></div>
        <h2>Connexion</h2>
        <p>Accédez à votre espace personnel</p>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <form id="formulaire" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="exemple@email.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Mot de passe</label>
            <input
              type="password"
              className="form-control"
              placeholder="••••••••"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="remember" />
              <label className="form-check-label" htmlFor="remember">
                Se souvenir de moi
              </label>
            </div>
            <Link to="/motdepasse" className="login-links">
              Mot de passe oublié ?
            </Link>
          </div>

          <button type="submit" className="btn btn-main w-100" disabled={loading}>
            {loading ? "Connexion..." : "Se connecter"}
          </button>
        </form>

        <div className="text-center mt-4 login-links">
          <p className="mb-1">Pas encore de compte ?</p>
          <Link to="/register">Créer un compte</Link>
        </div>
      </div>
    </main>
  );
}

export default Connexion;
