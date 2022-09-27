import { PropsWithChildren, useMemo } from "react";
import styles from "./content.module.scss";

interface ContentProps extends PropsWithChildren {
	fixed?: boolean;
	alignItems?: string;
	justifyContent?: string;
	background?: string;
}

const Content = (props: ContentProps) => {
	const {
		fixed = false,
		alignItems,
		justifyContent,
		background = "",
		children,
	} = props;

	const style = useMemo(() => {
		if (fixed) return { width: "100%", height: "100vh" };
	}, [fixed]);

	return (
		<div
			className={styles.content}
			style={{
				...style,
				backgroundImage: `url(${background})`,
				alignItems,
				justifyContent,
			}}
		>
			{children}
		</div>
	);
};

export default Content;
