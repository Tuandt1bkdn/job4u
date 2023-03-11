function FooterComponent({ list, listName }) {
  return (
    <div className="w-[12%] min-h-[200px] mt-[25px] flex flex-col justify-start items-start text-left ml-[10px] text-[#393e46]">
      <p className="text-[15px] font-medium">{listName}</p>
      {list.map((item) => (
        <p className="my-[1px] cursor-pointer hover:text-[#fd7e14]">{item}</p>
      ))}
    </div>
  );
}

export default FooterComponent;
