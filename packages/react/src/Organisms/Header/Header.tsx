import React from "react";
import Icon from "../../atoms/Icon/Icon";
import NotificationIcon from "../../atoms/NotificationIcon/NotificationIcon";
import {
  TypographyColorType,
  TypographySize,
  TypographyVariant,
  TypographyWeight,
} from "../../atoms/Typography/Type";
import Typography from "../../atoms/Typography/Typography";
import Menu from "../../molecules/Menu/Menu";
import SearchField from "../../molecules/SearchField/SearchField";
import {
  headerNavTestId,
  headerSrchTestId,
  headerTestId,
  headerTopTestId,
} from "./HeaderConstants";
import { HeaderType } from "./Type";

const Header = ({ headerMenu }: HeaderType) => {
  const headerClassName = `flx-v flx-gap-lg`;
  return (
    <div className={headerClassName} data-testid={headerTestId}>
      <div className="flx-h flx-spc-ctr  dvc-full">
        <div className="flx-h dvc-disktop" data-testid={headerTopTestId}>
          <div className="flx-h flx-gap-sm">
            <Typography
              text="About Us"
              variant={TypographyVariant.SMALL}
              size={TypographySize.LARGE}
            />
            <Typography
              text="My account"
              variant={TypographyVariant.SMALL}
              size={TypographySize.LARGE}
            />
          </div>
          <div className="flx-h">
            <Typography text="Order Tracking" />
          </div>
        </div>
      </div>

      <div className="flx-h flx-spc-ctr dvc-full">
        <div className="flx-h dvc-disktop" data-testid={headerNavTestId}>
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
                <Icon cssValue="fa-regular fa-user" />
              </React.Fragment>
              <div className="flx-v">
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
            <NotificationIcon icon="fa-regular fa-heart" value={0} />
            <NotificationIcon icon="fa-solid fa-cart-shopping" value={0} />
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

      <div className="flx-h flx-spc-ctr  dvc-full clr-bg-gray-800 pdd-v-sm">
        <div className="flx-h dvc-disktop " data-testid={headerSrchTestId}>
          <div className="flx-h"></div>
          <div className="flx-h flx-gap-sm">
            <Typography
              text="What are you looking for ?"
              color={{ value: "white", type: TypographyColorType.WHITE }}
            />
            <SearchField buttonText="Search" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
