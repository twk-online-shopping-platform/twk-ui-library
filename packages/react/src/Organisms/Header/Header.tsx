import React from "react";
import Icon from "../../atoms/Icon/Icon";
import { IconSize } from "../../atoms/Icon/Type";
import NotificationIcon from "../../atoms/NotificationIcon/NotificationIcon";
import {
  TypographyColorType,
  TypographySize,
  TypographyVariant,
  TypographyWeight,
} from "../../atoms/Typography/Type";
import Typography from "../../atoms/Typography/Typography";
import Dropdown from "../../molecules/Dropdown/Dropdown";
import Menu from "../../molecules/Menu/Menu";
import SearchField from "../../molecules/SearchField/SearchField";
import {
  headerNavTestId,
  headerSrchTestId,
  headerTestId,
  headerTopTestId,
} from "./HeaderConstants";
import { HeaderType } from "./Type";

const Header = ({ headerMenu, navNotification }: HeaderType) => {
  const headerClassName = `flx-v flx-gap-lg`;
  return (
    <div className={headerClassName} data-testid={headerTestId}>
      <div className="flx-h flx-spc-ctr  dvc-full clr-bg-gray-300">
        <div
          className="flx-h dvc-disktop clr-txt-gray-700 "
          data-testid={headerTopTestId}
        >
          <div className="flx-h flx-gap-sm">
            <Typography
              text="About Us"
              variant={TypographyVariant.SMALL}
              size={TypographySize.LARGE}
              cssClasses="clr-txt-lnk"
            />
            <Typography
              text="My account"
              variant={TypographyVariant.SMALL}
              size={TypographySize.LARGE}
              cssClasses="clr-txt-lnk"
            />
          </div>
          <div className="flx-h">
            <Typography
              text="Order Tracking"
              variant={TypographyVariant.SMALL}
              size={TypographySize.LARGE}
              cssClasses="clr-txt-lnk"
            />
          </div>
        </div>
      </div>

      <div className="flx-h flx-spc-ctr dvc-full">
        <div
          className="flx-h dvc-disktop clr-bg-white-white"
          data-testid={headerNavTestId}
        >
          <div className="flx-h flx-gap-xl">
            <Typography
              variant={TypographyVariant.HEADING}
              size={TypographySize.LARGE}
              text="TechWorkshops"
            />
            {headerMenu ? (
              headerMenu.menuItems ? (
                <Menu menuItems={headerMenu.menuItems} />
              ) : null
            ) : null}
          </div>
          <div className="flx-h flx-gap-md">
            <div className="flx-h flx-gap-sm">
              <React.Fragment>
                <Icon cssValue="fa-regular fa-user" size={IconSize.X_SMALL} />
              </React.Fragment>
              <div className="flx-v flx-v-lft">
                <Typography
                  text="Sign In"
                  variant={TypographyVariant.SMALL}
                  size={TypographySize.SMALL}
                />
                <Typography
                  text="Account"
                  variant={TypographyVariant.TEXT}
                  size={TypographySize.SMALL}
                  weight={TypographyWeight.MDIUM}
                />
              </div>
            </div>
            <NotificationIcon
              icon={
                navNotification
                  ? navNotification.like
                    ? navNotification.like.icon
                    : ""
                  : ""
              }
              value={
                navNotification
                  ? navNotification.like
                    ? navNotification.like.value
                    : 0
                  : 0
              }
            />
            <NotificationIcon
              icon={
                navNotification
                  ? navNotification.cart
                    ? navNotification.cart.icon
                    : ""
                  : ""
              }
              value={
                navNotification
                  ? navNotification.cart
                    ? navNotification.cart.value
                    : 0
                  : 0
              }
            />
            <div className="flx-v">
              <Typography
                text="Total"
                variant={TypographyVariant.SMALL}
                size={TypographySize.SMALL}
              />
              <Typography
                text="$0.00"
                variant={TypographyVariant.TEXT}
                size={TypographySize.SMALL}
                weight={TypographyWeight.MDIUM}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flx-h flx-spc-ctr  dvc-full clr-bg-gray-800 pdd-v-sm pdd-h-sm">
        <div className="flx-h dvc-disktop " data-testid={headerSrchTestId}>
          <Dropdown />
          <div className="flx-h flx-gap-sm">
            <Typography
              text="What are you looking for ?"
              color={{ value: "400", type: TypographyColorType.GRAY }}
            />
            <SearchField
              buttonText="Search"
              searchFieldPlaceHolder="Search for products"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
