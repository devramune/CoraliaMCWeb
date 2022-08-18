// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MountainsByTheIconZ3322972SvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function MountainsByTheIconZ3322972SvgIcon(
  props: MountainsByTheIconZ3322972SvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 64 64"}
      x={"0"}
      y={"0"}
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
          "M62.123 42.763L49.471 28.392l-.015-.017a3.8 3.8 0 01-.137-.109h-.009a.477.477 0 00-.133-.041.425.425 0 00-.051-.014.494.494 0 00-.3.075.442.442 0 00-.061.032L44.441 31.8l-9.716-11.22c-.011-.012-.026-.015-.037-.026a.471.471 0 00-.129-.091.493.493 0 00-.064-.024.618.618 0 00-.072-.026.6.6 0 00-.073 0c-.018 0-.033-.009-.051-.008s-.024.011-.037.013a.531.531 0 00-.116.04.5.5 0 00-.084.04.493.493 0 00-.142.149l-.007.007-5.129 8.926h-2.978a.5.5 0 00-.348.14l-4.5 4.339-5.071-2.59c-.009-.005-.018 0-.027-.005a.485.485 0 00-.252-.046c-.007 0-.014 0-.022.006a.466.466 0 00-.156.046.434.434 0 00-.058.046c-.01.007-.023.006-.033.014L1.931 42.709a.5.5 0 00.641.768L15.5 32.7l2.34 4.532-.5 5.069a.5.5 0 00.5.549.5.5 0 00.372-.165l7.89-8.755 2.876 5.443a.539.539 0 00.458.267.5.5 0 00.44-.3l3.21-7.137a.479.479 0 00.038-.129l1.551-10.024 8.984 10.37-5.667 4.491a.5.5 0 00.311.892.491.491 0 00.31-.109l6.076-4.815 2.764-2.224-3.215 5.933-9.208 4.8a.5.5 0 00.232.943.493.493 0 00.231-.057L44.84 37.4a.5.5 0 00.208-.2l4.13-7.624 12.2 13.85a.5.5 0 10.75-.66zM32.144 31.856L29.381 38l-2.732-5.171a.5.5 0 00-.814-.1l-7.35 8.156.366-3.7a.509.509 0 00-.051-.285l-1.98-3.834 4 2.044a.5.5 0 00.575-.085l4.612-4.446h3.066a.5.5 0 00.434-.251l3.934-6.843z"
        }
      ></path>
    </svg>
  );
}

export default MountainsByTheIconZ3322972SvgIcon;
/* prettier-ignore-end */
