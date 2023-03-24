import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

function SearchBox() {
  //const navigate = useNavigate();

  const majors = [
    { name: "Văn phòng", link: "/vieclam-vanphong" },
    { name: "Marketing", link: "/vieclam-marketing" },
    { name: "CSKH", link: "/vieclam-cskh" },
    { name: "Nhà hàng", link: "/vieclam-nhahang" },
    { name: "Phục vụ", link: "/vieclam-phucvu" },
  ];
  //console.log(window.location.pathname);
  // const handleNavigation = (link) => {
  //   navigate(link);
  // };
  return (
    <div className="w-[65%] h-[140px]  mt-[20px] border border-solid border-[#d34126] flex flex-col justify-center">
      <div className="w-[100%] h-[50%] flex flex-row items-center justify-between border-[#d34126] border-solid border-b">
        <div className="ml-[5px] w-[69%] h-[75%] border border-solid border-stone-300 flex flex-row justify-start items-center">
          <FontAwesomeIcon
            icon={faSearch}
            className="mx-[10px] text-stone-500"
          />
          <input
            type="text"
            placeholder="Nhập từ khoá tìm kiếm"
            className="w-[200px] h-[20px] p-[5px] outline-none "
          />
        </div>
        <form className="w-[19%] h-[75%]  border border-solid border-stone-300 flex flew-row justify-center items-center">
          <select className="w-[85%] h-[100%] outline-none text-stone-500">
            <option>Tất cả địa điểm</option>
            <option>Hà Nội</option>
            <option>TP Hồ Chí Minh</option>
            <option>TP Đà Nẵng</option>
          </select>
        </form>
        <div className="w-[9%] h-[100%] bg-[#d34126] text-white flex flew-row justify-center items-center text-[17px]">
          Tìm kiếm
        </div>
      </div>
      <div className="w-[100%] h-[50%] flex flex-row justify-start items-center">
        {majors.map((item, index) => (
          <NavLink
            //onClick={() => handleNavigation(item.link)}
            to={item.link}
            key={index}
            className="border border-solid border-stone-500 p-[5px] mx-[5px] text-[13px] text-black cursor-pointer">
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default SearchBox;
