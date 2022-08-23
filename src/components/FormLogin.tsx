import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./formLogin.css";

type FormElement = React.FormEvent<HTMLFormElement>;

interface dataLogin {
  email: string;
  pin: number;
}

const accessdata: dataLogin = {
  email: "afca133@gmail.com",
  pin: 444555,
};

const FormLogin = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [pin, setPin] = useState<Number>();

  const navigate = useNavigate();

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();

    if (email == accessdata.email && pin == accessdata.pin) {
      console.log("logueado");
      navigate("/logged");
    } else {
      console.log("Error");
    }

    setEmail("");
    setPin(0);
  };

  return (
    <div className="w-100 h-100 bg-dark">
      <div className="row p-5">
        <div className="col-lg-10 col-xl-9 mx-auto">
          <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
            <div className="card-img-left d-none d-md-flex"></div>
            <div className="card-body p-4 p-sm-5">
              <h5 className="card-title text-center mb-5 fw-light fs-5">
                Login
              </h5>
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="floatingInputUsername"
                    required
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Escriba su email"
                    value={email}
                  />
                  <label htmlFor="floatingInputUsername">Email</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="floatingInputUsername"
                    required
                    type="number"
                    onChange={(e) => setPin(parseInt(e.target.value))}
                    placeholder="Ingrese su PIN"
                  />
                  <label htmlFor="floatingInputUsername">Pin</label>
                </div>
                <div className="form-floating mb-3">
                  <button className="btn btn-outline-dark btn-block col-12">
                    Ingresar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
