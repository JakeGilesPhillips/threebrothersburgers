import { CSSProperties, PropsWithChildren, useMemo } from "react";
import { Size } from "../../../variables/enums";
import { IButtonProps } from "../../../variables/models";
import { getButtonSize } from "./button.helper";

import styles from "./button.module.scss";

const Button = (props: PropsWithChildren<IButtonProps>) => {
	const {
		label,
		color = "white",
		size = Size.L,
		animated = false,
		bordered = true,
		onClick = () => null,
		children,
	} = props;

	const _size: CSSProperties = useMemo(() => {
		return size ? getButtonSize(size) : {};
	}, [size]);

	const _border: CSSProperties = useMemo(() => {
		return {
			borderWidth: bordered ? `1px` : `0px`,
			padding: bordered ? `8px` : 0,
		};
	}, [bordered]);

	return (
		<div
			className={styles.button}
			style={{ ..._size, ..._border, color }}
			onClick={onClick}
		>
			{animated && <div className={styles.buttonHover} />}
			{label && <span className={styles.buttonLabel}>{label}</span>}
			{children}
		</div>
	);
};

export default Button;
