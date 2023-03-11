import {
  faAddressCard,
  faBriefcase,
  faSquarePhoneFlip,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-20  flex flex-row justify-center items-center border-solid border-b">
      <div className="w-[70%] h-20  flex flex-row justify-between items-center">
        <div
          className="w-[40%] h-[100%]  text-red-700 flex flex-row items-center cursor-pointer "
          onClick={() => navigate("/")}>
          <img
            src="https://www.job4u.rs/wp-content/uploads/2018/01/final5logo-NOVO.png"
            alt="Job4U"
            className="h-[100%] object-fill"
          />
          <p className="text-[25px] font-[400] font-sans text-[black]">
            <span className="text-[#f50046]">Việc làm </span>cho bạn
          </p>
        </div>
        <div className="w-[40%] h-[100%] flex flex-row  justify-end items-center text-[#393e46]">
          <div className="h-[30%]  flex flex-row justify-center items-center text-[15px] border-r border-solid border-r-black ">
            <FontAwesomeIcon icon={faSquarePhoneFlip} className="ml-3" />
            <p className="pr-2 pl-2">0912.123.123</p>
          </div>
          <div className="h-[30%] bg-white flex flex-row justify-center items-center text-[15px] border-r border-solid border-r-black ">
            <FontAwesomeIcon icon={faAddressCard} className="ml-3" />
            <p className="pr-2 pl-2">Lien he</p>
          </div>
          <div className="h-[30%] bg-white flex flex-row justify-center items-center text-[15px]  ">
            <FontAwesomeIcon icon={faBriefcase} className="ml-3" />
            <p className="pr-2 pl-2">Dang tuyen</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
