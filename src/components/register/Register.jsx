import React from "react";
import { auth } from "../firebase";
import "../register/register.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      const user = userCredential.user;
      await user.updateProfile({
        displayName: name,
      });
      alert("Registration successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      alert("Login successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="register-area">
      <div className="register-container">
        <header className="reg-header">Registration</header>

        <div className="datas">
          <form>
            <article className="inputs">
              <input
              type="email"
              placeholder="E-mail"
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
            </article>

            <article className="inputs">
              <input
              type="text"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              />
            </article>

            <article className="inputs">
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </article>

            <article className="radio-btns">
              <input
              type="radio"
              name="gender"
              value="male"
              onChange={(e) => setGender(e.target.value)}
              />
              <label htmlFor="">Male</label>

              <input
              type="radio"
              name="gender"
              value="female"
              onChange={(e) => setGender(e.target.value)}
              />
              <label htmlFor="">Female</label>
            </article>

            <p>
              A regisztrációval egyidejűleg kijelentem, hogy elmúltam 18 éves.
            </p>

            <div className="log-reg-buttons">
              <button className="register-btn" type="submit" onChange={handleRegister} >
                Register
              </button>
              <button className="login-btn" type="submit" onChange={handleLogin} >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="back-bnt-container">
        <a className="back-btn" href="/gamepage">
          Back
        </a>
      </div>
    </div>
  );
}
