import { useState } from "react";

const useColor = () => {
  const [isGrey, setIsGrey] = useState(false);

  function toggleBlackAndWhite() {
    setIsGrey(!isGrey);
  }

  return {
    isGrey,
    toggleBlackAndWhite
  };
};

export default useColor;