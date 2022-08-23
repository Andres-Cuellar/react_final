import Typed from "react-typed";

const Profile = () => {
  return (
    <div className="d-flex bg-dark p-5 h-100" id="home">
      <div className="p-5 m-auto d-flex flex-column">
        <img
          className="rounded-circle mb-3"
          src="https://cuellar.dev/images/profile.png"
          alt=""
        />
        <h2 className="text-light fw-bold">Andrés Cuéllar</h2>
        <p className="text-center text-light">
          I'm a{" "}
          <Typed
            strings={[
              "Frontend Developer",
              "Software Developer ",
              "Freelancer",
            ]}
            typeSpeed={100}
            backSpeed={50}
            loop
          />
        </p>
        <div className="social-networks d-flex mx-auto">
          <a href="https://github.com/andres-cuellar">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/cuellardev/">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/cuellar.dev/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://api.whatsapp.com/send/?phone=573134030854">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
