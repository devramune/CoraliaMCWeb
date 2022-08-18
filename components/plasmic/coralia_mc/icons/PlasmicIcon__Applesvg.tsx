// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ApplesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ApplesvgIcon(props: ApplesvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 800 950"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 0v484h1c0-130.55 113.753-266.309 251-256.911 34.625 2.372 67.718 15.158 100 26.964 16.882 6.175 39.68 17.031 58 14.658 43.739-5.668 84.819-29.816 128-39.287 64.097-14.058 138.822 3.263 191 42.706 16.87 12.752 36.417 29.627 46 48.87-15.443 7.305-29.361 19.549-42 30.834-87.069 77.747-82.068 217.098-2 297.166 18.489 18.489 43.216 38.948 69 46V0H600c0 19.74.892 38.431-3.424 58-13.13 59.533-54.692 113.467-106.576 144.796-19.61 11.842-43.79 21.621-67 22.189-4.959.122-17.552 2.197-21.258-1.588C397.9 219.472 400 208.089 400 203c0-20.849 4.588-41.605 12.203-61C433.684 87.287 474.052 44.489 527 19.223 545.312 10.485 567.429 1.425 588 1c-13.121-5.506-36.7-1-51-1H0z"
        }
        fill={"#010101"}
      ></path>

      <path
        d={
          "M600 0c-82.771 0-158.205 66.415-187.399 140C404.627 160.099 400 181.374 400 203c0 5.037-2.088 16.271 1.179 20.397 3.038 3.836 16.318 1.624 20.821 1.602 23.907-.115 48.811-10.012 69-22.203 51.554-31.13 92.535-84.669 105.576-143.796 4.39-19.905 3.426-38.927 3.424-59m175 321c-6.792-20.476-32.205-39.65-49-51.848-60.362-43.839-142.297-54.386-213-33.728-23.689 6.922-46.6 16.109-70 23.909-11.441 3.814-24.786 9.588-37 9.588-9.344 0-19.138-3.904-28-6.497-24.028-7.028-47.09-16.968-71-24.398-49.041-15.24-99.184-13.73-147 5.578-22.347 9.024-43.164 21.375-62 36.4C-20.856 374.809-14.529 546.944 27.505 678c7.104 22.151 15.893 43.766 25.356 65 13.22 29.665 29.59 58.561 48.43 85 27.49 38.578 56.822 80.12 97.709 105.575 54.137 33.703 105.992 5.234 160-11.55 25.647-7.97 53.261-12.033 80-8.739 61.554 7.584 117.438 52.09 181 29.019 11.076-4.021 21.43-9.894 31-16.732 14.969-10.698 27.791-23.851 39.95-37.573 15.49-17.481 29.573-36.7 42.706-56 21.199-31.153 39.732-63.971 53.744-99 3.536-8.841 14.123-26.18 12.189-35.786-.672-3.334-4.936-4.301-7.589-5.523-7.584-3.492-14.916-7.706-22-12.116-23.742-14.781-45.543-35.065-62.116-57.575-46.876-63.67-52.454-157.003-11.434-225 19.549-32.405 47.621-55.135 78.55-76z"
        }
        fill={"#fff"}
      ></path>

      <path
        d={
          "M0 543v407h241v-1c-45.525-3.623-82.888-48.111-109.2-81-52.61-65.76-90.815-139.838-113.376-221-6.294-22.643-11.051-45.729-14.294-69-1.46-10.487-.118-25.44-4.13-35m799 157c-4.547 19.654-14.317 38.76-22.691 57C752.34 809.208 717.687 861.31 677 902c-23.575 23.577-52.543 44.549-87 46.911-61.908 4.243-114.628-39.603-177-36.872-27.212 1.192-53.69 8.757-79 18.385-20.334 7.736-42.889 18.12-65 18.576v1h531V723l-1-23z"
        }
        fill={"#010101"}
      ></path>
    </svg>
  );
}

export default ApplesvgIcon;
/* prettier-ignore-end */
