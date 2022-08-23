import { Formik, Form, Field } from "formik";
import emailjs, { send } from "@emailjs/browser";

interface contactValues {
  email: string;
  phone: string;
  subject: string;
  message: string;
  name: string;
}

const Contact = (): JSX.Element => {
  const initialValues: contactValues = {
    email: "",
    phone: "",
    name: "",
    subject: "",
    message: "",
  };

  const sendEmail = (data: any) => {
    emailjs
      .send("service_mivo4ra", "template_fgu299k", data, "KAj0_GvKMhjXTFZCO")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="bg-light ">
      <div className="container p-5" id="contact">
        <h2 className="fw-bold mb-5">Contacto</h2>
        <div className="row">
          <div className="col-md-5">
            <div className="contact-info">
              <h3>¿Tienes algún proyecto o alguna consulta? Dímelo</h3>
              <p>
                ¿No te gustan los formularios?
                <br />
                Enviame un
                <a href="mailto:im@cuellar.dev"> email</a>. 👋
              </p>
            </div>
          </div>
          <div className="col-md-7">
            <Formik
              initialValues={initialValues}
              onSubmit={(values, actions) => {
                sendEmail(values);
                actions.setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="form row">
                  <Field
                    className="form-control mb-2 col-lg-5 "
                    id="name"
                    name="name"
                    placeholder="Nombre"
                  />
                  <Field
                    className="form-control mb-2 col-lg-5 "
                    id="email"
                    name="email"
                    placeholder="Correo"
                  />
                  <Field
                    className="form-control mb-2 col-lg-5 "
                    id="phone"
                    name="phone"
                    placeholder="Teléfono"
                  />
                  <Field
                    className="form-control mb-2 col-lg-5 "
                    id="subject"
                    name="subject"
                    placeholder="Asunto"
                  />
                  <Field
                    className="form-control mb-2 col-lg-5 "
                    id="message"
                    name="message"
                    placeholder="Mensaje"
                  />
                  <button className="btn btn-dark" type="submit">
                    Enviar
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>

      <div className="container d-flex justify-content-center">
        <p className="mt-auto ">© 2022 CuellarDev.</p>
      </div>
    </div>
  );
};

export default Contact;
