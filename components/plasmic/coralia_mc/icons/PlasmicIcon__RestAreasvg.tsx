// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RestAreasvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RestAreasvgIcon(props: RestAreasvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      className={classNames("plasmic-default__svg", className, "svg-icon")}
      style={{
        width: "1em",
        height: "1em",
        verticalAlign: 'middle"',

        ...(style || {}),
      }}
      viewBox={"0 0 1024 1024"}
      version={"1.1"}
      fill={"currentColor"}
      overflow={"hidden"}
      height={"1em"}
      width={"1em"}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M400.64 254.72c0 40.96 33.28 72.96 72.96 72.96 40.96 0 72.96-33.28 72.96-72.96s-33.28-72.96-72.96-72.96c-40.96-1.28-72.96 32-72.96 72.96z"
        }
      ></path>

      <path
        d={
          "M680.96 556.8H432.64l-76.8-343.04c-5.12-23.04-29.44-38.4-52.48-33.28s-38.4 29.44-33.28 52.48l83.2 369.92v2.56l34.56 189.44c3.84 23.04 23.04 38.4 46.08 38.4h227.84c24.32 0 44.8-19.2 47.36-43.52l14.08-189.44c1.28-21.76-15.36-42.24-37.12-43.52h-5.12z"
        }
      ></path>

      <path
        d={
          "M696.32 476.16h-108.8L541.44 384c-12.8-25.6-43.52-35.84-69.12-23.04-19.2 10.24-30.72 30.72-28.16 52.48l10.24 94.72c1.28 7.68 6.4 15.36 12.8 20.48l7.68 3.84c2.56 0 3.84 1.28 6.4 1.28h215.04c15.36 0 28.16-12.8 28.16-28.16s-12.8-28.16-28.16-29.44zm115.2 295.68l-79.36-147.2c-1.28-1.28-2.56-3.84-3.84-5.12v120.32l32 60.16c7.68 14.08 24.32 19.2 38.4 12.8 14.08-8.96 20.48-25.6 12.8-40.96z"
        }
      ></path>
    </svg>
  );
}

export default RestAreasvgIcon;
/* prettier-ignore-end */
