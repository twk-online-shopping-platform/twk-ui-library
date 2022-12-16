import React, { MouseEventHandler, useEffect } from "react";
import { SubMenuType } from "./Type";

const menuOnClickHandler = (
  e: any,
  setState: Function,
  state: boolean,
  subMenu: SubMenuType | undefined,
  clickHadler: MouseEventHandler | undefined,
  mainMenuHadler: any
) => {
  console.log("hello: ", state);
  e.preventDefault();
  if (subMenu && subMenu.menu && subMenu.menu.menuItems) {
    setState(state ? false : true);
  } else {
    mainMenuHadler(false);
    if (clickHadler) clickHadler(e);
  }
};

const useOutsideAlerter = (ref: any, setState: Function, state: boolean) => {
  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      console;
      if (ref.current && !ref.current.contains(event.target)) {
        if (!state) setState(false);
      }
    }

    // ref.current.addEventListener("mouseleave", handleClickOutside);
    // return () => {
    //   ref.current.removeEventListener("mouseenter", handleClickOutside);
    // };
  }, [ref]);
};

export { menuOnClickHandler, useOutsideAlerter };
