import { useNavigate } from "react-router-dom";

function Signup() {
  document.title = "Đăng ký tài khoản Job4U - Tìm kiếm việc làm";
  const navigate = useNavigate();
  return (
    <div className="w-[100%] min-h-[800px] flex flex-row justify-center bg-slate-300 mb-[-35px]">
      <div className=" w-[450px] h-[400px] rounded-[10px] bg-white mt-[40px] flex flex-col justify-start items-center  ">
        <p className="text-[25px] font-normal  py-[10px]  ">
          Chào mừng đến với Job4U
        </p>

        <input
          type="text"
          placeholder="Tài khoản"
          className=" my-[3px] pl-[10px] rounded bg-[#f8f8f8] outline-none w-[90%] h-[45px] border border-slate-300 focus:bg-white "
        />
        <input
          type="text"
          placeholder="Mật khẩu"
          className="mt-[25px] pl-[10px] rounded bg-[#f8f8f8] outline-none w-[90%] h-[45px] border border-slate-300 focus:bg-white"
        />
        <input
          type="text"
          placeholder="Email"
          className="mt-[25px] pl-[10px] rounded bg-[#f8f8f8] outline-none w-[90%] h-[45px] border border-slate-300 focus:bg-white"
        />
        <button
          className="w-[90%] h-[45px] rounded font-medium bg-[#d34127] mt-[30px] text-white hover:opacity-[0.85]  "
          type="submit">
          ĐĂNG KÝ
        </button>

        <div className="w-[90%] h-[45px] mt-[10px] flex flex-row justify-center items-center">
          <div
            className="w-[25%] cursor-pointer "
            onClick={() => navigate("/login")}>
            Đăng nhập
          </div>
          <span>|</span>
          <div className="w-[25%] text-[#d34127] font-medium underline cursor-pointer ">
            Đăng ký
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
