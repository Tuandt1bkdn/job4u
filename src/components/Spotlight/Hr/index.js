function HrSpotlight({ logo, name }) {
  return (
    <div className="w-[200px] h-[150px]  flex flex-col justify-between mx-[12px]">
      <div className="w-[200px] h-[100px] bg-white flex justify-center items-center">
        <img alt="" src={logo} className="h-[50px] w-auto" />
      </div>
      <div className="w-[200px] h-[30px] font-medium text-[#444444] break-words">
        {name}
      </div>
    </div>
  );
}

export default HrSpotlight;
