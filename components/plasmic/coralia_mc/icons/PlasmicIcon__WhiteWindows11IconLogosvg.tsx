// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WhiteWindows11IconLogosvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WhiteWindows11IconLogosvgIcon(
  props: WhiteWindows11IconLogosvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      shapeRendering={"geometricPrecision"}
      textRendering={"geometricPrecision"}
      imageRendering={"optimizeQuality"}
      fillRule={"evenodd"}
      clipRule={"evenodd"}
      viewBox={"0 0 500 500"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M5.5 5.5h236v236H5.5V5.5zm252 0h236v236h-236V5.5zm-252 252h236v236H5.5v-236zm252 0h236v236h-236v-236z"
        }
        opacity={".994"}
      ></path>
    </svg>
  );
}

export default WhiteWindows11IconLogosvgIcon;
/* prettier-ignore-end */
