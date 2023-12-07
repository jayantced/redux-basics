import { useDispatch } from "react-redux";
import { authAction } from "../store/auth";
import classes from "./Auth.module.css";

const Auth = () => {

  const dispatch = useDispatch();

  function authLoginHandler() {
      dispatch(authAction.login());
  }

  function submitHandler(event) {
    event.preventDefault();
  }
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button onClick={authLoginHandler}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
