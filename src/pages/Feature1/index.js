import { useState, useRef } from "react";

function Feature1() {
  const [SP, setSP] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);
  const [priceInput, setPriceInput] = useState(true);

  const nameRef = useRef();

  const handleSubmit = () => {
    if (isNaN(parseInt(price))) {
      setPriceInput(false);
      console.log(123);
    } else {
      setProducts([
        ...products,
        {
          SP,
          price: +price,
        },
      ]);
      setSP("");
      setPrice("");
      nameRef.current.focus();
    }
  };
  const handleDelete = (index) => {
    var deleteitem = document.getElementById(index);
    deleteitem.remove();

    console.log(index);
  };
  return (
    <div className="w-full h-screen flex flex-row justify-center items-center">
      <div className="w-[500px] h-[700px] ">
        <input
          className="w-[400px] h-[50px] outline-none border border-zinc-200 p-[10px]"
          type="text"
          value={SP}
          ref={nameRef}
          onChange={(e) => setSP(e.target.value)}
          placeholder="Nhap ten SP"></input>
        <div>
          {priceInput ? (
            <input
              className="w-[400px] h-[50px] outline-none border border-zinc-200 p-[10px] mt-[30px]"
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Gia thanh"></input>
          ) : (
            <input
              className="w-[400px] h-[50px] outline-none border border-zinc-200 p-[10px] mt-[30px]"
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Gia thanh"></input>
          )}
        </div>
        <div
          type="button"
          className="mt-[30px] ml-[100px] w-[80px] h-[40px] bg-blue-300 cursor-pointer"
          onClick={handleSubmit}>
          Submit
        </div>
        <p className="mt-[50px] text-[30px] text-blue-300 text-left">
          Total :{" "}
        </p>

        <ul className="w-[500px] min-h-[100px] flex flex-col justify-start items-start">
          {products.map((item, index) => (
            <li
              key={index}
              id={index}
              className="flex flex-row justify-start items-start"
              onClick={() => handleDelete(index)}>
              <p>
                {item.SP} - {item.price}
              </p>
              <div className="ml-[100px] cursor-pointer">Delete {index}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Feature1;
