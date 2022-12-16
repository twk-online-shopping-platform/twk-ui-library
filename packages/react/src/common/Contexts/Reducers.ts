import React, { Reducer } from "react";
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
}
enum Actions {
  ADD_DOM = "ADD_DOM",
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

export { navReducer, Actions };
