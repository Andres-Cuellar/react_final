import React from "react";

interface menuList {
  icon: string;
  title: string;
  link: string;
}

const TopBar = () => {
  const menu: menuList[] = [
    {
      icon: "fa-house",
      title: "Inicio",
      link: "home",
    },
    {
      icon: "fa-circle-user",
      title: "Sobre mi",
      link: "about",
    },
    {
      icon: "fa-briefcase",
      title: "Servicios",
      link: "services",
    },
    {
      icon: "fa-graduation-cap",
      title: "Expericia",
      link: "experience",
    },
    {
      icon: "fa-diagram-project",
      title: "Proyectos",
      link: "projects",
    },
    {
      icon: "fa-message",
      title: "Contacto",
      link: "contact",
    },
  ];

  return (
    <>
      <nav className="navbar text-light navbar-expand-lg d-md-none mt-autobg-dark p-3 bg-dark   d-flex  shadow  sticky-top ">
        <div className="container-fluid ">
          <h2 className="fw-bold navbar-brand text-light col-3">
            Andrés Cuéllar
          </h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className=" navbar-nav ">
              {menu.map((data: menuList, i: number) => {
                return (
                  <li key={i} className="nav-item me-5">
                    <a
                      className="nav-link active text-light"
                      href={`#${data.link}`}
                    >
                      <i className={`fa-solid ${data.icon}`}></i>
                      {data.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopBar;
