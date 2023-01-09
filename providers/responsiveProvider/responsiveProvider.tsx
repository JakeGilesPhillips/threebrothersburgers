import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import useScrollPosition from '../../hooks/useScrollPosition';
import { useWindowSize } from '../../hooks/useWindowSize';
import { widthLaptop, widthMobile, widthTablet } from '../../variables/constants';
import { Device } from '../../variables/enums';
import { useStore } from '../storeProvider/storeProvider';

export const ResponsiveProvider = ({ children }: { children: JSX.Element }) => {
  const { uiStore } = useStore();
  const { width } = useWindowSize();
  const scroll = useScrollPosition();

  useEffect(() => {
    uiStore.setDeviceType(Device.Desktop);
    if (width < widthLaptop) uiStore.setDeviceType(Device.Laptop);
    if (width < widthTablet) uiStore.setDeviceType(Device.Tablet);
    if (width < widthMobile) uiStore.setDeviceType(Device.Mobile);
  }, [width, uiStore]);

  useEffect(() => {
    uiStore.setScrollHeight(scroll);
  }, [scroll, uiStore]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    uiStore.setPageHeight(document.body.scrollHeight - window.innerHeight);
  }, [scroll, uiStore]);

  return <>{children}</>;
};

export default observer(ResponsiveProvider);
