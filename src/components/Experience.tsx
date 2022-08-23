interface experience {
  date: string;
  title: string;
  description: string;
}

const Experience = () => {
  const experienceGraduation = [
    {
      date: "2019 - Presente",
      title: "Ingenieria de Sistemas",
      description:
        "9° Semestre de Ingenieria de Sistemas, orientado al desarrollo de software y diseño de redes.",
    },
    {
      date: "2022 - Presente",
      title: "LarnU - FullStack Bootcamp",
      description:
        "Desarrollador web, con conocimiento en frontend -> HTML, CSS, JavaScript y React... Próximos conocimientos Bakend y DB",
    },
    {
      date: "2017",
      title: "Técnico Electronica Y Telecomunicaciones",
      description:
        "Circuitos e instrumentación | Diseño de proyectos arduino | Mantenimiento a equipos de Radio Frecuencia",
    },
  ];

  const experienceWroking = [
    {
      date: "2019 - Presente",
      title: "Desarrollador de Software",
      description:
        "He realizado aplicaciones y paginas a diferentes empresas importantes del pais.",
    },
    {
      date: "2021 - 2022",
      title: "Lider IT",
      description:
        "Encargado del planeamento web y desarrollador de modulos de CRM",
    },
    {
      date: "2020 - Presente",
      title: "Desarrollador Web | Consultor externo",
      description:
        "Soy el encargado de realizar todos los trabajos de desarrollo a los clientes de la empresa Publisur",
    },
  ];

  return (
    <div className=" bg-light">
      <div className="container p-5">
        <h2 className="fw-bold mb-5">Experiencia</h2>
        <div className="d-flex justify-content-center  row">
          <div className="col-lg-5 col-md-9 col-sm-12 rounded bg-white p-5">
            {experienceGraduation.map((data: experience, i: number) => {
              return (
                <div key={i}>
                  <div className="d-flex">
                    <i className="fa-solid fa-graduation-cap me-3 graduation"></i>
                    <p className="text-muted">{data.date}</p>
                  </div>
                  <div className="d-flex mb-3">
                    <div className="vr ms-2 me-4 "></div>
                    <div>
                      <h6>{data.title}</h6>
                      <p>{data.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="m-3 col-lg-5 col-md-9  col-sm-12 rounded bg-white p-5">
            {experienceWroking.map((data: experience, i: number) => {
              return (
                <div key={i}>
                  <div className="d-flex">
                    <i className="fa-solid fa-briefcase me-3 graduation"></i>
                    <p className="text-muted">{data.date}</p>
                  </div>
                  <div className="d-flex mb-3">
                    <div className="vr ms-2 me-4 "></div>
                    <div>
                      <h6>{data.title}</h6>
                      <p>{data.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
