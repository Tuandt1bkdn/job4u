import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { useState } from "react";

function Home() {
  const majors = ["Văn phòng", "Marketing", "CSKH"];
  return (
    <div class=" bg-white h-screen flex flex-col items-center">
      <div className="w-[70%] h-[140px]  mt-[20px] border border-solid border-[#d34126] flex flex-col justify-center">
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
            <div
              key={index}
              className="border border-solid border-stone-500 p-[5px] mx-[5px] text-[13px] text-black">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Cong ty noi bat  */}

      <div className="w-[70%] h-[350px]  mt-[25px] flex flex-row justify-between items-center font-sans">
        <div className="w-[65%] h-[90%]  flex flex-col items-start justify-between">
          <p className="text-[20px] font-semibold text-[#d34126]">
            Công ty <span className="text-[#444]">nổi bật</span>
          </p>
          <div className="w-[90%] h-[90%] flex flex-row justify-between items-center">
            <img alt="" className="w-[40%] h-[100%] bg-black" />
            <div className="w-[40%] bg-blue-300 h-[100%] flex flex-col items-start relative">
              <p className="text-[20px] text-[#d34126] font-semibold">
                Golden Gate Group
              </p>
              <p className="my-[10px]">Description</p>
              <p className="italic">Slogan</p>
              <p className="absolute bottom-[130px]">Address</p>
              <p className=" absolute bottom-0">Number of jobs</p>
            </div>
            <div className="w-[15%] h-[100%] bg-red-300 flex flex-col">
              <div className="w-[100%] h-1/3"></div>
              <div className="w-[100%] h-1/3"></div>
              <div className="w-[100%] h-1/3"></div>
            </div>
          </div>
        </div>
        <div className="w-[33%] h-[90%] bg-white flex flex-col items-start">
          <p className="text-[20px] font-semibold text-[#d34126]">
            Công việc <span className="text-[#444]">nổi bật</span>
          </p>
          <div className="w-[100%] h-[100%]  flex flex-col items-start">
            <div className="w-[100%] h-1/3 flex flex-col items-start">
              <p className="text-[#b3b3b3] text-[16px] font-semibold">
                Ten Cong ty
              </p>
              <p className="text-[black] text-[16px] font-semibold">
                Short Job Description
              </p>
              <p className="text-[#fa430a]">Muc luong</p>
            </div>
            <div className="w-[100%] h-1/3 flex flex-col items-start">
              <p className="text-[#b3b3b3] text-[16px] font-semibold">
                Ten Cong ty
              </p>
              <p className="text-[black] text-[16px] font-semibold">
                Short Job Description
              </p>
              <p className="text-[#fa430a]">Muc luong</p>
            </div>
            <div className="w-[100%] h-1/3 flex flex-col items-start">
              <p className="text-[#b3b3b3] text-[16px] font-semibold">
                Ten Cong ty
              </p>
              <p className="text-[black] text-[16px] font-semibold">
                Short Job Description
              </p>
              <p className="text-[#fa430a]">Muc luong</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[200px] bg-[#efefef] mt-[40px] flex flex-col "></div>
    </div>
  );
}

export default Home;
