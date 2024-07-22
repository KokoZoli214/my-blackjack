import React from "react";
import "../register/register.css";

export default function Register() {
  return (
    <div className="register-area">

      <div className="register-container">

        <header className="reg-header">Registration</header>
        
        <div className="datas">

          <article className="inputs" >

            <input type="email" name="" id="" placeholder="E-mail" required/>

          </article>

          <article className="inputs">

            <input type="text" name="" id="" placeholder="Name" required/>

          </article>

          <article className="inputs">

            <input type="password" name="" id="" placeholder="Password" required/>

          </article>

          <article className="radio-btns">

            <input type="radio" name="gender" id=""/>
            <label htmlFor="" >Male</label>

            <input type="radio" name="gender" id=""/>
            <label htmlFor="" >Female</label>

          </article>
         
          <p>A regisztrációval egyidejűleg kijelentem, hogy elmúltam 18 éves.</p>

          <div className="log-reg-buttons">
            <button className="register-btn" type="submit">Register</button>
            <button className="login-btn" type="submit">Login</button>
          </div>

        </div>

      </div>

      <div className="back-bnt-container">
        <a className="back-btn" href="/gamepage">Back</a>
        </div>

    </div>
  );
}
