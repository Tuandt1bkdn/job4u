import { useState } from "react";
import "./index.css";

function Feature2() {
  const [show, setShow] = useState(false);
  const handleAnimation = () => {
    setShow(!show);
  };
  return (
    <div className=" w-[100%] min-h-[1000px] bg-blue-200 text-center">
      {show ? (
        <div
          id="test"
          className="w-[300px] h-[400px] absolute top-[300px] left-[300px] bg-red-400">
          ABCD
        </div>
      ) : (
        <></>
      )}
      <button className="w-[140px] h-[80px]" onClick={() => handleAnimation()}>
        ABCD
      </button>
    </div>
  );
}

export default Feature2;
