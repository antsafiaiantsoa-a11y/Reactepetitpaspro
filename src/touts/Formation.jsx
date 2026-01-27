import { useEffect, useState } from "react";



function Formation() {
  const [formations, setFormations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/formations")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erreur lors du chargement des formations");
        }
        return res.json();
      })
      .then((data) => {
        setFormations(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Impossible de charger les formations");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-5">Chargement des formations...</p>;
  }

  if (error) {
    return <p className="text-center text-danger mt-5">{error}</p>;
  }

  return (
    <>
      <section className="hero text-center">
        <h1>Toutes nos Formations</h1>
        <p>
          Explorez nos cursus et trouvez la voie qui transformera votre avenir
          professionnel.
        </p>
      </section>

      <section className="container my-5">
        <div className="row g-4">
          {formations.map((f) => (
            <div className="col-md-3" key={f.id}>
              <div className="formation-card">
                {/* IMAGE DEPUIS public/images */}
                <img
                  src={`/image/${f.image}`}
                  alt={f.titre}
                  className="img-fluid"
                />

                <div className="badge-top">{f.type}</div>

                <div className="content">
                  <h5>{f.titre}</h5>
                  <p className="small">{f.description}</p>

                  <div className="infos">
                    <span>⏱ {f.duree}</span>
                    <span>⭐ {f.note}</span>
                  </div>

                  <a href={`formation-detail.html?id=${f.slug}`}>
                    Voir plus
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Formation;
