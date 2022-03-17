export type WindowDimensions = {
  width: number;
  height: number;
  isDesktop: boolean;
  isMobile: boolean;
  ifDesktop: <T, V>(
    desktopArg: T,
    mobileArg?: V | undefined
  ) => T | V | undefined;
  ifMobile: <T, V>(
    mobileArg: T,
    desktopArg?: V | undefined
  ) => T | V | undefined;
};
