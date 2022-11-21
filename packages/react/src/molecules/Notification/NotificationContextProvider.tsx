import React, { Reducer, useContext, useReducer, useState } from "react";

const MenuContext = React.createContext<boolean>(false);
const MenuUpdateContext = React.createContext<Function>(() => {});
const MenuItemRefListContext = React.createContext<
  Map<string, Array<{ itemKey: string; elem: React.MutableRefObject<any> }>>
>(new Map());
const MenuItemRefListUpdateContext = React.createContext<Function>(() => {});

const useMenuContext = () => useContext(MenuContext);
const useMenuUpdateContext = () => useContext(MenuUpdateContext);
const useMenuItemListRefContext = () => useContext(MenuItemRefListContext);
const useMenuItemRefListUpdateContext = () =>
  useContext(MenuItemRefListUpdateContext);
enum Actions {
  ADD_DOM = "ADD_DOM",
}

interface NavAction {
  type: string;
  payload: {
    parentId: string;
    itemId: string;
    dom: React.MutableRefObject<any>;
  };
}
interface NavState {
  value: Map<string, Map<string, React.MutableRefObject<any>>>;
  // state: string;
}

const navReducer: Reducer<NavState, NavAction> = (
  state: NavState,
  action: NavAction
) => {
  const { type, payload } = action;
  switch (type) {
    case Actions.ADD_DOM:
      let menuItemListClone = new Map();
      if (state.value) {
        menuItemListClone = new Map(state.value);
      }
      if (menuItemListClone && menuItemListClone.has(payload.parentId)) {
        menuItemListClone
          .get(payload.parentId)
          .set(payload.itemId, payload.dom);
      } else {
        const subRef: Map<string, React.MutableRefObject<any>> = new Map();
        subRef.set(payload.itemId, payload.dom);
        menuItemListClone = menuItemListClone.set(payload.parentId, subRef);
      }
      return { value: menuItemListClone };
  }
};

const NotificationContextProvider = ({ children }) => {
  const [navMenu, setNavMenu] = useState(false);
  const [menuItemList, dispatcher] = useReducer(navReducer, {
    value: new Map(),
  });

  const openCloseMenu = (value: boolean) => {
    setNavMenu(value);
  };

  const addFocusItem = (
    parentKey: string,
    subItemKey: string,
    componentRef: React.MutableRefObject<any>
  ) => {
    dispatcher({
      type: Actions.ADD_DOM,
      payload: { parentId: parentKey, itemId: subItemKey, dom: componentRef },
    });
  };

  return (
    <MenuContext.Provider value={navMenu}>
      <MenuUpdateContext.Provider value={openCloseMenu}>
        <MenuItemRefListContext.Provider value={menuItemList}>
          <MenuItemRefListUpdateContext.Provider value={addFocusItem}>
            {children}
          </MenuItemRefListUpdateContext.Provider>
        </MenuItemRefListContext.Provider>
      </MenuUpdateContext.Provider>
    </MenuContext.Provider>
  );
};
export {
  useMenuContext,
  useMenuUpdateContext,
  useMenuItemListRefContext,
  useMenuItemRefListUpdateContext,
};

export default NotificationContextProvider;
