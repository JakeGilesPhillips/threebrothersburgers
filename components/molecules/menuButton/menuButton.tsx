/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { observer } from "mobx-react-lite";
import { CSSProperties, useMemo } from "react";

import { useStore } from "../../../providers/storeProvider/storeProvider";
import { IButtonProps } from "../../../variables/models";

import Button from "../../atoms/button/button";
import styles from "./menuButton.module.scss";

interface MenuButtonProps extends IButtonProps {
	delay: number;
	link: string;
	image: string;
	open: boolean;
}

const MenuButton = (props: MenuButtonProps) => {
	const { delay, link, image, open = false } = props;

	const navigation = useRouter();
	const { uiStore } = useStore();

	const _style: CSSProperties = useMemo(() => {
		return open
			? { marginTop: `0px`, opacity: 1, pointerEvents: "all" }
			: { marginTop: "-20px", opacity: 0, pointerEvents: "none" };
	}, [open]);

	const onClick = () => {
		uiStore.toggleMenu(false);
		navigation.push(link);
	};

	return (
		<div
			className={styles.menuButton}
			style={{ transitionDelay: `${delay}s`, ..._style }}
		>
			<Button {...props} bordered={false} onClick={onClick}>
				<img
					src={image}
					alt="menu button layer"
					width={30}
					height={4}
				/>
			</Button>
		</div>
	);
};
export default observer(MenuButton);
