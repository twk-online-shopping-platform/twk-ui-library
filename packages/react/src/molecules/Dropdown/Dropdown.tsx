import React, {
  KeyboardEventHandler,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import Icon from "../../atoms/Icon/Icon";
import { IconSize } from "../../atoms/Icon/Type";
import { TypographyVariant } from "../../atoms/Typography/Type";
import Typography from "../../atoms/Typography/Typography";
import DropDownContextProvider, {
  useMenuContext,
  useMenuUpdateContext,
} from "../../common/Contexts/DropDownContextProvider";
import Menu from "../Menu/Menu";
import { MenuOrientation } from "../Menu/Type";
import MenuItem from "../MenuItem/MenuItem";
import {
  dropDownClickHandler,
  onKeyDownDropDown,
  useOutsideAlerter,
} from "../../common/Contexts/EventHandler";
import { dropdownTestId } from "./DropdownConstants";
import { DropdownType } from "./Type";
const DropdownComponent = ({
  popupItems,
  icons,
  lowerText,
  uperText,
  popupPositon,
}: DropdownType) => {
  const mainContext = useMenuContext();
  const setMainContext = useMenuUpdateContext();
  const menuRef = useRef(null);

  useOutsideAlerter(menuRef, setMainContext);

  const keyboardHandler: KeyboardEventHandler<HTMLDivElement> = (e) => {
    onKeyDownDropDown(e, setMainContext, mainContext);
  };

  return (
    <div className="mni-c" ref={menuRef}>
      <div
        tabIndex={0}
        className={`mni flx-h  flx-spc-ctr flx-gap-sm`}
        data-testid={dropdownTestId}
        onClick={(e) => {
          e.preventDefault();
          setMainContext(!mainContext);
        }}
        onKeyDown={keyboardHandler}
      >
        {icons ? (
          <Icon
            cssValue={`${mainContext ? icons.open : icons.close} ${
              icons ? (icons.cssValue ? icons.cssValue : "") : ""
            }`}
            size={icons.size ? icons.size : IconSize.SMALL}
          />
        ) : null}

        <div className="flx-v flx-v-lft clr-txt-lnk">
          {uperText ? <Typography {...uperText} /> : null}
          {lowerText ? <Typography {...lowerText} /> : null}
        </div>
      </div>
      <div
        className={`mni-p mni-p-${
          popupPositon ? popupPositon : "under"
        } mni-p-${
          mainContext ? "on" : "off"
        }  b-rd-blue b-rd-thick b-style-d clr-bg-white-white`}
      >
        {popupItems ? popupItems : null}
      </div>
    </div>
  );
};

const DropDown = ({ ...props }: DropdownType) => {
  return (
    <DropDownContextProvider>
      <DropdownComponent {...props} />
    </DropDownContextProvider>
  );
};
export default DropDown;
