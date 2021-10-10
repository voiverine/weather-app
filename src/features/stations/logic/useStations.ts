import { useState } from "react";

const useStations = () => {
  const [isFormShown, setIsFormShown] = useState(false);

  return { isFormShown, setIsFormShown };
};

export { useStations };
