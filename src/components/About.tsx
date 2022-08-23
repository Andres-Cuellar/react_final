const About = () => {
  return (
    <div className="bg-light">
      <div className="container p-5 " id="about">
        <h2 className="fw-bold mb-5">Sobre mi</h2>
        <div className="d-flex row justify-content-center mx-5">
          <img
            className="rounded-circle mb-3 col-lg-2 col-md-4 col-sm-8 mb-5 mx-5"
            src="https://cuellar.dev/images/profile.png"
            alt=""
          />
          <div className="d-flex row col-lg-9 col-md-9 col-sm-12 rounded">
            <p className="col-lg-7 col-sm-12 m-auto">
              Estudiante de 9° de Ing. de Sistemas de la Univ. San Jose,
              orientado al área de desarrollo de software y web con experencia
              en lenguahes como HTML, CSS, JavaScript, ReactJS y WORDPRESS.
            </p>
            <div className="col-lg-5 col-sm-12 m-auto">
              <ul>
                <li>
                  <strong>Edad</strong> 31
                </li>
                <li>
                  <strong>Residencia</strong> Colombiano
                </li>
                <li>
                  <strong>Freelance</strong> Disponible
                </li>
                <li>
                  <strong>Me encuentro en</strong> Neiva, Colombia
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="d-flex col-12 justify-content-center row mt-5">
          <div className="d-flex col-lg-4 col-md-6 col-sm-12 justify-content-lg-center justify-content-sm-start mb-3 fact-item">
            <span>
              <i className="fa-solid fa-fire"></i>
            </span>
            <div>
              <h2 className="fw-bold m-0">75</h2>
              <p>Proyectos completados</p>
            </div>
          </div>
          <div className="d-flex col-lg-4 col-md-6 col-sm-12 justify-content-lg-center justify-content-sm-start mb-3 fact-item">
            <span>
              <i className="fa-solid fa-user-group"></i>
            </span>
            <div>
              <h2 className="fw-bold m-0">55</h2>
              <p>Clientes Satisfechos</p>
            </div>
          </div>
          <div className="d-flex col-lg-4 col-md-6 justify-content-lg-center justify-content-sm-start col-sm-12 mb-3 fact-item">
            <span>
              <i className="fa-solid fa-mug-hot"></i>
            </span>
            <div>
              <h2 className="fw-bold m-0">1200</h2>
              <p>Tazas de Café</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
