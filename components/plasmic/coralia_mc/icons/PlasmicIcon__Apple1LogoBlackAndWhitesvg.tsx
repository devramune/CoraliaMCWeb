// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Apple1LogoBlackAndWhitesvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function Apple1LogoBlackAndWhitesvgIcon(
  props: Apple1LogoBlackAndWhitesvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.0"}
      viewBox={"0 0 2400 2853"}
      preserveAspectRatio={"xMidYMid meet"}
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
    </svg>
  );
}

export default Apple1LogoBlackAndWhitesvgIcon;
/* prettier-ignore-end */
