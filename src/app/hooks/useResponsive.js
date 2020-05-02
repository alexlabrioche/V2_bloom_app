import { useContext } from "react";
import { ResponsiveContext } from "grommet";

export default function useResponsive() {
  const size = useContext(ResponsiveContext);
  const isMobile = size === "small";
  return { size, isMobile };
}
