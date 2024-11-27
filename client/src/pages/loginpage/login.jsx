import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/v1/auth/login";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
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
		<>
		<video autoPlay muted loop id="myVideo">
        	<source src="/assets/videos/bg.mp4" type="video/mp4" />
        </video>
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
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
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
							/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.white_btn}>
							Sign In
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<img src="/assets/images/logo/logo.jpg" alt="" />
					<h1>New Here ?</h1>
					<Link to="/Register">
						<button type="button" className={styles.green_btn}>
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
		</>
	);
};

export default Login;