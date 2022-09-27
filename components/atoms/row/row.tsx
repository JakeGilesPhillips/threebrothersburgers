import { PropsWithChildren } from "react";

import styles from "./row.module.scss";

interface RowProps extends PropsWithChildren {
	columnWidth?: number;
	alignItems?: string;
	justifyContent?: string;
}

const Row = (props: RowProps) => {
	const {
		alignItems = "flex-start",
		justifyContent = "flex-start",
		children,
	} = props;

	return (
		<div className={styles.row} style={{ alignItems, justifyContent }}>
			{children}
		</div>
	);
};

export default Row;
