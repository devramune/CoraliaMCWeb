// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GuildedLogomarkBlacksvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GuildedLogomarkBlacksvgIcon(
  props: GuildedLogomarkBlacksvgIconProps
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
      viewBox={"0 0 408 387"}
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
          "M95.5 101.5h216a362.505 362.505 0 01-2 43h-166c1.954 38.369 17.954 69.203 48 92.5a78.676 78.676 0 0012.5 7.5c15.126-7.628 27.626-18.295 37.5-32a883.56 883.56 0 00-42-1.5c-12.774-11.713-20.107-26.213-22-43.5 43.005-.333 86.005 0 129 1-10.068 46.029-34.402 82.195-73 108.5a201.52 201.52 0 01-24 12c-2.906 1.318-5.906 1.652-9 1-50.463-21.731-82.629-59.231-96.5-112.5a281.94 281.94 0 01-8.5-76z"
        }
        opacity={".998"}
      ></path>
    </svg>
  );
}

export default GuildedLogomarkBlacksvgIcon;
/* prettier-ignore-end */
