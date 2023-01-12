import {
  faAddressCard,
  faBriefcase,
  faSquarePhoneFlip,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <div className="w-full h-20  flex flex-row justify-center items-center">
      <div className="w-[70%] h-16  flex flex-row justify-between items-center">
        <div className="w-[40%] h-[100%]  text-red-700 flex flex-row">
          Viec lam cho ban
        </div>
        <div className="w-[30%] h-[100%] flex flex-row  justify-around items-center">
          <div className="min-w-[50px] h-[30%] bg-red-500 flex flex-row justify-center items-center text-[15px] border-r border-solid border-r-black ">
            <FontAwesomeIcon icon={faSquarePhoneFlip} className="" />
            <p className="">0912.123.123</p>
          </div>
          <div className="min-w-[50px] h-[30%] bg-white flex flex-row justify-center items-center text-[15px] border-r border-solid border-r-black ">
            <FontAwesomeIcon icon={faAddressCard} />
            Lien he
          </div>
          <div className="min-w-[50px] h-[30%] bg-white flex flex-row justify-center items-center text-[15px]  ">
            <FontAwesomeIcon icon={faBriefcase} />
            Dang tuyen
          </div>
          <div className="min-w-[50px] h-[30%] bg-white flex flex-row justify-center items-center text-[15px]  ">
            <FontAwesomeIcon icon={faBriefcase} />
            Dang tuyen
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
