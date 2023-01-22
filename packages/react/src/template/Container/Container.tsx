import React from "react";
import {
  ContainerStyleType,
  ContainerType,
  FlexContainAlign,
  FlexFlow,
  GapSize,
  GridColumn,
  GridGap,
} from "./Type";

const Container = ({
  children,
  type,
  flexFlow,
  flexWrap,
  flexGap,
  gridColumn,
  flexContentAlign,
  gridGap,
  style,
  refObject,
}: ContainerType) => {
  const flexFlowValue = getFlexFlowValue(type, flexFlow);
  const flexGapValue = getFlexGapValue(type, flexGap);
  const flexContentAlignValue = getContentAlignValue(type, flexContentAlign);
  const gridColumnValue = getGridColumnValue(type, gridColumn);
  const gridGapValue = getGridGapValue(type, gridGap);
  const containerClassName = `${
    type ? type : ContainerStyleType.FLEX
  }${flexFlowValue} ${
    flexWrap ? "flx-wrap" : ""
  } ${flexGapValue} ${flexContentAlignValue} ${
    type ? (type == ContainerStyleType.GRID ? gridColumnValue : "") : ""
  } ${
    type ? (type == ContainerStyleType.GRID ? gridGapValue : "") : ""
  } ${style}`;
  if (refObject) {
    return (
      <div className={containerClassName} ref={refObject}>
        {children}
      </div>
    );
  } else {
    return <div className={containerClassName}>{children}</div>;
  }
};

export default Container;

const getFlexFlowValue = (
  type: ContainerStyleType,
  flexFlow: FlexFlow | undefined
) => {
  return type
    ? type == ContainerStyleType.FLEX
      ? flexFlow
        ? "-" + flexFlow
        : "-h"
      : ""
    : "-h";
};

const getFlexGapValue = (
  type: ContainerStyleType,
  flexGap: GapSize | undefined
) => {
  return type
    ? type == ContainerStyleType.FLEX
      ? flexGap
        ? "flx-gap-" + flexGap
        : "flx-gap-sm"
      : ""
    : "flx-gap-sm";
};

const getContentAlignValue = (
  type: ContainerStyleType,
  flexContentAlign: FlexContainAlign | undefined
) => {
  return type
    ? type == ContainerStyleType.FLEX
      ? flexContentAlign
        ? flexContentAlign
        : "flx-spc-lft"
      : ""
    : "flx-spc-lft";
};

const getGridColumnValue = (
  type: ContainerStyleType,
  gridColumn: GridColumn | undefined
) => {
  return type
    ? type == ContainerStyleType.GRID
      ? gridColumn
        ? "grd-col-" + gridColumn
        : "grd-col-" + GridColumn.TWELVE
      : "grd-col-" + GridColumn.TWELVE
    : "";
};

const getGridGapValue = (
  type: ContainerStyleType,
  gridGap: GridGap | undefined
) => {
  const columnGap = type
    ? type == ContainerStyleType.GRID
      ? gridGap
        ? gridGap.column
          ? "grd-c-gap-" + gridGap.column
          : "grd-c-gap-" + GapSize.SMALL
        : "grd-c-gap-" + GapSize.SMALL
      : ""
    : "";
  const rowGap = type
    ? type == ContainerStyleType.GRID
      ? gridGap
        ? gridGap.row
          ? "grd-r-gap-" + gridGap.row
          : "grd-r-gap-" + GapSize.SMALL
        : "grd-r-gap-" + GapSize.SMALL
      : ""
    : "";
  return columnGap + " " + rowGap;
};
