import axios from "axios";
import { useState } from "react";

function Hiring() {
  document.title = "Job4U - Đăng tuyển công việc";

  const [companyName, setCompanyName] = useState("");
  const [hrName, setHrName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [jobName, setJobName] = useState("");
  const [address, setAddress] = useState("");
  const [benefit1, setBenefit1] = useState("");
  const [benefit2, setBenefit2] = useState("");
  const [benefit3, setBenefit3] = useState("");
  // [jobRoleID, setJobRoleID] = useState(1);

  const handleValidator = (id) => {
    var element = document.getElementById(id);
    var warning = document.getElementById("warning");
    var button = document.getElementById("button");
    if (!element.value) {
      warning.style.display = "block";
      button.setAttribute("disabled", "disabled");
      //button.disabled = "disabled";
    } else {
      warning.style.display = "none";
      button.removeAttribute("disabled");
    }
  };

  const handleSubmit = () => {
    const body = {
      CompanyName: companyName,
      HrName: hrName,
      Phone: phone,
      JobName: jobName,
      Address: address,
      Benefit1: benefit1,
      Benefit2: benefit2,
      Benefit3: benefit3,
      JobRoleID: 1,
    };

    axios.post("http://localhost:5000/censorjob", body).then();
    console.log(body);
    // console.log(123);
  };

  return (
    <div className="w-[100%] min-h-[1000px] mb-[-35px] bg-slate-300 flex flex-row justify-center">
      <div className="w-[70%] h-[900px] bg-white mt-[50px] flex flex-row justify-center">
        <div className="w-[55%] h-[90%]  mt-[40px] flex flex-col items-start">
          <p className="text-left text-[25px]">
            Vui lòng điền thông tin liên hệ vào mẫu bên dưới. TopDev rất hân
            hạnh được cung cấp cho bạn dịch vụ tuyển dụng IT & kết nối Developer
            hàng đầu.
          </p>
          <div className="w-[100%] h-[700px]  flex flex-col justify-start items-start ">
            <div className="w-[100%] h-[90px] bg-white flex flex-row justify-between">
              <div className="w-[47%] h-[100%] flex flex-col justify-center items-start">
                <p className="text-[18px] text-slate-700 font-medium">
                  Tên công ty (<span className="text-[#e30c1f]">*</span>)
                </p>
                <input
                  type="text"
                  placeholder="Ex : Trung tâm ABC"
                  className="input1 w-[100%] h-[42px] border border-black px-[8px] py-[8px] inline-block outline-none focus:border-blue-600  focus:border-[2px]"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  id="input1"
                  onBlur={() => handleValidator("input1")}
                />
              </div>
              <div className="w-[47%] h-[100%] flex flex-col justify-center items-start">
                <p className="text-[18px] text-slate-700 font-medium">
                  Họ & Tên (<span className="text-[#e30c1f]">*</span>)
                </p>
                <input
                  type="text"
                  placeholder="Họ và tên của bạn"
                  className="w-[100%] h-[42px] border border-black px-[8px] py-[8px] inline-block outline-none focus:border-blue-600  focus:border-[2px]"
                  value={hrName}
                  onChange={(e) => setHrName(e.target.value)}
                  id="input2"
                  onBlur={() => handleValidator("input2")}
                />
              </div>
            </div>
            <div className="w-[100%] h-[90px]  flex flex-row justify-between bg-white">
              <div className="w-[47%] h-[100%] flex flex-col justify-center items-start">
                <p className="text-[18px] text-slate-700 font-medium">
                  Số điện thoại liên lạc (
                  <span className="text-[#e30c1f]">*</span>)
                </p>
                <input
                  type="text"
                  placeholder="Ex : Số ĐT của bạn hoặc Công ty"
                  className="w-[100%] h-[42px] border border-black px-[8px] py-[8px] inline-block outline-none focus:border-blue-600  focus:border-[2px]"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  id="input3"
                  onBlur={() => handleValidator("input3")}
                />
              </div>

              <div className="w-[47%] h-[100%] flex flex-col justify-center items-start">
                <p className="text-[18px] text-slate-700 font-medium">
                  Email liên hệ (hãy nhập Email công ty) (
                  <span className="text-[#e30c1f]">*</span>)
                </p>
                <input
                  type="text"
                  placeholder="Ex : ABC_Center@itdn.vn"
                  className="w-[100%] h-[42px] border border-black px-[8px] py-[8px] inline-block outline-none focus:border-blue-600  focus:border-[2px]"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  id="input4"
                  onBlur={() => handleValidator("input4")}
                />
              </div>
            </div>
            <div className="w-[100%] h-[90px]  flex flex-row justify-between bg-white">
              <div className="w-[47%] h-[100%] flex flex-col justify-center items-start">
                <p className="text-[18px] text-slate-700 font-medium">
                  Tên công việc (<span className="text-[#e30c1f]">*</span>)
                </p>
                <input
                  type="text"
                  placeholder="Ex : Front-End Developer"
                  className="w-[100%] h-[42px] border border-black px-[8px] py-[8px] inline-block outline-none focus:border-blue-600  focus:border-[2px]"
                  value={jobName}
                  onChange={(e) => setJobName(e.target.value)}
                  id="input5"
                  onBlur={() => handleValidator("input5")}
                />
              </div>
              <div className="w-[47%] h-[100%] flex flex-col justify-center items-start">
                <p className="text-[18px] text-slate-700 font-medium">
                  Địa chỉ công ty (<span className="text-[#e30c1f]">*</span>)
                </p>
                <input
                  type="text"
                  placeholder="Ex : 19 Quang Trung, Hải Châu, Đà Nẵng"
                  className="w-[100%] h-[42px] border border-black px-[8px] py-[8px] inline-block outline-none focus:border-blue-600  focus:border-[2px]"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  id="input6"
                  onBlur={() => handleValidator("input6")}
                />
              </div>
            </div>
            <div className="w-[100%] h-[550px] flex flex-col items-start justify-start">
              <p className="text-left text-[20px] text-slate-500">
                Để thuận tiện cho việc đăng tải và thu hút nhân lực cho việc
                tuyển dụng của bạn, chúng tôi khuyến khích các bạn mô tả ngắn về
                quyền lợi của người lao động khi vào quý công ty
              </p>
              <div className="w-[100%] h-[90px]  flex flex-col justify-center items-start">
                <p className="text-[18px] text-slate-700 font-medium">
                  Quyền lợi 1
                </p>
                <input
                  type="text"
                  placeholder="Ex : Mức lương ..."
                  className="w-[100%] h-[42px] border border-black px-[8px] py-[8px] inline-block outline-none focus:border-blue-600  focus:border-[2px]"
                  value={benefit1}
                  onChange={(e) => setBenefit1(e.target.value)}
                />
              </div>
              <div className="w-[100%] h-[90px]  flex flex-col justify-center items-start">
                <p className="text-[18px] text-slate-700 font-medium">
                  Quyền lợi 2
                </p>
                <input
                  type="text"
                  placeholder="Ex : Môi trường năng động ..."
                  className="w-[100%] h-[42px] border border-black px-[8px] py-[8px] inline-block outline-none focus:border-blue-600  focus:border-[2px]"
                  value={benefit2}
                  onChange={(e) => setBenefit2(e.target.value)}
                />
              </div>
              <div className="w-[100%] h-[90px]  flex flex-col justify-center items-start">
                <p className="text-[18px] text-slate-700 font-medium">
                  Quyền lợi 3
                </p>
                <input
                  type="text"
                  placeholder="Ex : Lương tháng 13, hoa hồng ..."
                  className="w-[100%] h-[42px] border border-black px-[8px] py-[8px] inline-block outline-none focus:border-blue-600  focus:border-[2px]"
                  value={benefit3}
                  onChange={(e) => setBenefit3(e.target.value)}
                />
              </div>
              <div
                id="warning"
                className="hidden text-left text-[#e30c1f] text-[18px]">
                Hãy nhập những dữ liệu bắt buộc (có dấu * màu đỏ)
              </div>
              <button
                id="button"
                onClick={handleSubmit}
                className="w-[200px] h-[60px] m-auto bg-gradient-to-r from-slate-300 to-[#e9e6e2] text-[#6460d4] text-[20px] font-semibold rounded-[15px] cursor-pointer disabled:cursor-not-allowed">
                Gửi hồ sơ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hiring;
