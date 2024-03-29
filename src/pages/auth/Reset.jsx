import React from "react";
import { Link } from "react-router-dom";
import resetImg from "../../assets/forgot.png";
import Card from "../../components/card/Card";
import styles from "./auth.module.scss";

const Reset = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={resetImg} width="400px" alt="Reset Password" />
      </div>
      <Card>
        <div className={styles.form}>
          <h2>Reset Password</h2>

          <form action="">
            <input type="text" placeholder="Email" required />

            <button className="--btn --btn-primary --btn-block">
              Reset Password
            </button>
            <div className={styles.links}>
              <p>
                <Link to="/login">Login</Link>
              </p>
              <p>
                <Link to="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </Card>
    </section>
  );
};

export default Reset;
