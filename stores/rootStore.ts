import { makeObservable, observable } from "mobx";

import UIStore from "./uiStore";

export default class RootStore {
	uiStore: UIStore;

	constructor() {
		this.uiStore = new UIStore(this);

		makeObservable(this, {
			uiStore: observable,
		});
	}
}
