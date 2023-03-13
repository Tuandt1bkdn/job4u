import "./index.css";

function Feature2() {
  const handleAnimation = () => {
    document.getElementById("test").style.display = "block";
    document.getElementById("test").style.transition = "linear 2s";
  };
  return (
    <div className=" w-[100%] min-h-[1000px] bg-blue-200 text-center">
      <div
        id="test"
        className="w-[300px] h-[400px] absolute top-[300px] left-[300px] hidden bg-red-400">
        ABCD
      </div>
      <button className="w-[140px] h-[80px]" onClick={handleAnimation}>
        ABCD
      </button>
    </div>
  );
}

export default Feature2;
