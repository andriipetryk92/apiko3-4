import React, { useEffect } from "react";

export const getProps = MyComponent => props => {
  useEffect(() => console.log("myProps:", props));
  return <MyComponent {...props} />;
};
