import { PropsWithChildren } from "react";

import styles from "./column.module.scss";

interface ColumnProps extends PropsWithChildren {
	width?: number;
	alignItems?: string;
	justifyContent?: string;
}

const Column = (props: ColumnProps) => {
	const {
		width,
		alignItems = "flex-start",
		justifyContent = "flex-start",
		children,
	} = props;

	return (
		<div
			className={styles.column}
			style={{ width, alignItems, justifyContent }}
		>
			{children}
		</div>
	);
};

export default Column;
