import styles from "./logo.module.scss";

const Logo = () => {
	const onClick = () => {
		window.location.href = "/";
	};

	return (
		<span className={styles.logo} onClick={onClick}>
			THREE BROTHERS <span className={styles.light}>BURGERS</span>
		</span>
	);
};

export default Logo;
