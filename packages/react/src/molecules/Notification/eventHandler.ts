import React, { useEffect } from "react";
import { KeyboardKey } from "../../accessibility/KeyboardEvents";

const notificationNum = (val: number): string => {
  let displayValue: string = "0";
  if (val == null) {
    return displayValue;
  } else if (val > 9) {
    displayValue = "9+";
  } else if (val < 0) {
    displayValue = "0";
  } else {
    displayValue = val.toString();
  }
  return displayValue;
};

const useOutsideAlerter = (
  ref: any,
  setState: Function,
  setFocusState: Function
) => {
  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      if (ref.current && !ref.current.contains(event.target)) {
        setState(false);
        setFocusState(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

const onKeyDownNotification = (
  event: KeyboardEvent,
  setState: Function,
  state: boolean,
  focusableRefs: {
    value: Map<string, Map<string, React.MutableRefObject<any>>>;
  },
  setFocusState: Function
) => {
  if (event.key === KeyboardKey.ENTER.key) {
    notificationClickHandler(event, setState, state);
    if (focusableRefs && focusableRefs.value) {
      focusableRefs.value.forEach((childDom, key) => {
        setFocusState(childDom.entries().next().value[1]);
      });
    }
  } else if (event.key === KeyboardKey.ESCAPE.key) {
    setState(false);
  }
};

const notificationClickHandler = (
  e: any,
  setState: Function,
  state: boolean
) => {
  e.preventDefault();
  setState(!state);
};

export {
  notificationNum,
  useOutsideAlerter,
  notificationClickHandler,
  onKeyDownNotification,
};
