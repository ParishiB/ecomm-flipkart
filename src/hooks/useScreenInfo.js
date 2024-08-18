import { useState, useEffect } from "react";
import { getCurrentScreenSize } from "../Util/screen";

const useScreenInfo = () => {
  const [screenInfo, setScreenInfo] = useState({
    isMobileView: false,
    isLargeMobile: false,
    isIpad: false,
    isLargeView: false,
  });

  useEffect(() => {
    const handleResize = () => setScreenInfo(getCurrentScreenSize());
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenInfo;
};

export default useScreenInfo;
