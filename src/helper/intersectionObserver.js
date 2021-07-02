import React, { useEffect, useState } from "react";

const useOnScreen = (ref) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = new IntersectionObserver((entries) =>
    entries.forEach((entry) => {
      setIsIntersecting(entry.isIntersecting);
    })
  );

  useEffect(() => {
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [1]);

  return isIntersecting;
};

export default useOnScreen;
