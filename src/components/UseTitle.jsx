import { useEffect } from "react";

const UseTitle = (title) => {
  useEffect(() => {
    document.title = `Meal Mingle | ${title}`;
  }, []);
  return <div></div>;
};

export default UseTitle;
