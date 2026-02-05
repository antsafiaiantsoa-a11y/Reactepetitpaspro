import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    axios.post("https://backendepetitpas-production.up.railway.app/logout", {}, {
      withCredentials: true
    })
    .then(() => {
      localStorage.removeItem("user"); // si tu stockes l'utilisateur
      navigate("/connexion");
    })
    .catch(err => {
      console.error("Erreur logout :", err);
    });
  }, []);

  return <p>Déconnexion...</p>;
}

export default Logout;
