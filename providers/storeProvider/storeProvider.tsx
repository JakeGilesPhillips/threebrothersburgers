import React from 'react';
import RootStore from '../../stores/rootStore';

const store = new RootStore();
const StoreContext = React.createContext(store);
const useStore = () => React.useContext(StoreContext);

const StoreProvider = ({ children }: { children: JSX.Element }) => (
  <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
);

export { store, useStore };
export default StoreProvider;
