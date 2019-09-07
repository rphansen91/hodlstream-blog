import React, { useEffect } from "react";

export default () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        window.addthis.layers.refresh();
      } catch (e) {}
    }
  }, []);
  return <div />;
};
