/* eslint-disable @next/next/no-img-element */
import styles from "./errorContent.module.scss";

const ErrorContent = () => {
	return (
		<div className={styles.errorContent}>
			<div className={styles.errorContentWrapper}>
				<img
					className={styles.burgerTop}
					src="/images/menu-button/burger_top.png"
					alt="burger menu top bun"
					width={120}
					height={60}
				/>
				<span className={styles.errorText}>404 | Page Not Found</span>
				<img
					className={styles.burgerBot}
					src="/images/menu-button/burger_bot.png"
					alt="burger menu bottom bun"
					width={120}
					height={25}
				/>
			</div>
			<div className={styles.errorContentBackground} />
		</div>
	);
};

export default ErrorContent;
