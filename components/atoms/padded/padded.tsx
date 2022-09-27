import { PropsWithChildren } from "react";
import styles from "./padded.module.scss";

const Padded = (props: PropsWithChildren) => {
	const { children } = props;

	return <div className={styles.padded}>{children}</div>;
};

export default Padded;
