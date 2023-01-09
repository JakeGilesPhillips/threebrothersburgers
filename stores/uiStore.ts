import { makeObservable, action, observable, computed } from 'mobx';
import { useMediaQuery } from 'react-responsive';
import { widthMobile } from '../variables/constants';
import { Device } from '../variables/enums';
import { IPopupMessage } from '../variables/models';
import RootStore from './rootStore';

export default class UIStore {
  private rootStore: RootStore;

  popupMessage?: IPopupMessage = undefined;

  menuOpen: boolean = false;

  deviceType: Device = Device.Unknown;

  threshold: number = 100;

  pageHeight: number = 0;

  scrollHeight: number = 0;

  get isMobile() {
    return (this.deviceType = Device.Mobile);
  }

  get isTablet() {
    return (this.deviceType = Device.Tablet);
  }

  get isLaptop() {
    return (this.deviceType = Device.Laptop);
  }

  get isDesktop() {
    return (this.deviceType = Device.Desktop);
  }

  constructor(store: RootStore) {
    this.rootStore = store;

    makeObservable(this, {
      popupMessage: observable,
      menuOpen: observable,
      deviceType: observable,
      threshold: observable,
      pageHeight: observable,
      scrollHeight: observable,
      isMobile: computed,
      isTablet: computed,
      isLaptop: computed,
      isDesktop: computed,
      togglePopupMessage: action,
      toggleMenu: action,
      setDeviceType: action,
      setScrollHeight: action,
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

  setDeviceType = (device?: Device) => {
    this.deviceType = device ?? Device.Unknown;
  };

  setPageHeight = (height?: number) => {
    this.pageHeight = height ?? 0;
  };

  setScrollHeight = (scroll?: number) => {
    this.scrollHeight = scroll ?? 0;
  };
}
