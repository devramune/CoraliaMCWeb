// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WindowssvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WindowssvgIcon(props: WindowssvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 305 305"}
      xmlSpace={"preserve"}
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
        d={
          "M139.999 25.775v116.724a2.5 2.5 0 002.5 2.5H302.46a2.5 2.5 0 002.5-2.5V2.5A2.5 2.5 0 00302.1.026L142.139 23.301a2.5 2.5 0 00-2.14 2.474zm-17.498 254.173a2.498 2.498 0 002.5-2.5V162.5a2.5 2.5 0 00-2.5-2.5H2.592a2.5 2.5 0 00-2.5 2.5l.006 98.515a2.5 2.5 0 002.16 2.477l119.903 16.434c.113.014.227.022.34.022zM2.609 144.999h119.892a2.5 2.5 0 002.5-2.5V28.681a2.502 2.502 0 00-2.836-2.477L2.164 42.5A2.5 2.5 0 000 44.98l.109 97.521a2.501 2.501 0 002.5 2.498zM302.46 305a2.5 2.5 0 002.5-2.5l.04-140a2.5 2.5 0 00-2.5-2.5H142.499a2.5 2.5 0 00-2.5 2.5v117.496c0 1.246.918 2.302 2.151 2.476l159.961 22.504c.117.016.233.024.349.024z"
        }
      ></path>
    </svg>
  );
}

export default WindowssvgIcon;
/* prettier-ignore-end */
