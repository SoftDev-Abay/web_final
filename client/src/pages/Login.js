import { useRef } from "react";
import { useStateContext } from "../context/StateContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { setUser } = useStateContext();
  const navigate = useNavigate();

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const AuthHandlier = async (e) => {
    e.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    const responce = await fetch("http://localhost:5000/users/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_email: email,
        user_password: password,
      }),
    });
    if (responce.status === 404) {
      alert("User not found");
    } else {
      const json_responce = await responce.json();
      setUser(json_responce);
      localStorage.setItem("user", JSON.stringify(json_responce));
      console.log(json_responce);
      navigate("/");
    }
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
                <form onSubmit={AuthHandlier} className="card-body p-5">
                  <h3 className="mb-5 text-center">Sign in</h3>

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
                      ref={emailInputRef}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="mb-1 form-label text-start">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="InputPassword"
                      placeholder="Password"
                      ref={passwordInputRef}
                    />
                  </div>

                  <div className="text-center">
                    <button
                      className="btn btn-primary btn-lg btn-block"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>

                  <hr className="my-4" />
                  <div className="text-center">
                    Don't have an account?{" "}
                    <a
                      href="/register"
                      className="text-decoration-none text-black-50"
                    >
                      Sign up
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

export default Login;
