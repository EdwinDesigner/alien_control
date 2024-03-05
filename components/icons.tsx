import * as React from "react";
import { IconSvgProps } from "@/types";

export const Logo: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    fill="none"
    height={size || height}
    viewBox="0 0 32 32"
    width={size || width}
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export const DiscordIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"
        fill="currentColor"
      />
    </svg>
  );
};

export const TwitterIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
        fill="currentColor"
      />
    </svg>
  );
};

export const GithubIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);

export const HeartFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

export const SearchIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const NextUILogo: React.FC<IconSvgProps> = (props) => {
  const { width, height = 40 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 161 32"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className="fill-black dark:fill-white"
        d="M55.6827 5V26.6275H53.7794L41.1235 8.51665H40.9563V26.6275H39V5H40.89L53.5911 23.1323H53.7555V5H55.6827ZM67.4831 26.9663C66.1109 27.0019 64.7581 26.6329 63.5903 25.9044C62.4852 25.185 61.6054 24.1633 61.0537 22.9582C60.4354 21.5961 60.1298 20.1106 60.1598 18.6126C60.132 17.1113 60.4375 15.6228 61.0537 14.2563C61.5954 13.0511 62.4525 12.0179 63.5326 11.268C64.6166 10.5379 65.8958 10.16 67.1986 10.1852C68.0611 10.1837 68.9162 10.3468 69.7187 10.666C70.5398 10.9946 71.2829 11.4948 71.8992 12.1337C72.5764 12.8435 73.0985 13.6889 73.4318 14.6152C73.8311 15.7483 74.0226 16.9455 73.9968 18.1479V19.0773H63.2262V17.4194H72.0935C72.1083 16.4456 71.8952 15.4821 71.4714 14.6072C71.083 13.803 70.4874 13.1191 69.7472 12.6272C68.9887 12.1348 68.1022 11.8812 67.2006 11.8987C66.2411 11.8807 65.3005 12.1689 64.5128 12.7223C63.7332 13.2783 63.1083 14.0275 62.6984 14.8978C62.2582 15.8199 62.0314 16.831 62.0352 17.8546V18.8476C62.009 20.0078 62.2354 21.1595 62.6984 22.2217C63.1005 23.1349 63.7564 23.9108 64.5864 24.4554C65.4554 24.9973 66.4621 25.2717 67.4831 25.2448C68.1676 25.2588 68.848 25.1368 69.4859 24.8859C70.0301 24.6666 70.5242 24.3376 70.9382 23.919C71.3183 23.5345 71.6217 23.0799 71.8322 22.5799L73.5995 23.1604C73.3388 23.8697 72.9304 24.5143 72.4019 25.0506C71.8132 25.6529 71.1086 26.1269 70.3314 26.4434C69.4258 26.8068 68.4575 26.9846 67.4831 26.9663V26.9663ZM78.8233 10.4075L82.9655 17.325L87.1076 10.4075H89.2683L84.1008 18.5175L89.2683 26.6275H87.103L82.9608 19.9317L78.8193 26.6275H76.6647L81.7711 18.5169L76.6647 10.4062L78.8233 10.4075ZM99.5142 10.4075V12.0447H91.8413V10.4075H99.5142ZM94.2427 6.52397H96.1148V22.3931C96.086 22.9446 96.2051 23.4938 96.4597 23.9827C96.6652 24.344 96.9805 24.629 97.3589 24.7955C97.7328 24.9548 98.1349 25.0357 98.5407 25.0332C98.7508 25.0359 98.9607 25.02 99.168 24.9857C99.3422 24.954 99.4956 24.9205 99.6283 24.8853L100.026 26.5853C99.8062 26.6672 99.5805 26.7327 99.3511 26.7815C99.0274 26.847 98.6977 26.8771 98.3676 26.8712C97.6854 26.871 97.0119 26.7156 96.3973 26.4166C95.7683 26.1156 95.2317 25.6485 94.8442 25.0647C94.4214 24.4018 94.2097 23.6242 94.2374 22.8363L94.2427 6.52397ZM118.398 5H120.354V19.3204C120.376 20.7052 120.022 22.0697 119.328 23.2649C118.644 24.4235 117.658 25.3698 116.477 26.0001C115.168 26.6879 113.708 27.0311 112.232 26.9978C110.759 27.029 109.302 26.6835 107.996 25.9934C106.815 25.362 105.827 24.4161 105.141 23.2582C104.447 22.0651 104.092 20.7022 104.115 19.319V5H106.08V19.1831C106.061 20.2559 106.324 21.3147 106.843 22.2511C107.349 23.1459 108.094 23.8795 108.992 24.3683C109.993 24.9011 111.111 25.1664 112.242 25.139C113.373 25.1656 114.493 24.9003 115.495 24.3683C116.395 23.8815 117.14 23.1475 117.644 22.2511C118.16 21.3136 118.421 20.2553 118.402 19.1831L118.398 5ZM128 5V26.6275H126.041V5H128Z"
      />
      <path
        className="fill-black dark:fill-white"
        d="M23.5294 0H8.47059C3.79241 0 0 3.79241 0 8.47059V23.5294C0 28.2076 3.79241 32 8.47059 32H23.5294C28.2076 32 32 28.2076 32 23.5294V8.47059C32 3.79241 28.2076 0 23.5294 0Z"
      />
      <path
        className="fill-white dark:fill-black"
        d="M17.5667 9.21729H18.8111V18.2403C18.8255 19.1128 18.6 19.9726 18.159 20.7256C17.7241 21.4555 17.0968 22.0518 16.3458 22.4491C15.5717 22.8683 14.6722 23.0779 13.6473 23.0779C12.627 23.0779 11.7286 22.8672 10.9521 22.4457C10.2007 22.0478 9.5727 21.4518 9.13602 20.7223C8.6948 19.9705 8.4692 19.1118 8.48396 18.2403V9.21729H9.72854V18.1538C9.71656 18.8298 9.88417 19.4968 10.2143 20.0868C10.5362 20.6506 11.0099 21.1129 11.5814 21.421C12.1689 21.7448 12.8576 21.9067 13.6475 21.9067C14.4374 21.9067 15.1272 21.7448 15.7169 21.421C16.2895 21.1142 16.7635 20.6516 17.0844 20.0868C17.4124 19.4961 17.5788 18.8293 17.5667 18.1538V9.21729ZM23.6753 9.21729V22.845H22.4309V9.21729H23.6753Z"
      />
    </svg>
  );
};

export const PlusIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="M6 12h12" />
      <path d="M12 18V6" />
    </g>
  </svg>
);

export const VerticalDotsIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
      fill="currentColor"
    />
  </svg>
);

export const ChevronDownIcon = ({
  strokeWidth = 1.5,
  ...otherProps
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...otherProps}
  >
    <path
      d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const HomeIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.33537 7.87495C1.79491 9.00229 1.98463 10.3208 2.36407 12.9579L2.64284 14.8952C3.13025 18.2827 3.37396 19.9764 4.54903 20.9882C5.72409 22 7.44737 22 10.8939 22H13.1061C16.5526 22 18.2759 22 19.451 20.9882C20.626 19.9764 20.8697 18.2827 21.3572 14.8952L21.6359 12.9579C22.0154 10.3208 22.2051 9.00229 21.6646 7.87495C21.1242 6.7476 19.9738 6.06234 17.6731 4.69181L16.2882 3.86687C14.199 2.62229 13.1543 2 12 2C10.8457 2 9.80104 2.62229 7.71175 3.86687L6.32691 4.69181C4.02619 6.06234 2.87583 6.7476 2.33537 7.87495ZM12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V15C11.25 14.5858 11.5858 14.25 12 14.25C12.4142 14.25 12.75 14.5858 12.75 15V18C12.75 18.4142 12.4142 18.75 12 18.75Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const UsersIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M15.5 7.5C15.5 9.433 13.933 11 12 11C10.067 11 8.5 9.433 8.5 7.5C8.5 5.567 10.067 4 12 4C13.933 4 15.5 5.567 15.5 7.5Z"
        fill="currentColor"
      />
      <path
        d="M18 16.5C18 18.433 15.3137 20 12 20C8.68629 20 6 18.433 6 16.5C6 14.567 8.68629 13 12 13C15.3137 13 18 14.567 18 16.5Z"
        fill="currentColor"
      />
      <path
        d="M7.12205 5C7.29951 5 7.47276 5.01741 7.64005 5.05056C7.23249 5.77446 7 6.61008 7 7.5C7 8.36825 7.22131 9.18482 7.61059 9.89636C7.45245 9.92583 7.28912 9.94126 7.12205 9.94126C5.70763 9.94126 4.56102 8.83512 4.56102 7.47063C4.56102 6.10614 5.70763 5 7.12205 5Z"
        fill="currentColor"
      />
      <path
        d="M5.44734 18.986C4.87942 18.3071 4.5 17.474 4.5 16.5C4.5 15.5558 4.85657 14.744 5.39578 14.0767C3.4911 14.2245 2 15.2662 2 16.5294C2 17.8044 3.5173 18.8538 5.44734 18.986Z"
        fill="currentColor"
      />
      <path
        d="M16.9999 7.5C16.9999 8.36825 16.7786 9.18482 16.3893 9.89636C16.5475 9.92583 16.7108 9.94126 16.8779 9.94126C18.2923 9.94126 19.4389 8.83512 19.4389 7.47063C19.4389 6.10614 18.2923 5 16.8779 5C16.7004 5 16.5272 5.01741 16.3599 5.05056C16.7674 5.77446 16.9999 6.61008 16.9999 7.5Z"
        fill="currentColor"
      />
      <path
        d="M18.5526 18.986C20.4826 18.8538 21.9999 17.8044 21.9999 16.5294C21.9999 15.2662 20.5088 14.2245 18.6041 14.0767C19.1433 14.744 19.4999 15.5558 19.4999 16.5C19.4999 17.474 19.1205 18.3071 18.5526 18.986Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const TimeIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V11.6893L15.0303 13.9697C15.3232 14.2626 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2626 15.3232 13.9697 15.0303L11.4697 12.5303C11.329 12.3897 11.25 12.1989 11.25 12V8C11.25 7.58579 11.5858 7.25 12 7.25Z"
        fill="inherit"
      />
    </svg>
  );
};

export const AddUserIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <circle cx="12" cy="6" r="4" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5 22C14.8501 22 14.0251 22 13.5126 21.4874C13 20.9749 13 20.1499 13 18.5C13 16.8501 13 16.0251 13.5126 15.5126C14.0251 15 14.8501 15 16.5 15C18.1499 15 18.9749 15 19.4874 15.5126C20 16.0251 20 16.8501 20 18.5C20 20.1499 20 20.9749 19.4874 21.4874C18.9749 22 18.1499 22 16.5 22ZM17.0833 16.9444C17.0833 16.6223 16.8222 16.3611 16.5 16.3611C16.1778 16.3611 15.9167 16.6223 15.9167 16.9444V17.9167H14.9444C14.6223 17.9167 14.3611 18.1778 14.3611 18.5C14.3611 18.8222 14.6223 19.0833 14.9444 19.0833H15.9167V20.0556C15.9167 20.3777 16.1778 20.6389 16.5 20.6389C16.8222 20.6389 17.0833 20.3777 17.0833 20.0556V19.0833H18.0556C18.3777 19.0833 18.6389 18.8222 18.6389 18.5C18.6389 18.1778 18.3777 17.9167 18.0556 17.9167H17.0833V16.9444Z"
        fill="currentColor"
      />
      <path
        d="M15.4147 13.5074C14.4046 13.1842 13.24 13 12 13C8.13401 13 5 14.7909 5 17C5 19.1406 7.94244 20.8884 11.6421 20.9949C11.615 20.8686 11.594 20.7432 11.5775 20.6201C11.4998 20.0424 11.4999 19.3365 11.5 18.586V18.414C11.4999 17.6635 11.4998 16.9576 11.5775 16.3799C11.6639 15.737 11.8705 15.0333 12.4519 14.4519C13.0334 13.8705 13.737 13.6639 14.3799 13.5774C14.6919 13.5355 15.0412 13.5162 15.4147 13.5074Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const AddTimeIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0001 22.0001C16.9707 22.0001 21.0001 17.9707 21.0001 13.0001C21.0001 8.02954 16.9707 4.0001 12.0001 4.0001C7.02954 4.0001 3.0001 8.02954 3.0001 13.0001C3.0001 17.9707 7.02954 22.0001 12.0001 22.0001ZM12.0001 9.2501C12.4143 9.2501 12.7501 9.58589 12.7501 10.0001V12.2501H15.0001C15.4143 12.2501 15.7501 12.5859 15.7501 13.0001C15.7501 13.4143 15.4143 13.7501 15.0001 13.7501H12.7501L12.7501 16.0001C12.7501 16.4143 12.4143 16.7501 12.0001 16.7501C11.5859 16.7501 11.2501 16.4143 11.2501 16.0001V13.7501H9.0001C8.58589 13.7501 8.2501 13.4143 8.2501 13.0001C8.2501 12.5859 8.58589 12.2501 9.0001 12.2501H11.2501L11.2501 10.0001C11.2501 9.58589 11.5859 9.2501 12.0001 9.2501Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.13612 1.6026C8.35566 1.95386 8.24887 2.41657 7.89762 2.6361L3.8976 5.1361C3.54634 5.35563 3.08363 5.24885 2.8641 4.8976C2.64457 4.54634 2.75135 4.08363 3.1026 3.8641L7.10263 1.3641C7.45388 1.14457 7.91659 1.25135 8.13612 1.6026ZM15.8641 1.6026C16.0836 1.25135 16.5463 1.14457 16.8976 1.3641L20.8976 3.8641C21.2489 4.08363 21.3556 4.54635 21.1361 4.8976C20.9166 5.24885 20.4539 5.35563 20.1026 5.1361L16.1026 2.6361C15.7513 2.41657 15.6446 1.95385 15.8641 1.6026Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const StartTimeIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0001 22.0001C16.9707 22.0001 21.0001 17.9707 21.0001 13.0001C21.0001 8.02954 16.9707 4.0001 12.0001 4.0001C7.02954 4.0001 3.0001 8.02954 3.0001 13.0001C3.0001 17.9707 7.02954 22.0001 12.0001 22.0001ZM13.0262 10.275C12.7889 10.1084 12.5202 9.93607 12.242 9.76689C11.1696 9.11476 10.6334 8.78869 10.1525 9.1497C9.6716 9.51071 9.6279 10.2665 9.54048 11.7779C9.51576 12.2054 9.5001 12.6244 9.5001 13.0001C9.5001 13.3758 9.51576 13.7948 9.54048 14.2223C9.62789 15.7337 9.6716 16.4895 10.1525 16.8505C10.6334 17.2115 11.1696 16.8854 12.242 16.2333C12.5202 16.0641 12.7889 15.8918 13.0262 15.7252C13.2967 15.5353 13.591 15.3074 13.8877 15.0653C14.9626 14.1884 15.5001 13.75 15.5001 13.0001C15.5001 12.2502 14.9626 11.8118 13.8877 10.9349C13.591 10.6928 13.2967 10.4649 13.0262 10.275Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.13612 1.6026C8.35566 1.95386 8.24887 2.41657 7.89762 2.6361L3.8976 5.1361C3.54634 5.35563 3.08363 5.24885 2.8641 4.8976C2.64457 4.54634 2.75135 4.08363 3.1026 3.8641L7.10263 1.3641C7.45388 1.14457 7.91659 1.25135 8.13612 1.6026ZM15.8641 1.6026C16.0836 1.25135 16.5463 1.14457 16.8976 1.3641L20.8976 3.8641C21.2489 4.08363 21.3556 4.54635 21.1361 4.8976C20.9166 5.24885 20.4539 5.35563 20.1026 5.1361L16.1026 2.6361C15.7513 2.41657 15.6446 1.95385 15.8641 1.6026Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const StopTimeIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.13612 1.6026C8.35566 1.95386 8.24887 2.41657 7.89762 2.6361L3.8976 5.1361C3.54634 5.35563 3.08363 5.24885 2.8641 4.8976C2.64457 4.54634 2.75135 4.08363 3.1026 3.8641L7.10263 1.3641C7.45388 1.14457 7.91659 1.25135 8.13612 1.6026ZM15.8641 1.6026C16.0836 1.25135 16.5463 1.14457 16.8976 1.3641L20.8976 3.8641C21.2489 4.08363 21.3556 4.54635 21.1361 4.8976C20.9166 5.24885 20.4539 5.35563 20.1026 5.1361L16.1026 2.6361C15.7513 2.41657 15.6446 1.95385 15.8641 1.6026Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.0001 13.0001C21.0001 17.9707 16.9707 22.0001 12.0001 22.0001C7.02954 22.0001 3.0001 17.9707 3.0001 13.0001C3.0001 8.02954 7.02954 4.0001 12.0001 4.0001C16.9707 4.0001 21.0001 8.02954 21.0001 13.0001ZM16.0001 15.5001C16.0001 15.966 16.0001 16.199 15.924 16.3828C15.8225 16.6278 15.6278 16.8225 15.3828 16.924C15.199 17.0001 14.966 17.0001 14.5001 17.0001C14.0342 17.0001 13.8012 17.0001 13.6174 16.924C13.3724 16.8225 13.1777 16.6278 13.0762 16.3828C13.0001 16.199 13.0001 15.966 13.0001 15.5001V10.5001C13.0001 10.0342 13.0001 9.80119 13.0762 9.61742C13.1777 9.37239 13.3724 9.17771 13.6174 9.07622C13.8012 9.0001 14.0342 9.0001 14.5001 9.0001C14.966 9.0001 15.199 9.0001 15.3828 9.07622C15.6278 9.17771 15.8225 9.37239 15.924 9.61742C16.0001 9.80119 16.0001 10.0342 16.0001 10.5001V15.5001ZM11.0001 15.5001V10.5001C11.0001 10.0342 11.0001 9.80119 10.924 9.61742C10.8225 9.37239 10.6278 9.17771 10.3828 9.07622C10.199 9.0001 9.96604 9.0001 9.5001 9.0001C9.03416 9.0001 8.80119 9.0001 8.61742 9.07622C8.37239 9.17771 8.17771 9.37239 8.07622 9.61742C8.0001 9.80119 8.0001 10.0342 8.0001 10.5001V15.5001C8.0001 15.966 8.0001 16.199 8.07622 16.3828C8.17771 16.6278 8.37239 16.8225 8.61742 16.924C8.80119 17.0001 9.03416 17.0001 9.5001 17.0001C9.96604 17.0001 10.199 17.0001 10.3828 16.924C10.6278 16.8225 10.8225 16.6278 10.924 16.3828C11.0001 16.199 11.0001 15.966 11.0001 15.5001Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const ExitTimeIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0001 22.0001C16.9707 22.0001 21.0001 17.9707 21.0001 13.0001C21.0001 8.02954 16.9707 4.0001 12.0001 4.0001C7.02954 4.0001 3.0001 8.02954 3.0001 13.0001C3.0001 17.9707 7.02954 22.0001 12.0001 22.0001ZM14.6518 10.3484C14.9446 10.6413 14.9446 11.1162 14.6518 11.4091L13.0607 13.0001L14.6517 14.5911C14.9446 14.884 14.9446 15.3589 14.6517 15.6518C14.3588 15.9447 13.884 15.9447 13.5911 15.6518L12.0001 14.0608L10.4091 15.6518C10.1162 15.9446 9.64134 15.9446 9.34845 15.6518C9.05556 15.3589 9.05556 14.884 9.34845 14.5911L10.9394 13.0001L9.34843 11.4091C9.05554 11.1162 9.05554 10.6414 9.34843 10.3485C9.64133 10.0556 10.1162 10.0556 10.4091 10.3485L12.0001 11.9395L13.5911 10.3484C13.884 10.0556 14.3589 10.0556 14.6518 10.3484Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.13612 1.6026C8.35566 1.95386 8.24887 2.41657 7.89762 2.6361L3.8976 5.1361C3.54634 5.35563 3.08363 5.24885 2.8641 4.8976C2.64457 4.54634 2.75135 4.08363 3.1026 3.8641L7.10263 1.3641C7.45388 1.14457 7.91659 1.25135 8.13612 1.6026ZM15.8641 1.6026C16.0836 1.25135 16.5463 1.14457 16.8976 1.3641L20.8976 3.8641C21.2489 4.08363 21.3556 4.54635 21.1361 4.8976C20.9166 5.24885 20.4539 5.35563 20.1026 5.1361L16.1026 2.6361C15.7513 2.41657 15.6446 1.95385 15.8641 1.6026Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const SheduleIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M7.75 2.5C7.75 2.08579 7.41421 1.75 7 1.75C6.58579 1.75 6.25 2.08579 6.25 2.5V4.07926C4.81067 4.19451 3.86577 4.47737 3.17157 5.17157C2.47737 5.86577 2.19451 6.81067 2.07926 8.25H21.9207C21.8055 6.81067 21.5226 5.86577 20.8284 5.17157C20.1342 4.47737 19.1893 4.19451 17.75 4.07926V2.5C17.75 2.08579 17.4142 1.75 17 1.75C16.5858 1.75 16.25 2.08579 16.25 2.5V4.0129C15.5847 4 14.839 4 14 4H10C9.16097 4 8.41527 4 7.75 4.0129V2.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 12C2 11.161 2 10.4153 2.0129 9.75H21.9871C22 10.4153 22 11.161 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12ZM17 14C17.5523 14 18 13.5523 18 13C18 12.4477 17.5523 12 17 12C16.4477 12 16 12.4477 16 13C16 13.5523 16.4477 14 17 14ZM17 18C17.5523 18 18 17.5523 18 17C18 16.4477 17.5523 16 17 16C16.4477 16 16 16.4477 16 17C16 17.5523 16.4477 18 17 18ZM13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13C11 12.4477 11.4477 12 12 12C12.5523 12 13 12.4477 13 13ZM13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17ZM7 14C7.55228 14 8 13.5523 8 13C8 12.4477 7.55228 12 7 12C6.44772 12 6 12.4477 6 13C6 13.5523 6.44772 14 7 14ZM7 18C7.55228 18 8 17.5523 8 17C8 16.4477 7.55228 16 7 16C6.44772 16 6 16.4477 6 17C6 17.5523 6.44772 18 7 18Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const NewDayIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M7.75 2.5C7.75 2.08579 7.41421 1.75 7 1.75C6.58579 1.75 6.25 2.08579 6.25 2.5V4.07926C4.81067 4.19451 3.86577 4.47737 3.17157 5.17157C2.47737 5.86577 2.19451 6.81067 2.07926 8.25H21.9207C21.8055 6.81067 21.5226 5.86577 20.8284 5.17157C20.1342 4.47737 19.1893 4.19451 17.75 4.07926V2.5C17.75 2.08579 17.4142 1.75 17 1.75C16.5858 1.75 16.25 2.08579 16.25 2.5V4.0129C15.5847 4 14.839 4 14 4H10C9.16097 4 8.41527 4 7.75 4.0129V2.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12C2 11.161 2 10.4153 2.0129 9.75H21.9871C22 10.4153 22 11.161 22 12ZM16 13.25C16.4142 13.25 16.75 13.5858 16.75 14V15.25L18 15.25C18.4142 15.25 18.75 15.5858 18.75 16C18.75 16.4142 18.4142 16.75 18 16.75H16.75V18C16.75 18.4142 16.4142 18.75 16 18.75C15.5858 18.75 15.25 18.4142 15.25 18V16.75L14 16.75C13.5858 16.75 13.25 16.4142 13.25 16C13.25 15.5858 13.5858 15.25 14 15.25H15.25V14C15.25 13.5858 15.5858 13.25 16 13.25Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const DeleteIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M3 6.52381C3 6.12932 3.32671 5.80952 3.72973 5.80952H8.51787C8.52437 4.9683 8.61554 3.81504 9.45037 3.01668C10.1074 2.38839 11.0081 2 12 2C12.9919 2 13.8926 2.38839 14.5496 3.01668C15.3844 3.81504 15.4756 4.9683 15.4821 5.80952H20.2703C20.6733 5.80952 21 6.12932 21 6.52381C21 6.9183 20.6733 7.2381 20.2703 7.2381H3.72973C3.32671 7.2381 3 6.9183 3 6.52381Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5956 22H12.4044C15.1871 22 16.5785 22 17.4831 21.1141C18.3878 20.2281 18.4803 18.7749 18.6654 15.8685L18.9321 11.6806C19.0326 10.1036 19.0828 9.31511 18.6289 8.81545C18.1751 8.31579 17.4087 8.31579 15.876 8.31579H8.12404C6.59127 8.31579 5.82488 8.31579 5.37105 8.81545C4.91722 9.31511 4.96744 10.1036 5.06788 11.6806L5.33459 15.8685C5.5197 18.7749 5.61225 20.2281 6.51689 21.1141C7.42153 22 8.81289 22 11.5956 22ZM10.2463 12.1885C10.2051 11.7546 9.83753 11.4381 9.42537 11.4815C9.01321 11.5249 8.71251 11.9117 8.75372 12.3456L9.25372 17.6087C9.29494 18.0426 9.66247 18.3591 10.0746 18.3157C10.4868 18.2724 10.7875 17.8855 10.7463 17.4516L10.2463 12.1885ZM14.5746 11.4815C14.9868 11.5249 15.2875 11.9117 15.2463 12.3456L14.7463 17.6087C14.7051 18.0426 14.3375 18.3591 13.9254 18.3157C13.5132 18.2724 13.2125 17.8855 13.2537 17.4516L13.7537 12.1885C13.7949 11.7546 14.1625 11.4381 14.5746 11.4815Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const EditIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M3.84453 3.84453C2.71849 4.97056 2.71849 6.79623 3.84453 7.92226L5.43227 9.51C5.44419 9.49622 5.45669 9.48276 5.46978 9.46967L9.46978 5.46967C9.48284 5.45662 9.49625 5.44415 9.50999 5.43226L7.92226 3.84453C6.79623 2.71849 4.97056 2.71849 3.84453 3.84453Z"
        fill="currentColor"
      />
      <path
        d="M10.5679 6.49012C10.556 6.50386 10.5435 6.51728 10.5304 6.53033L6.53044 10.5303C6.51735 10.5434 6.5039 10.5559 6.49011 10.5678L16.0777 20.1555C17.2038 21.2815 19.0294 21.2815 20.1555 20.1555C21.2815 19.0294 21.2815 17.2038 20.1555 16.0777L10.5679 6.49012Z"
        fill="currentColor"
      />
      <path
        d="M16.1 2.30719C16.261 1.8976 16.8385 1.8976 16.9994 2.30719L17.4298 3.40247C17.479 3.52752 17.5776 3.62651 17.7022 3.67583L18.7934 4.1078C19.2015 4.26934 19.2015 4.849 18.7934 5.01054L17.7022 5.44252C17.5776 5.49184 17.479 5.59082 17.4298 5.71587L16.9995 6.81115C16.8385 7.22074 16.261 7.22074 16.1 6.81116L15.6697 5.71587C15.6205 5.59082 15.5219 5.49184 15.3973 5.44252L14.3061 5.01054C13.898 4.849 13.898 4.26934 14.3061 4.1078L15.3973 3.67583C15.5219 3.62651 15.6205 3.52752 15.6697 3.40247L16.1 2.30719Z"
        fill="currentColor"
      />
      <path
        d="M19.9672 9.12945C20.1281 8.71987 20.7057 8.71987 20.8666 9.12945L21.0235 9.5288C21.0727 9.65385 21.1713 9.75284 21.2959 9.80215L21.6937 9.95965C22.1018 10.1212 22.1018 10.7009 21.6937 10.8624L21.2959 11.0199C21.1713 11.0692 21.0727 11.1682 21.0235 11.2932L20.8666 11.6926C20.7057 12.1022 20.1281 12.1022 19.9672 11.6926L19.8103 11.2932C19.7611 11.1682 19.6625 11.0692 19.5379 11.0199L19.14 10.8624C18.732 10.7009 18.732 10.1212 19.14 9.95965L19.5379 9.80215C19.6625 9.75284 19.7611 9.65385 19.8103 9.5288L19.9672 9.12945Z"
        fill="currentColor"
      />
      <path
        d="M5.1332 15.3072C5.29414 14.8976 5.87167 14.8976 6.03261 15.3072L6.18953 15.7065C6.23867 15.8316 6.33729 15.9306 6.46188 15.9799L6.85975 16.1374C7.26783 16.2989 7.26783 16.8786 6.85975 17.0401L6.46188 17.1976C6.33729 17.2469 6.23867 17.3459 6.18953 17.471L6.03261 17.8703C5.87167 18.2799 5.29414 18.2799 5.1332 17.8703L4.97628 17.471C4.92714 17.3459 4.82852 17.2469 4.70393 17.1976L4.30606 17.0401C3.89798 16.8786 3.89798 16.2989 4.30606 16.1374L4.70393 15.9799C4.82852 15.9306 4.92714 15.8316 4.97628 15.7065L5.1332 15.3072Z"
        fill="currentColor"
      />
    </svg>
  );
};
