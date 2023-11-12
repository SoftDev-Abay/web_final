import { React, useRef } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);

  const RegisterHandler = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const passwordConfirm = passwordConfirmRef.current.value;
    const err = validateForm(email, password, passwordConfirm);
    if (err !== "true") {
      alert(err);
    } else {
      const responce = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_email: email,
          user_password: password,
          admin: "false",
        }),
      });
      if (responce.status === 200) {
        alert("Register success");
        navigate("/login");
      } else if (responce.status === 404) {
        const json_responce_message = await responce.json();
        alert(json_responce_message.message);
      } else {
        alert("Register fail");
      }
    }
  };

  const validateForm = (email, password, passwordConfirm) => {
    // if (email === "") {
    //   return "Email is required";
    // }
    // if (password === "") {
    //   return "Password is required";
    // }
    // if (passwordConfirm === "") {
    //   return "Password confirm is required";
    // }
    // if (password.length < 6) {
    //   return "Password must be at least 6 characters";
    // }
    // if (email.contains("@") === false) {
    //   return "Email must be valid";
    // }
    // if (password !== passwordConfirm) {
    //   return "Password not match";
    // }
    return "true";
  };

  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#508bfc" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card shadow-2-strong"
                style={{ borderRadius: "1rem" }}
              >
                <form onSubmit={RegisterHandler} className="card-body p-5">
                  <h3 className="mb-5 text-center">Sign up</h3>

                  <div className="mb-3">
                    <label className="mb-1 form-label text-start">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="InputEmail"
                      aria-describedby="emailHelp"
                      placeholder="Email"
                      ref={emailRef}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="mb-1 form-label text-start">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="InputPassword1"
                      placeholder="Password"
                      ref={passwordRef}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="mb-1 form-label text-start">
                      Confirm password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="InputPassword2"
                      placeholder="Type again"
                      ref={passwordConfirmRef}
                    />
                  </div>

                  <div className="text-center">
                    <button
                      className="btn btn-primary btn-lg btn-block"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>

                  <hr className="my-4" />
                  <div className="text-center">
                    Already have an account?{" "}
                    <a
                      href="/login"
                      className="text-decoration-none text-black-50"
                    >
                      Sign in
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
