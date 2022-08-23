import "./works.css";
import { useState } from "react";

interface work {
  picture: string;
  month: string;
  year: number;
  project: string;
  description: string;
  link: string;
  category: number;
}

const Works = () => {
  const worksArray: work[] = [
    {
      picture: "https://cuellar.dev/images/works/work1.jpg",
      month: "Nov.",
      year: 2021,
      project: "Huila Recicla | App iOS & Android",
      description:
        "App y Pagina web, desarrolladas para el proyecto Huila Recicla de la Gobernación del Huila",
      link: "https://huilarecicla.co/",
      category: 0,
    },
    {
      picture: "https://cuellar.dev/images/works/work2.jpg",
      month: "Oct.",
      year: 2021,
      project: "Terminal de Pitalito | Web App",
      description:
        "Apliacion web para la terminal de Pitalito La primera web de Colombia con modulo de Salidas por horario de buses, incluye el modulo de compra de redbus, y formulario de PQR online",
      link: "https://tuterminalpitalito.com/",
      category: 0,
    },
    {
      picture: "https://cuellar.dev/images/works/work7.jpg",
      month: "Jun",
      year: 2021,
      project: "Software POS | WebApp",
      description:
        "Sistema de punto de venta online para Restaurante y Bares Acceso por credenciales Catalogo de productos, categorías y unidades de medida  y más caracteristicas  ",
      link: "#",
      category: 0,
    },
    {
      picture:
        "https://glumpstudio.com/wp-content/uploads/2022/07/imagen_2022-07-19_235749664.png",
      month: "Jun.",
      year: 2022,
      project: "Plaza Majagua | Páginas Webs",
      description: "",
      link: "",
      category: 0,
    },
    {
      picture:
        "https://glumpstudio.com/wp-content/uploads/2022/07/imagen_2022-07-20_000906433.png",
      month: "",
      year: 0,
      project: "Mary Yate | Página Web",
      description: "",
      link: "",
      category: 0,
    },
    {
      picture: "https://cuellar.dev/images/works/work8.jpg",
      month: "Feb.",
      year: 2022,
      project: "Tivi Plus | Página Web",
      description: "",
      link: "",
      category: 0,
    },
  ];

  const [loadComplete, setLoadComplete] = useState<boolean>(false);

  return (
    <div className="bg-dark">
      <div className="container p-5  text-light" id="projects">
        <h2 className="fw-bold mb-5">Proyectos Recientes</h2>
        <div className="d-flex justify-content-around col-3 mb-5">
          <a href="">Todos</a>
          <a href="">Web</a>
          <a href="">Software</a>
        </div>
        <div className="d-flex justify-content-center row">
          {worksArray.map((data: work, i: number) => {
            return (
              <div
                key={i}
                className="card-work card col-lg-3 col-md-5 col-sm-12 p-0 border-0 me-4 ms-4 mb-4"
              >
                <div className="backgroundEffect"></div>
                <div className="pic">
                  <img src={`${data.picture}`} alt=""></img>
                  <div className="date">
                    <span className="month">{data.month}</span>
                    <span className="year">{data.year}</span>{" "}
                  </div>{" "}
                </div>
                <div className="content">
                  <p className="h-1 text-dark mt-4">{data.project}</p>
                  <p className="text-muted mt-3">{data.description}</p>
                  <div className="d-flex align-items-center justify-content-between mt-3 pb-3">
                    <a href={`${data.link}`} className="btn btn-primary">
                      Ver<span className="fas fa-arrow-right"></span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Works;
