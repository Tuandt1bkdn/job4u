import { faArrowRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import Context from "../../store/Context";
import { Fragment, useContext } from "react";
import Tippy from "@tippyjs/react/headless";
// import { GoogleLogout, GoogleLogin } from "react-google-login";
// import { setLogin, setInfo } from "../../store/actions";
import { googleLogout } from "@react-oauth/google";

// const clientId =
//   "104319102501-h53nqs7514f4mh3sq3bhrr8fb7ahobsn.apps.googleusercontent.com";

function Navbar() {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(Context);

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

  // const onSuccess = (res) => {
  //   console.log("Login Successful ! Current User : ", res.profileObj);
  //   dispatch(setLogin(true));
  //   dispatch(setInfo(res.profileObj));
  //   console.log(state);
  // };
  // const onFailure = (res) => {
  //   console.log("Login Failed ! ", res);
  // };

  // const onLogoutSuccess = () => {
  //   dispatch(setLogin(false));
  //   window.location.reload();
  // };

  return (
    <div className="w-full h-20 bg-[#212529] sticky top-0 flex flex-row justify-center items-center z-10">
      <div className="w-[65%] h-[80%]  flex flex-row justify-between items-center ">
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
              //onClick={() => navigate("/feature1")}>
            >
              Tính năng 1
            </li>
            <li
              className="cursor-pointer"
              onClick={() => navigate("/feature2")}>
              Tính năng 2
            </li>
          </ul>
        </div>
        <div className="w-[28%] h-full  flex flex-row justify-end items-center text-white text-[17px]">
          {state.login ? (
            <Fragment>
              <p>Xin chào, &nbsp;</p>
              <Tippy
                interactive
                placement="bottom-end"
                render={(attrs) => (
                  <div
                    className="w-[255px] h-[200px] bg-[#e8e8e8] mt-[20px] flex flex-col justify-start items-start"
                    {...attrs}>
                    <div className="w-[100%] pl-[20px] h-[20%] border-b text-black text-[16px] border-[#ccc] flex justify-start items-center cursor-pointer hover:text-[#d34127] ">
                      Bảng điều khiển
                    </div>
                    <div className="w-[100%] pl-[20px] h-[20%] border-b text-black text-[16px] border-[#ccc] flex justify-start items-center cursor-pointer hover:text-[#d34127] ">
                      Công việc đang theo dõi
                    </div>
                    <div className="w-[100%] pl-[20px] h-[20%] border-b text-black text-[16px] border-[#ccc] flex justify-start items-center cursor-pointer hover:text-[#d34127] ">
                      Blog đang theo dõi
                    </div>
                    <div
                      onClick={() => navigate("/tuyendung")}
                      className="w-[100%] pl-[20px] h-[20%] border-b text-black text-[16px] border-[#ccc] flex justify-start items-center cursor-pointer hover:text-[#d34127] ">
                      Đăng tuyển
                    </div>

                    <div
                      onClick={googleLogout()}
                      className="w-[100%] pl-[20px] h-[20%]  text-black text-[16px] border-[#ccc] flex justify-start items-center cursor-pointer hover:text-[#d34127] ">
                      Đăng xuất
                    </div>

                    {/* // <GoogleLogout
                    //   clientId={clientId}
                    //   onLogoutSuccess={onLogoutSuccess}
                    //   render={(renderProps) => (
                    //     <div
                    //       onClick={renderProps.onClick}
                    //       className="w-[100%] pl-[20px] h-[20%]  text-black text-[16px] border-[#ccc] flex justify-start items-center cursor-pointer hover:text-[#d34127] ">
                    //       Đăng xuất
                    //     </div>
                //   )}></GoogleLogout> */}
                  </div>
                )}>
                <span>
                  {" "}
                  {state.information.name}{" "}
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    className="text-[18px] text-white "
                  />
                </span>
              </Tippy>
            </Fragment>
          ) : (
            <>
              <div
                className="w-[50%] h-[70%] bg-[#d34127] mr-[30px]  flex flex-row justify-center items-center cursor-pointer"
                onClick={() => navigate("/tuyendung")}>
                <p>Đăng tuyển</p>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className=" font-semibold mx-[10px]"
                />
              </div>
              <div
                onClick={() => {
                  state.login ? navigate("/") : navigate("/login");
                }}
                className="w-[40%] h-[70%] border border-white border-solid flex flex-row justify-center items-center cursor-pointer">
                <p>Đăng nhập</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
