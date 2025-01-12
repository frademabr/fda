import type { LinkProps } from "@mui/material/Link";

import { forwardRef } from "react";
import { mergeClasses } from "minimal-shared/utils";

import Link from "@mui/material/Link";
import { styled, useTheme } from "@mui/material/styles";

import { RouterLink } from "src/routes/components";

import { logoClasses } from "./classes";

import { CONFIG } from "@/global-config";

// ----------------------------------------------------------------------

export type LogoProps = LinkProps & {
  isSingle?: boolean;
  disabled?: boolean;
};

export const Logo = forwardRef<HTMLAnchorElement, LogoProps>((props, ref) => {
  const { className, href = "/", isSingle = false, disabled, sx, ...other } = props;

  const theme = useTheme();

  const singleLogo = (
    <img src={`${CONFIG.assetsDir}/assets/images/home/logo-fradema-single.png`} />
  );

  const fullLogo = (
    <img src={`${CONFIG.assetsDir}/assets/images/home/logo-fradema-branco.png`} />
  );

  return (
    <LogoRoot
      ref={ref}
      component={RouterLink}
      href={href}
      aria-label="Logo"
      underline="none"
      className={mergeClasses([logoClasses.root, className])}
      sx={[
        () => ({
          width: 64,
          height: 64,
          ...(!isSingle && { width: 420, height: 180, marginLeft: -15 }),
          ...(disabled && { pointerEvents: "none" }),
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {isSingle ? singleLogo : fullLogo}
    </LogoRoot>
  );
});

// ----------------------------------------------------------------------

const LogoRoot = styled(Link)(() => ({
  flexShrink: 0,
  color: "inherit",
  display: "inline-flex",
  verticalAlign: "middle",
}));
