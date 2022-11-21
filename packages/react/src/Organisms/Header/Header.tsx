import React from "react";
import { ColorClassType } from "../../atoms/Color/Type";
import Icon from "../../atoms/Icon/Icon";
import { IconSize } from "../../atoms/Icon/Type";
import Notification from "../../molecules/Notification/Notification";
import {
  TypographySize,
  TypographyVariant,
  TypographyWeight,
} from "../../atoms/Typography/Type";
import Typography from "../../atoms/Typography/Typography";
import Dropdown from "../../molecules/Dropdown/Dropdown";
import Menu from "../../molecules/Menu/Menu";
import { SubMenuPosition } from "../../molecules/MenuItem/Type";
import InputButtonGroup from "../../molecules/InputButtonGroup/InputButtonGroup";
import {
  headerNavTestId,
  headerSrchTestId,
  headerTestId,
  headerTopTestId,
} from "./HeaderConstants";
import { HeaderType } from "./Type";
import { MenuOrientation } from "../../molecules/Menu/Type";

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
          <div className="flx-h flx-gap-md">
            <Typography
              text="Order Tracking"
              variant={TypographyVariant.SMALL}
              size={TypographySize.LARGE}
              cssClasses="clr-txt-lnk"
            />
            <Menu
              menuItems={[
                {
                  label: "English",
                  textVariant: TypographyVariant.SMALL,
                  textSize: TypographySize.LARGE,
                  submenu: {
                    position: SubMenuPosition.UNDER_RIGHT,
                    menu: {
                      orientation: MenuOrientation.VERTICAL,
                      menuItems: [{ label: "English" }, { label: "Amharic" }],
                    },
                  },
                },
                {
                  label: "USD",
                  textVariant: TypographyVariant.SMALL,
                  textSize: TypographySize.LARGE,
                  submenu: {
                    position: SubMenuPosition.UNDER_RIGHT,
                    menu: {
                      orientation: MenuOrientation.VERTICAL,
                      menuItems: [{ label: "USD" }, { label: "ETH" }],
                    },
                  },
                },
              ]}
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
              variant={TypographyVariant.DISPLAY}
              size={TypographySize.EXTRA_SMALL}
              weight={TypographyWeight.BOLD}
              text="TechWorkshops"
            />
            {headerMenu ? (
              headerMenu.menuItems ? (
                <Menu menuItems={headerMenu.menuItems} />
              ) : null
            ) : null}
          </div>
          <div className="flx-h flx-gap-md">
            <Dropdown
              popupItems={[
                {
                  label: "Electronics",
                  leftIcon: "las la-headphones",
                },
                {
                  label: "Furnitures",
                  leftIcon: "las la-chair",
                },
                {
                  label: "Automotives",
                  leftIcon: "las la-car",
                },
              ]}
              icons={{
                open: "fa-solid fa-user",
                close: "fa-regular fa-user",
                cssValue: "clr-txt-lnk",
                size: IconSize.X_SMALL,
              }}
              uperText={{
                text: "Sign In",
                variant: TypographyVariant.SMALL,
                size: TypographySize.SMALL,
              }}
              lowerText={{
                text: "Account",
                variant: TypographyVariant.TEXT,
                size: TypographySize.SMALL,
                weight: TypographyWeight.MDIUM,
              }}
            />
            <Notification
              textSize={TypographySize.MEDIUM}
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
            <Notification
              textSize={TypographySize.MEDIUM}
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
            <Dropdown
              popupPositon={SubMenuPosition.UNDER_RIGHT}
              popupItems={[
                {
                  label: "Electronics",
                  leftIcon: "las la-headphones",
                },
                {
                  label: "Furnitures",
                  leftIcon: "las la-chair",
                },
                {
                  label: "Automotives",
                  leftIcon: "las la-car",
                },
              ]}
              uperText={{
                text: "Total",
                variant: TypographyVariant.SMALL,
                size: TypographySize.SMALL,
              }}
              lowerText={{
                text: "$0.00",
                variant: TypographyVariant.TEXT,
                size: TypographySize.SMALL,
                weight: TypographyWeight.MDIUM,
              }}
            />
          </div>
        </div>
      </div>

      <div className="flx-h flx-spc-ctr  dvc-full clr-bg-gray-800 pdd-v-sm pdd-h-sm">
        <div className="flx-h dvc-disktop " data-testid={headerSrchTestId}>
          <Dropdown
            popupItems={[
              {
                label: "Electronics",
                leftIcon: "las la-headphones",
              },
              {
                label: "Furnitures",
                leftIcon: "las la-chair",
              },
              {
                label: "Automotives",
                leftIcon: "las la-car",
              },
            ]}
            icons={{
              open: "fa-solid fa-bars-staggered",
              close: "fa-solid fa-bars",
              cssValue: "clr-txt-gray-400 clr-txt-lnk",
            }}
            uperText={{
              text: "All department for you",
              variant: TypographyVariant.TEXT,
              cssClasses: "clr-txt-gray-400",
            }}
            lowerText={{
              text: "total 66 products",
              variant: TypographyVariant.SMALL,
              cssClasses: "clr-txt-gray-400",
            }}
          />
          <div className="flx-h flx-gap-sm">
            <Typography
              text="What are you looking for ?"
              color={{ value: "400", type: ColorClassType.GRAY }}
            />
            <InputButtonGroup
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
