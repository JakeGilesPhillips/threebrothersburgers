import { Size } from "../../../variables/enums";

import Button from "../../atoms/button/button";
import Column from "../../atoms/column/column";
import Padded from "../../atoms/padded/padded";

const HomeContent = () => {
	return (
		<Padded>
			<Column alignItems="center" justifyContent="center">
				<Button
					label="MAKE A BOOKING"
					size={Size.XL}
					animated
					bordered
				/>
			</Column>
		</Padded>
	);
};

export default HomeContent;
