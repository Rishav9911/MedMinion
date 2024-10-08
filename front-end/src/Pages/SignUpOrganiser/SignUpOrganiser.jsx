import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    address: "",
    hospitalName: "",
    yourDomain: "",
    qualification: "",
    password: "",
  });
  const [error, setError] = useState("")
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let name = data.name;
      let email = data.email;
      let phone = data.phone;
      let gender = data.gender;
      let address = data.address;
      let hospitalName = data.hospitalName;
      let yourDomain = data.yourDomain;
      let qualification = data.qualification;
      let password = data.password;
      const result = await axios.post(
        "http://localhost:5000/doctor/signup",
        { name, email, phone, gender, address, hospitalName, yourDomain, qualification, password },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },
          withCredentials: true,
        }
      )
      console.log(result)
      setData({
        name: "",
        email: "",
        phone: "",
        gender: "",
        address: "",
        hospitalName: "",
        yourDomain: "",
        qualification: "",
        password: "",
      });
      navigate("/doctorlogin");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h1>Welcome Back</h1>
          <Link to="/doctorlogin">
            <button type="button" className={styles.white_btn}>
              Sign in
            </button>
          </Link>
        </div>
        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              onChange={handleChange}
              value={data.name}
              required
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            />
            <input
              type="phone"
              placeholder="Phone Number"
              name="phone"
              onChange={handleChange}
              value={data.phone}
              required
              minLength={10}
              maxLength={10}
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Gender"
              name="gender"
              onChange={handleChange}
              value={data.gender}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Clinic Address"
              name="address"
              onChange={handleChange}
              value={data.address}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Hospital Name"
              name="hospitalName"
              onChange={handleChange}
              value={data.hospitalName}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Your Domain"
              name="yourDomain"
              onChange={handleChange}
              value={data.yourDomain}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Qualification"
              name="qualification"
              onChange={handleChange}
              value={data.qualification}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
