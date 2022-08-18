// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PngsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PngsvgIcon(props: PngsvgIconProps) {
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
      viewBox={"0 0 420 420"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"#000003"}
        d={
          "M282.5 71.5v3h14v3h11v3h6v3h3l22 2v3h9v3h11v3h11v3h6v6h-3v11h-3v11h-3v12h-3l-2 22h-3v11h-3v11h-3v9c-4 .667-4 1.333 0 2v3h-3a810.664 810.664 0 01-2 23h-3v11h-3v11h-3v11h-3a810.664 810.664 0 01-2 23h-3v11h-3v14h-3v11h-3c-1.076 11.629-2.743 22.963-5 34h-3v11h-3v8a153.836 153.836 0 01-20-2v-3h-11v-3h-12v-3h-8v-3l-22-2v-3h-9v-3h-11v-3h-11v-3a282.75 282.75 0 00-20-2v-3h-11v-3h-11v-3h-9v-3c-10.344-.808-20.344-2.475-30-5v-3h-12v-3h-11v-3h-5c-.321-1.548-1.321-2.215-3-2h-11v-3a60.93 60.93 0 01-11-.5c-1.455-2.016-3.455-2.849-6-2.5v-3h-9c-.166-4.679 0-9.345.5-14a3.647 3.647 0 011.5-1 31.12 31.12 0 001-11h3v-11h3v-11h3a811.033 811.033 0 002-23h3v-11h3v-8h3v-3h-3c-.085-1.495.582-2.495 2-3a31.12 31.12 0 001-11h3l2-22h3v-12h3v-11h3v-11h3l2-22h3v-9h3v-3a84.9 84.9 0 01.5-13c.414-.457.914-.79 1.5-1a31.117 31.117 0 001-11h3l2-22h3v-11h3v-12h12v3h11v3h9v3h11v3a282.032 282.032 0 0131 5v3h11v3h11v3a153.853 153.853 0 0020 2v3h11v3h8v3h11v3a64.054 64.054 0 0117 2zm-40 108v7h-3a810.664 810.664 0 00-2 23h-3v14a53.669 53.669 0 01-7 2 38.133 38.133 0 00-12-2v-3h-11v-3h-11v-3h-6v-5h3a31.116 31.116 0 011-11c1.419-.505 2.085-1.505 2-3v-2c.058-3.164.724-6.164 2-9v-11h3v-6h8v3h11v3c3.498-.545 6.498.288 9 2.5 3.652.499 7.318.665 11 .5v3h5z"
        }
        opacity={".961"}
      ></path>

      <path fill={"#000007"} d={"M282.5 71.5h3-3z"} opacity={".08"}></path>

      <path fill={"#000007"} d={"M313.5 80.5h3-3z"} opacity={".1"}></path>

      <path
        fill={"#000007"}
        d={"M105.5 99.5v3h-3v-3h3z"}
        opacity={".079"}
      ></path>

      <path
        fill={"#000008"}
        d={"M242.5 179.5c4 .667 4 1.333 0 2v-2z"}
        opacity={".092"}
      ></path>

      <path
        fill={"#000008"}
        d={"M195.5 181.5v3c-2.667-1-2.667-2 0-3z"}
        opacity={".114"}
      ></path>

      <path
        fill={"#000007"}
        d={"M352.5 190.5v2c-4-.667-4-1.333 0-2z"}
        opacity={".128"}
      ></path>

      <path
        fill={"#000007"}
        d={"M193.5 193.5v2c-4-.667-4-1.333 0-2z"}
        opacity={".103"}
      ></path>

      <path
        fill={"#000007"}
        d={"M77.5 203.5h3v3h-3v-3z"}
        opacity={".107"}
      ></path>

      <path
        fill={"#000007"}
        d={"M190.5 214.5h3v3h-3v-3z"}
        opacity={".081"}
      ></path>

      <path
        fill={"#000007"}
        d={"M63.5 296.5h3v3h-3v-3z"}
        opacity={".101"}
      ></path>

      <path
        fill={"#000008"}
        d={"M94.5 305.5c1.679-.215 2.679.452 3 2-1.679.215-2.679-.452-3-2z"}
        opacity={".114"}
      ></path>
    </svg>
  );
}

export default PngsvgIcon;
/* prettier-ignore-end */
