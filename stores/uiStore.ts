import { makeObservable, action, observable } from "mobx";
import { IPopupMessage } from "../variables/models";
import RootStore from "./rootStore";

export default class UIStore {
	private rootStore: RootStore;

	popupMessage?: IPopupMessage = undefined;

	menuOpen: boolean = false;

	constructor(store: RootStore) {
		this.rootStore = store;

		makeObservable(this, {
			popupMessage: observable,
			menuOpen: observable,
			togglePopupMessage: action,
			toggleMenu: action,
		});
	}

	togglePopupMessage = (message?: IPopupMessage) => {
		if (!message) this.popupMessage = undefined;
		else this.popupMessage = message;
	};

	toggleMenu = (open?: boolean) => {
		if (open != null) this.menuOpen = open;
		else this.menuOpen = !this.menuOpen;
	};
}
