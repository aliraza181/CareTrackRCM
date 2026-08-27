"use client";

import * as React from "react";
import MuiStack from "@mui/material/Stack";
import type { StackProps as MuiStackProps } from "@mui/material/Stack";
import type { SxProps, Theme } from "@mui/material/styles";

/**
 * MUI v9 removed the flexbox shorthand props (`alignItems`, `justifyContent`,
 * `flexWrap`) from <Stack>. This drop-in wrapper restores them by forwarding
 * to `sx`, so existing call sites keep working with clean, familiar syntax.
 */
type Responsive<T> = T | Partial<Record<"xs" | "sm" | "md" | "lg" | "xl", T>>;

type Extra = {
  alignItems?: Responsive<React.CSSProperties["alignItems"]>;
  justifyContent?: Responsive<React.CSSProperties["justifyContent"]>;
  flexWrap?: Responsive<React.CSSProperties["flexWrap"]>;
};

export type StackProps = MuiStackProps & Extra;

export default function Stack({
  alignItems,
  justifyContent,
  flexWrap,
  sx,
  ...rest
}: StackProps) {
  const shorthandSx = { alignItems, justifyContent, flexWrap } as SxProps<Theme>;
  return (
    <MuiStack
      sx={[shorthandSx, ...(Array.isArray(sx) ? sx : [sx])]}
      {...rest}
    />
  );
}
