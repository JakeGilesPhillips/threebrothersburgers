import Row from "../../atoms/row/row";
import Logo from "../../atoms/logo/logo";
import Burger from "../../atoms/burger/burger";
import Padded from "../../atoms/padded/padded";
import Menu from "../../organisms/menu/menu";

import styles from "./header.module.scss";

const Header = () => {
	return (
		<div id={styles.header}>
			<Padded>
				<Row alignItems="center" justifyContent="space-between">
					<Logo />
					<Burger />
				</Row>
			</Padded>

			<Menu />
		</div>
	);
};

export default Header;
