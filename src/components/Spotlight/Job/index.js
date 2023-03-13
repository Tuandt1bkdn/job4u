function SpotlightJob({ companyName, shortDescription, salary }) {
  return (
    <div className="w-[100%] h-1/3 flex flex-col items-start justify-center border-t border-x border-slate-200 ">
      <p className="text-[#b3b3b3] text-[16px] font-semibold ml-[10px]  ">
        {companyName}
      </p>
      <p className="text-[black] text-[16px] font-semibold py-[4px] ml-[10px] cursor-pointer hover:text-[#d34127]">
        {shortDescription}
      </p>
      <p className="text-[#d34127] ml-[10px]">{salary}</p>
    </div>
  );
}

export default SpotlightJob;
