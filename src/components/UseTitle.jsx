import { useEffect } from "react";

const UseTitle = (title) => {
  useEffect(() => {
    document.title = `Share A Bite | ${title}`;
  }, []);
  return <div></div>;
};

export default UseTitle;
