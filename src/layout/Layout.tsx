import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";

interface menuList {
  icon: string;
  title: string;
  link: string;
}

const Layout = () => {
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
      <div className="container-fluid">
        <div className="row">
          <TopBar />
          <SideBar />
          <div className="col-md-9 col-sm-12 p-0 offset-xs-0 offset-md-3 h-100">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
