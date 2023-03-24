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
        src="https://maisonoffice.vn/wp-content/uploads/2021/09/toa-nha-copac-square-ton-dan.jpg"
        alt=""
      />
      <p className="mt-[40px] text-slate-700 font-medium text-[22px] py-[7px] cursor-pointer hover:text-[#d34127] ">
        CompanyName
      </p>
      <p className="text-[13px] pb-[5px]">
        Product, Fintech, Software, Information Technology, Tài Chính, Finance,
        Chứng khoán
      </p>
      <p className="text-[16px] border-y border-slate-300">
        TDT Asia is an IT company with the vision to provide IT finance system
        to Global market
      </p>
      <p className="text-[16px]">
        TDT Asia is an IT company with the vision to provide IT finance system
        to Global market
      </p>
    </div>
  );
}

export default Highlight;
