import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleHoverMenu = () => {
    var tag2 = document.getElementById("hamburger2");
    var tag3 = document.getElementById("hamburger3");
    tag2.style.width = "20px";
    tag3.style.width = "17px";
  };

  const handleLeaveMenu = () => {
    var tag2 = document.getElementById("hamburger2");
    var tag3 = document.getElementById("hamburger3");
    tag2.style.width = "23px";
    tag3.style.width = "23px";
  };

  return (
    <div className="w-full h-20 bg-[#212529] sticky top-0 flex flex-row justify-center items-center z-10">
      <div className="w-[70%] h-[80%]  flex flex-row justify-between items-center ">
        <div className="w-[60%] h-full flex flex-row items-center justify-between">
          <span
            className=" w-[70px] h-[70%]  ml-2 flex flex-col items-start justify-center"
            onMouseEnter={handleHoverMenu}
            onMouseLeave={handleLeaveMenu}>
            <div className="w-[23px] h-[2px] bg-white my-[2px]"></div>
            <div
              id="hamburger2"
              className="w-[23px] h-[2px] bg-white my-[2px]"></div>
            <div
              id="hamburger3"
              className="w-[23px] h-[2px] bg-white my-[2px]"></div>
          </span>
          <ul className="w-[80%] h-[100%] flex flex-row justify-between items-center text-white text-[16px]">
            <li className="cursor-pointer" onClick={() => navigate("/alljob")}>
              Việc làm
            </li>
            <li className="cursor-pointer">Tạo CV</li>
            <li className="cursor-pointer">Blog</li>
            <li
              className="cursor-pointer"
              onClick={() => navigate("/feature1")}>
              Tính năng 1
            </li>
            <li className="cursor-pointer">Tính năng 2</li>
          </ul>
        </div>
        <div className="w-[28%] h-full  flex flex-row justify-between items-center text-white text-[17px]">
          <div
            className="w-[50%] h-[70%] bg-orange-500   flex flex-row justify-center items-center cursor-pointer"
            onClick={() => navigate("/tuyendung")}>
            <p>Đăng tuyển</p>
            <FontAwesomeIcon
              icon={faArrowRight}
              className=" font-semibold mx-[10px]"
            />
          </div>
          <div className="w-[40%] h-[70%] border border-white border-solid flex flex-row justify-center items-center cursor-pointer">
            <p>Đăng nhập</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
