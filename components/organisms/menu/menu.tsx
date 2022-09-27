/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { observer } from "mobx-react-lite";
import { useStore } from "../storeProvider/storeProvider";
import { Size } from "../../../variables/enums";

import Column from "../../atoms/column/column";
import MenuButton from "../../molecules/menuButton/menuButton";

import styles from "./menu.module.scss";

const menuItems = [
	{ label: "MENU", link: "/menu" },
	{ label: "ABOUT", link: "/about" },
	{ label: "BOOKINGS", link: "/bookings" },
	{ label: "EVENTS & PROMOTIONS", link: "/bookings" },
	{ label: "GALLERY", link: "/bookings" },
];

const images = [
	"/images/menu-button/lettuce.png",
	"/images/menu-button/burger_mid.png",
	"/images/menu-button/tomatoes.png",
	"/images/menu-button/burger_mid.png",
];
const bottom = "/images/menu-button/burger_bot.png";

const Menu = () => {
	const { uiStore } = useStore();
	const { menuOpen } = uiStore;

	return (
		<div className={styles.menu}>
			<Column alignItems="flex-end" justifyContent="flex-start">
				{menuItems.map(({ label, link }, index) => {
					return (
						<MenuButton
							key={index}
							link={link}
							image={
								index === menuItems.length - 1
									? bottom
									: images[index % images.length]
							}
							delay={index * 0.1}
							open={menuOpen}
							label={label}
							size={Size.Flex}
						/>
					);
				})}
			</Column>
		</div>
	);
};

export default observer(Menu);
