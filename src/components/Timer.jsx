import { useEffect, useState } from "react";

export const Timer = ({ start, end }) => {
  const [timer, setTimer] = useState(+start);

  useEffect(() => {
    const id = setInterval(() => {
      setTimer((p) => {
        if (p < +end) {
          return (p = p + 1);
        }
        clearInterval(id);
        return p;
      });
    }, 1000);
    return () => {
      console.log("unmounting");
      clearInterval(id);
    };
  }, []);
  return (
    <>
      <h1>Timer : {timer}</h1>
    </>
  );
};
