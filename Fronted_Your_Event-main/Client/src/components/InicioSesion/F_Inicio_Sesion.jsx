import { Formik, Form, Field } from "formik";
import "./F_Inicio_Sesion.css";
import wave from "../../assets/wave.svg";
import loginperson from "../../assets/loginperson.svg";
import collab from "../../assets/collab.svg";
import { loginUser } from "../../api/App";
import swal from "sweetalert2";

export const Inicio_Sesion = () => {
  return (
    <>
      <Formik
        initialValues={{
          mail_user: "",
          password_user: "",
        }}
        onSubmit={async (values) => {
          try {
            const response = await loginUser(values);

            if (response.data.data == "logueado") {
              swal.fire({
                title: "Logueado",
                text: "Bienvenido",
                icon: "success",
                boton: "Ok",
                time: 1500,
              });
              localStorage.setItem("user", response.data.rows[0].nom_user);
              localStorage.setItem("token", response.data.token);
              localStorage.setItem("email", response.data.rows[0].mail_user)
              setTimeout(() => {
                window.location.href = "/"
              }, 1500);
            }
            if (response.data.data == "PASSWORD_ERROR") {
              swal.fire({
                title: "Contraseña incorrecta",
                text: "",
                icon: "warning",
                boton: "Ok",
                time: 1500,
              });
            }
            if (response.data.data == "error desconocido") {
              swal.fire({
                title: "El usuario no existe",
                text: "Registrate",
                icon: "warning",
                boton: "Ok",
                time: 1500,
              });
            }
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <div className="login-design">
              <div className="waves">
                <img src={loginperson} alt="" />
              </div>
              <div className="login">
                <div className="login-data">
                  <img src={collab} alt="img" title="collab" />
                  <h2 className="title">Inicio de Sesión</h2>
                  <Form
                    action="#"
                    onSubmit={handleSubmit}
                    className="login-form"
                  >
                    <div className="input-field">
                      <i className="fas fa-envelope"></i>
                      <Field
                        type="email"
                        id="mail_user"
                        name="mail_user"
                        placeholder="Correo"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="input-field">
                      <i className="fas fa-lock"></i>
                      <Field
                        type="password"
                        id="password_user"
                        name="password_user"
                        placeholder="Contraseña"
                        onChange={handleChange}
                      />
                    </div>
                    <a className="a1" href="/registro">
                      ¿Necesitas una Cuenta?
                    </a>
                    <Field
                      type="submit"
                      value="Iniciar Sesión"
                      className="btn-login"
                    />
                    <a href="/">Volver al inicio</a>
                  </Form>
                  <div className="recuperation">
                    <a href="/CardPassword">Olvidaste tu contraseña?</a>
                  </div>
                  <p>

                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </Formik>
    </>
  );
};
