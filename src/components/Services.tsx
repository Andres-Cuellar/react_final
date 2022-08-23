const Services = () => {
  interface service {
    title: string;
    description: string;
    icon: string;
  }

  const servicesList = [
    {
      title: "Desarrollo Web",
      description:
        "Sitios webs modernos y listos para dispositivos móviles que lo ayudarán a tener una posicion en internet.",
      icon: "fa-code",
    },
    {
      title: "eCommerce",
      description:
        " Es momento de que tu negocio avance al siguiente nivel, con una tienda 24/7, abre podrás mostrar y vender todos tus productos.",
      icon: "fa-cart-shopping",
    },
    {
      title: "Web App",
      description:
        "Todos los procesos avanzados que necesitan tu empresa, de forma online ejecutansoe en la web.",
      icon: "fa-laptop",
    },
    {
      title: "App iOS & Android",
      description:
        "Ejecuta todo lo que necesites de tu negocio desde la palma de tu mano con tu dispositivo.",
      icon: "fa-mobile-screen-button",
    },
  ];

  return (
    <div className="bg-light">
      <div className="container p-5 " id="services">
        <h2 className="fw-bold mb-5">Servicios</h2>
        <div className="d-flex mx-5">
          <div className="cards">
            <div className="d-flex justify-content-center col-12 row">
              {servicesList.map((data: service, i: number) => {
                return (
                  <div
                    key={i}
                    className="card m-3 bg-dark col-lg-5  col-sm-12 text-light"
                  >
                    <div className="card-body text-center">
                      <a>
                        <i className={`fa-solid ${data.icon}`}></i>
                      </a>
                      <h5 className="card-title">{data.title}</h5>
                      <p className="card-text">{data.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
