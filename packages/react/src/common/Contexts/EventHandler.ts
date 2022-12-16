import React, { ReactNode, useEffect } from "react";
import { KeyboardKey } from "../../accessibility/KeyboardEvents";
import { MenuType } from "../../molecules/Menu/Type";

const useOutsideAlerter = (ref: any, setState: Function) => {
  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      if (ref.current && !ref.current.contains(event.target)) {
        setState(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

const createDropDownStateListener = (
  setItemState: Function,
  mainContext: boolean,
  parentContext: Array<string>,
  currentId: string
) => {
  useEffect(() => {
    if (!mainContext) {
      setItemState(false);
    } else {
      if (!parentContext.includes(currentId)) {
        setItemState(false);
      }
    }
  }, [parentContext, mainContext]);
};

const onKeyDownDropDown = (event: any, setState: Function, state: boolean) => {
  if (event.key === KeyboardKey.ENTER.key) {
    event.preventDefault();
    setState(!state);
  } else if (event.key === KeyboardKey.ESCAPE.key) {
    setState(false);
  }
};

const dropDownClickHandler = (
  event: any,
  dropDownState: boolean,
  setDropDownState: Function,
  setMainContext: Function,
  dropdownLevelContext: Array<string>,
  setDropdownLevelContext: Function,
  uniqueId: string,
  parentsList: Array<string>,
  hashDropdown: any,
  clickHandler: Function | undefined
) => {
  event.preventDefault();
  if (hashDropdown) {
    if (dropDownState) {
      const contextClone = [...dropdownLevelContext];
      const updatedParentContext: string[] = [];
      if (contextClone.includes(uniqueId)) {
        contextClone.forEach((idValue) => {
          if (uniqueId === idValue) {
            setDropdownLevelContext(updatedParentContext);
            return;
          } else {
            updatedParentContext.push(idValue);
          }
        });
      }
      setDropDownState(false);
    } else {
      setDropdownLevelContext(parentsList);
      setDropDownState(true);
    }
    setMainContext(true);
  } else {
    setMainContext(false);
    setDropdownLevelContext([]);
    if (clickHandler) clickHandler(event);
  }
};

export {
  useOutsideAlerter,
  dropDownClickHandler,
  onKeyDownDropDown,
  createDropDownStateListener,
};
