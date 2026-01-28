import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    axios.post("http://localhost:3000/logout", {}, {
      withCredentials: true
    })
    .then(() => {
      localStorage.removeItem("user"); // si tu stockes l'utilisateur
      navigate("/login");
    })
    .catch(err => {
      console.error("Erreur logout :", err);
    });
  }, []);

  return <p>Déconnexion...</p>;
}

export default Logout;
