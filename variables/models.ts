import { PopupType, Size } from "./enums";

export interface IButtonProps {
	label?: string;
	color?: string;
	animated?: boolean;
	bordered?: boolean;
	size?: Size;
	onClick?: () => void;
}

export interface IPopupMessage {
	type: PopupType;
	message: string;
	button?: IButtonProps;
	background?: boolean;
}
