import { RiFacebookCircleLine, RiTwitterLine } from "react-icons/ri";

import Column from "../../atoms/column/column";
import Padded from "../../atoms/padded/padded";
import Row from "../../atoms/row/row";

import styles from "./footer.module.scss";

const Footer = () => {
	return (
		<footer id={styles.footer}>
			<Padded>
				<Row alignItems="flex-end">
					<Column alignItems="flex-start" justifyContent="flex-end">
						<span>Three Brothers Burgers</span>
						<span>Welsh Back</span>
						<span>Bristol, BS1 4SB</span>
					</Column>
					{/* <Column alignItems="center" justifyContent="center">
						<Row>
							<span>
								<RiFacebookCircleLine />
							</span>
							<span>
								<RiTwitterLine />
							</span>
						</Row>
					</Column> */}
					<Column alignItems="flex-end" justifyContent="flex-end">
						<span>01179 277050</span>
						<span>info@threebrothersburgers.co.uk</span>
					</Column>
				</Row>
			</Padded>
		</footer>
	);
};

export default Footer;
