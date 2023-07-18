import { useEffect } from "react";

const useOnClickOutside = (ref, handler) => {
  // this hook runs the handler code when there is a click event outside of the given ref
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);

    // cleanup function for useEffect to remove listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

const Functions = {
  useOnClickOutside
};

export default Functions;
