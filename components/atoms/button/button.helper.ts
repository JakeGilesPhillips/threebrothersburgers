import { CSSProperties } from "react";
import { Size } from "../../../variables/enums";

export const getButtonSize = (size: Size): CSSProperties => {
	switch (size) {
		case Size.XS:
			return { width: "12px" };
		case Size.S:
			return { width: "24px" };
		case Size.M:
			return { width: "48px" };
		case Size.L:
			return { width: "72px" };
		case Size.XL:
			return { width: "144px" };
	}
	return { flex: 1 };
};
