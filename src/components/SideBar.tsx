import React from "react";

interface menuList {
  icon: string;
  title: string;
  link: string;
}
const SideBar = () => {
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
    <div
      className="col-3 px-1 bg-dark position-fixed d-sm-none d-none d-md-flex shadow"
      id="sticky-sidebar"
    >
      <div className="nav flex-column flex-nowrap vh-100 overflow-auto text-white p-5">
        <h2 className="fw-bold">Andrés Cuéllar</h2>

        <nav className="mt-5 navbar text-light mt-auto ">
          <ul className="nav navbar-nav">
            {menu.map((data: menuList, i: number) => {
              return (
                <li key={i} className="nav-item">
                  <a href={`#${data.link}`}>
                    <i className={`fa-solid ${data.icon}`}></i>
                    {data.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <p className="mt-auto ">© 2022 CuellarDev.</p>
      </div>
    </div>
  );
};

export default SideBar;
