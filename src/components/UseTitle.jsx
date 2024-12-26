import { useEffect } from "react";

const UseTitle = (title) => {
  useEffect(() => {
    document.title = `Share Plates | ${title}`;
  }, []);
  return <div></div>;
};

export default UseTitle;
