import React from "react";
import $ from "jquery";

export default function LoginModal(props) {
  const showRegisterForm = () => {
    $(".loginBox").fadeOut("fast", function() {
      $(".registerBox").fadeIn("fast");
      $(".login-footer").fadeOut("fast", function() {
        $(".register-footer").fadeIn("fast");
      });
      $(".modal-title").html("Register with");
    });
    $(".error")
      .removeClass("alert alert-danger")
      .html("");
  };

  const showLoginForm = () => {
    $("#loginModal .registerBox").fadeOut("fast", function() {
      $(".loginBox").fadeIn("fast");
      $(".register-footer").fadeOut("fast", function() {
        $(".login-footer").fadeIn("fast");
      });

      $(".modal-title").html("Login with");
    });
    $(".error")
      .removeClass("alert alert-danger")
      .html("");
  };
  return (
    <>
      <div className="modal-header">
        <h4 className="modal-title">Login with</h4>
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-hidden="true"
        >
          &times;
        </button>
      </div>
      <div className="modal-body">
        <div className="box">
          <div className="content">
            <div className="social">
              <a className="circle github" href="https://www.github.com">
                <i className="fab fa-github fa-fw"></i>
              </a>
              <a
                id="google_login"
                className="circle google"
                href="https://www.google.com"
              >
                <i className="fab fa-google-plus-g fa-fw"></i>
              </a>
              <a
                id="facebook_login"
                className="circle facebook"
                href="https://www.facebook.com"
              >
                <i className="fab fa-facebook-f fa-fw"></i>
              </a>
            </div>
            <div className="division">
              <div className="line l"></div>
              <span>or</span>
              <div className="line r"></div>
            </div>
            <div className="error"></div>
            <div className="form loginBox">
              <form method="" action="" acceptCharset="UTF-8">
                <input
                  id="email"
                  className="form-control"
                  type="text"
                  placeholder="Email"
                  name="email"
                />
                <input
                  id="password"
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  name="password"
                />
                <input
                  className="btn btn-default btn-login"
                  type="button"
                  value="Login"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="content registerBox" style={{ display: "none" }}>
            <div className="form">
              <form
                method=""
                html="{:multipart=>true}"
                data-remote="true"
                action=""
                acceptCharset="UTF-8"
              >
                <input
                  id="email"
                  className="form-control"
                  type="text"
                  placeholder="Email"
                  name="email"
                />
                <input
                  id="password"
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  name="password"
                />
                <input
                  id="password_confirmation"
                  className="form-control"
                  type="password"
                  placeholder="Repeat Password"
                  name="password_confirmation"
                />
                <input
                  className="btn btn-default btn-register"
                  type="button"
                  value="Create account"
                  name="commit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <div className="forgot login-footer">
          <span>
            Looking to &nbsp;
            <a href="/register" onClick={showRegisterForm}>
              create an account
            </a>
            ?
          </span>
        </div>
        <div className="forgot register-footer" style={{ display: "none" }}>
          <span>Already have an account? &nbsp;</span>
          <a href="/login" onClick={showLoginForm}>
            Login
          </a>
        </div>
      </div>
    </>
  );
}
