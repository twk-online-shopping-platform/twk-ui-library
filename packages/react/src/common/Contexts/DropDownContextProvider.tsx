import React, { Reducer, useContext, useReducer, useState } from "react";
import { DropDownContextType } from "./ContextType";

const MenuContext = React.createContext<boolean>(false);
const MenuUpdateContext = React.createContext<Function>(() => {});
const ParentRefContext =
  React.createContext<React.MutableRefObject<any> | null>(null);
const ParentRefUpdateContext = React.createContext<Function>(() => {});
const DropDownLevelContext = React.createContext<Array<string>>([]);
const DropDownLevelUpdateContext = React.createContext<Function>(() => {});

const useMenuContext = () => useContext(MenuContext);
const useMenuUpdateContext = () => useContext(MenuUpdateContext);
const useParentRefContext = () => useContext(ParentRefContext);
const useParentRefUpdateContext = () => useContext(ParentRefUpdateContext);
const useDropDownLevelContext = () => useContext(DropDownLevelContext);
const useDropDownLevelUpdateContext = () =>
  useContext(DropDownLevelUpdateContext);

const DropDownContextProvider = ({ children }: DropDownContextType) => {
  const [mainDropDownContext, setMainDropDownContext] = useState(false);
  const [parentDropDownRefContext, setParentDropDownRefContext] =
    useState<React.MutableRefObject<any> | null>(null);
  const [dropDownLevelContext, setDropDownLevelContext] = useState<
    Array<string>
  >([]);

  const mainContextHandler = (value: boolean) => {
    setMainDropDownContext(value);
  };

  const parentRefContextHandler = (
    value: React.MutableRefObject<any> | null
  ) => {
    setParentDropDownRefContext(value);
  };

  const dropDownLevelContextHandler = (value: string[]) => {
    setDropDownLevelContext(value);
  };

  return (
    <MenuContext.Provider value={mainDropDownContext}>
      <MenuUpdateContext.Provider value={mainContextHandler}>
        <ParentRefContext.Provider value={parentDropDownRefContext}>
          <ParentRefUpdateContext.Provider value={parentRefContextHandler}>
            <DropDownLevelContext.Provider value={dropDownLevelContext}>
              <DropDownLevelUpdateContext.Provider
                value={dropDownLevelContextHandler}
              >
                {children}
              </DropDownLevelUpdateContext.Provider>
            </DropDownLevelContext.Provider>
          </ParentRefUpdateContext.Provider>
        </ParentRefContext.Provider>
      </MenuUpdateContext.Provider>
    </MenuContext.Provider>
  );
};
export {
  useMenuContext,
  useMenuUpdateContext,
  useDropDownLevelContext,
  useDropDownLevelUpdateContext,
};

export default DropDownContextProvider;
