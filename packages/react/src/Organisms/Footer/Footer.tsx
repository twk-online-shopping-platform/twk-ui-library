import React from "react";
import { Button, Icon, TextField, Typography } from "../../atoms";
import { ButtondRadius } from "../../atoms/Button/Type";
import { ColorClassType } from "../../atoms/Color/Type";
import { TextFieldRadius } from "../../atoms/Field/Text/Type";
import { IconSize } from "../../atoms/Icon/Type";
import {
  TypographySize,
  TypographyVariant,
  TypographyWeight,
} from "../../atoms/Typography/Type";
import InputButtonGroup from "../../molecules/InputButtonGroup/InputButtonGroup";
import Menu from "../../molecules/Menu/Menu";
import { MenuOrientation } from "../../molecules/Menu/Type";
import Container from "../../template/Container/Container";
import {
  ContainerStyleType,
  FlexContainAlign,
  FlexFlow,
  GapSize,
  GridColumn,
} from "../../template/Container/Type";
import { FooterType, TwkFooterThemeColors, TwkPadding } from "./Type";

const Footer = ({ theme, padding }: FooterType) => {
  const footerStyleClasses: string =
    (theme ? theme : TwkFooterThemeColors.GRAY) +
    " " +
    (padding ? padding : TwkPadding.SMALL);

  return (
    <React.Fragment>
      <Container
        type={ContainerStyleType.FLEX}
        flexContentAlign={FlexContainAlign.CENTER}
        style=" pdd-v-sm clr-bg-gray-800 "
        flexGap={GapSize.EXTRA_LARGE}
      >
        <Container type={ContainerStyleType.FLEX} style=" clr-txt-white-white ">
          <Icon cssValue="fa-brands fa-mailchimp" size={IconSize.MDIUM} />
          <Container
            type={ContainerStyleType.FLEX}
            style=" clr-txt-white-white flx-v-lft "
            flexFlow={FlexFlow.COLMN}
          >
            <Typography
              text="Subscribe to our newsletters"
              variant={TypographyVariant.HEADING}
              size={TypographySize.MEDIUM}
            />
            <Typography
              text="Sign up and receive the latest tips via email."
              variant={TypographyVariant.SMALL}
              size={TypographySize.SMALL}
            />
          </Container>
        </Container>

        <InputButtonGroup
          buttonText="Subscribe"
          fieldRaddius={TextFieldRadius.RIGHT_CURVE}
          buttonRadius={ButtondRadius.LEFT_CURVE}
        />
      </Container>
      <Container
        type={ContainerStyleType.FLEX}
        flexFlow={FlexFlow.COLMN}
        style={footerStyleClasses}
      >
        <Container
          type={ContainerStyleType.GRID}
          gridColumn={GridColumn.FOUR}
          gridGap={{ column: GapSize.LARGE, row: GapSize.LARGE }}
        >
          <Container
            type={ContainerStyleType.FLEX}
            flexFlow={FlexFlow.COLMN}
            flexGap={GapSize.LARGE}
            style=" flx-v-lft "
          >
            <Typography
              text="TWK Shopping Platform"
              weight={TypographyWeight.BOLD}
              color={{ type: ColorClassType.GRAY, value: "900" }}
              variant={TypographyVariant.HEADING}
            />
            <Typography
              variant={TypographyVariant.TEXT}
              size={TypographySize.EXTRA_SMALL}
              weight={TypographyWeight.NORMAL}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       Donec pellentesque efficitur turpis, vitae dictum dolor tristique in.
"
            />
            <Container
              type={ContainerStyleType.GRID}
              gridColumn={GridColumn.FIVE}
            >
              <Icon cssValue="fa-brands fa-facebook" />
              <Icon cssValue="fa-brands fa-google" />
              <Icon cssValue="fa-brands fa-instagram" />
              <Icon cssValue="fa-brands fa-linkedin" />
              <Icon cssValue="fa-brands fa-twitter" />
            </Container>
          </Container>
          <Container
            type={ContainerStyleType.FLEX}
            flexFlow={FlexFlow.COLMN}
            flexGap={GapSize.LARGE}
            style=" flx-v-lft "
          >
            <Typography
              text="Contat Info"
              variant={TypographyVariant.HEADING}
              weight={TypographyWeight.BOLD}
              color={{ type: ColorClassType.GRAY, value: "900" }}
            />
            <Menu
              orientation={MenuOrientation.VERTICAL}
              style=" flx-gap-md "
              menuItems={[
                {
                  label: "(684)-131-3233",
                  uniqueId: "1",
                  leftIcon: "fa-solid fa-phone",
                  parentsList: ["1"],
                },
                {
                  label: "name@email.com",
                  uniqueId: "2",
                  leftIcon: "fa-regular fa-envelope",
                  parentsList: ["2"],
                },
                {
                  label: "6391 Elgin St. Celina, Delaware 10299",
                  uniqueId: "3",
                  leftIcon: "fa-solid fa-thumbtack",
                  parentsList: ["3"],
                },
              ]}
            />
          </Container>
          <Container
            type={ContainerStyleType.FLEX}
            flexFlow={FlexFlow.COLMN}
            flexGap={GapSize.MID}
            style=" flx-v-lft "
          >
            <Typography
              text="Company"
              variant={TypographyVariant.HEADING}
              weight={TypographyWeight.BOLD}
              color={{ type: ColorClassType.GRAY, value: "900" }}
            />
            <Container
              type={ContainerStyleType.GRID}
              gridColumn={GridColumn.ONE}
              gridGap={{ column: GapSize.EXTRA_EXTRA_SMALL, row: GapSize.MID }}
            >
              <Typography
                text="About Us"
                variant={TypographyVariant.TEXT}
                color={{ type: ColorClassType.GRAY, value: "900" }}
              />{" "}
              <Typography
                text="Service"
                variant={TypographyVariant.TEXT}
                color={{ type: ColorClassType.GRAY, value: "900" }}
              />{" "}
              <Typography
                text="Case Studies"
                variant={TypographyVariant.TEXT}
                color={{ type: ColorClassType.GRAY, value: "900" }}
              />
              <Typography
                text="Blog"
                variant={TypographyVariant.TEXT}
                color={{ type: ColorClassType.GRAY, value: "900" }}
              />
              <Typography
                text="Contact"
                variant={TypographyVariant.TEXT}
                color={{ type: ColorClassType.GRAY, value: "900" }}
              />
            </Container>
          </Container>
          <Container
            type={ContainerStyleType.FLEX}
            flexFlow={FlexFlow.COLMN}
            flexGap={GapSize.MID}
            style=" flx-v-lft "
          >
            <Typography
              text="Twitter"
              variant={TypographyVariant.HEADING}
              weight={TypographyWeight.BOLD}
              color={{ type: ColorClassType.GRAY, value: "900" }}
            />
          </Container>
        </Container>
        <div className="dvc-full pdd-v-md">
          <hr />
          <Container
            type={ContainerStyleType.FLEX}
            flexFlow={FlexFlow.ROW}
            flexContentAlign={FlexContainAlign.LEFT_RIGHT}
            style=" pdd-v-sm "
          >
            <Typography text="Copyright © 2022 ThemeRage. All Right Reserved." />
            <Container
              type={ContainerStyleType.FLEX}
              flexFlow={FlexFlow.ROW}
              flexContentAlign={FlexContainAlign.RIGHT}
              style=" flx-screen-half "
            >
              <Typography text="Made With" />
              <Icon cssValue="fa-regular fa-heart" />
              <Typography text="By TWK Shopping Platform" />
            </Container>
          </Container>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Footer;
