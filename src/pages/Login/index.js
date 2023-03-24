import { useNavigate } from "react-router-dom";

import { useEffect, useContext } from "react";

import { gapi } from "gapi-script";
import Context from "../../store/Context";
import { setLogin, setInfo } from "../../store/actions";
import { useGoogleLogin } from "@react-oauth/google";

import axios from "axios";

// const clientId =
//   "104319102501-h53nqs7514f4mh3sq3bhrr8fb7ahobsn.apps.googleusercontent.com";

function Login() {
  document.title = "Đăng nhập Job4U - Tìm kiếm việc làm";

  const [state, dispatch] = useContext(Context);
  console.log(state);

  const navigate = useNavigate();

  const googleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      var access_token = tokenResponse.access_token;
      dispatch(setLogin(true));
      axios
        .get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        })
        .then((res) => dispatch(setInfo(res.data)))
        .catch((e) => {
          throw e;
        });
      navigate("/");
    },
  });
  // const onSuccess = (res) => {
  //   console.log("Login Successful ! Current User : ", res.profileObj);
  //   dispatch(setLogin(true));
  //   dispatch(setInfo(res.profileObj));
  //   //console.log(state);
  //   navigate("/");
  // };
  // const onFailure = (res) => {
  //   console.log("Login Failed ! ", res);
  //};
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "1027600566855-oiirdugelmvt0t1ur1a5hk0bt80fht24.apps.googleusercontent.com",
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });

  return (
    <div className="w-[100%] min-h-[800px] flex flex-row justify-center bg-slate-300 mb-[-35px]">
      <div className=" w-[450px] h-[580px] rounded-[10px] bg-white  mt-[40px] flex flex-col justify-start items-center  ">
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
        <button
          className="w-[90%] h-[45px] rounded font-medium bg-[#d34127] mt-[30px] text-white hover:opacity-[0.85]  "
          type="submit">
          ĐĂNG NHẬP
        </button>
        <span className="mr-[305px] py-[10px] text-[14px] text-blue-700 cursor-pointer">
          Quên mật khẩu
        </span>
        <div className="w-[90%]  h-[20px] flex flex-row justify-between items-center ">
          <div className="w-[40%] h-[1px] bg-slate-300"></div>
          <p className="text-[#959393] ">HOẶC</p>
          <div className="w-[40%] h-[1px] bg-slate-300"></div>
        </div>
        <div
          className="w-[90%] h-[45px] rounded-[4px] border border-[#cbd5e1] flex flex-row justify-center items-center text-black mt-[30px] "
          onClick={googleLogin}>
          <img
            alt="logogoogle"
            src="https://img.icons8.com/color/512/google-logo.png"
            className="w-[30px] h-auto mx-[5px]"
          />
          <p className="mx-[5px] font-medium"> GOOGLE</p>
        </div>
        {/*        // <GoogleLogin
        //   //className=" hover:opacity-[0.1]"
        //   clientId={clientId}
        //   // buttonText="Google"
        //   onSuccess={onSuccess}
        //   onFailure={onFailure}
        //   isSignedIn={true}
        //   render={(renderProps) => (
        //     <button
        //       onClick={renderProps.onClick}
        //       style={{
        //         width: "90%",
        //         height: "45px",
        //         borderRadius: "4px",
        //         border: "1px",
        //         borderColor: "#cbd5e1",
        //         borderStyle: "solid",
        //         display: "flex",
        //         flexDirection: "row",
        //         justifyContent: "center",
        //         alignItems: "center",
        //         color: "black",
        //         marginTop: "30px",
        //       }}>
        //       <img
        //         alt="logogoogle"
        //         src="https://img.icons8.com/color/512/google-logo.png"
        //         className="w-[30px] h-auto mx-[5px]"
        //       />
        //       <p className="mx-[5px] font-medium"> GOOGLE</p>
        //     </button>
        //   )}
        //   cookiePolicy={"single_host_origin"}>
        //   GOOGLE
  // </GoogleLogin> 
*/}
        <div className="w-[90%] h-[45px] mt-[10px] flex flex-row justify-center items-center">
          <div className="w-[25%] text-[#d34127] font-medium underline cursor-pointer">
            Đăng nhập
          </div>
          <span>|</span>
          <div
            className="w-[25%] cursor-pointer "
            onClick={() => navigate("/signup")}>
            Đăng ký
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
