import "./index.css";

function Highlight() {
  return (
    <div className="w-[100%] relative min-h-[300px] bg-white flex flex-col justify-start border border-slate-300">
      <p className="text-[#d34127] font-normal text-[20px] py-[5px]">
        Highlight
      </p>
      <img
        className="w-[100%] h-auto  cursor-pointer"
        src="https://maisonoffice.vn/wp-content/uploads/2021/09/toa-nha-copac-square-ton-dan.jpg"
        alt=""
      />
      <img
        className="w-[30%] h-auto absolute left-[50%] ml-[-48px] top-[210px]  cursor-pointer"
        src="https://image.pitchbook.com/kZawLiZQwIo3Pdhf5TKKNUyK0l61605404039160_200x200"
        alt=""
      />
      <p className="mt-[40px] text-slate-700 font-medium text-[22px] py-[7px] cursor-pointer hover:text-[#d34127] ">
        ABC Group
      </p>
      <p className="text-[13px] pb-[15px]">
        Tài chính, Chứng khoán, Văn phòng tư vấn
      </p>
      <ul className=" list-[circle] list-inside">
        <li className="list-disc flex flex-row justify-start text-[16px]  py-[4px] border-y border-slate-300">
          <span className="text-[#d34127] px-[10px]">&#9830;</span>Business
          Analyst
        </li>
        <li className="flex flex-row justify-start  py-[4px] text-[16px]">
          <span className="text-[#d34127] px-[10px]">&#9830;</span>Office
        </li>
      </ul>
    </div>
  );
}

export default Highlight;
