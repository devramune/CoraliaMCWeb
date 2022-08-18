// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _7A94C12518B17784A31F20Eb6Ceeff64SvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function _7A94C12518B17784A31F20Eb6Ceeff64SvgIcon(
  props: _7A94C12518B17784A31F20Eb6Ceeff64SvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 1000 1000"}
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
          "M989.2 494.8c-7.8-48.2-24.7-96.8-49.9-138.7-9.8 34.5-36.5 61.9-70.6 72.6 5 10.8 9.4 21.8 13.2 33.1-16.8.4-33.7.3-50.5-.3-26.6-36.8-82.4-56.8-127.8-21.5-11.3-24.4-19.8-49.5-24.4-75.7 20.2 1.2 40.4 2.8 60.4 5.5-5.8-13.1-9.1-27.6-9.1-42.8 0-19.4 5.3-37.6 14.4-53.3-39.1-4.6-78.6-6-117.8-9.2-26.9-2.2-47.5 23.6-48.2 48.2-2.3 68 17.4 131.4 48.2 190.7-30.9 24.8-59.6 47.1-91.2 72.8-40.2-40.2-86.8-74.9-133.3-106.3-24.2-16.4-52.5-6.7-73.1 9.5-63.1 49.5-126.1 99-189.2 148.5-9.6 7.5-15.5 15.9-18.5 24.5H68.4c-77.8 0-77.8 120.6 0 120.6h458.3c36.5 0 58.5-18.4 70.7-28.8 84.1-72.8 138-109.4 222.1-182.2 2-1.7 3.7-3.4 5.4-5.1 39.3 1.8 78.9.8 117.9-1 33.6-1.6 51.4-29.5 46.4-61.1zM302.8 652.3c23.7-18.6 47.5-37.2 71.2-55.8 23.9 17 47.7 35.4 69 55.8H302.8z"
        }
      ></path>

      <path
        d={
          "M839.5 414.7c51.8 0 93.8-42.1 93.8-93.9 0-51.7-42.1-93.8-93.8-93.8-51.7 0-93.8 42.1-93.8 93.8 0 51.8 42.1 93.9 93.8 93.9z"
        }
      ></path>
    </svg>
  );
}

export default _7A94C12518B17784A31F20Eb6Ceeff64SvgIcon;
/* prettier-ignore-end */
