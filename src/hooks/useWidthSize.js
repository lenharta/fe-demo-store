import { useLayoutEffect, useState } from "react";

export const useWidthSize = () => {
  const [widthSize, setWidthSize] = useState(window.innerWidth);

  useLayoutEffect(() => {
    const handleResize = () => {
      setWidthSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWidthSize]);
  return widthSize;
};