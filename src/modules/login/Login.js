import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import { loginToApp } from "../../redux/actions/login";

const Login = ({ login, token }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (token || localStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, [token, navigate]);

  const submitHandler = (event) => {
    event.preventDefault();
    login(form);
  };

  const usernameHandler = (e) => {
    setForm({ ...form, username: e.target.value });
  };
  const passwordHandler = (e) => {
    setForm({ ...form, password: e.target.value });
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col d-flex justify-content-center">
          <div className="card w-25">
            <div className="card-header">Log In</div>
            <div className="card-body">
              <form onSubmit={submitHandler}>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={form.username}
                    onChange={usernameHandler}
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={passwordHandler}
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-success">
                    Login
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

const mapStateToProps = (state) => {
  return {
    token: state.login.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (cred) => dispatch(loginToApp(cred)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
