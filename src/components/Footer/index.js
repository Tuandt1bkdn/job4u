import FooterComponent from "./FooterComponent";

function Footer() {
  //
  const list1 = [
    "Về chúng tôi",
    "Liên hệ",
    "Thoả thuận sử dụng",
    "Cơ hội việc làm",
    "Quy định bảo mật",
    "Quy chế hoạt động của sàn giao dịch thương mại điện tử Job4U",
    "Giải quyết khiếu nại",
    "Ứng dụng Di Động",
  ];
  //
  const list2 = [
    "Tính lương Gross - Net",
    "Tạo CV",
    "Tìm kiếm công việc IT",
    "Trắc nghiệm tính cách",
  ];
  //
  const list3 = ["Đăng việc làm IT", "Tìm kiếm nhân tài"];

  return (
    <div className="w-[100%] h-[350px] bg-[#efefef] mt-[35px] flex flex-row justify-center items-start">
      <div className="w-[22%] min-h-[200px] flex flex-col pr-[30px] mt-[25px]">
        <img
          alt=""
          src="https://www.job4u.rs/wp-content/uploads/2018/01/final5logo-NOVO.png"
          className="w-[140px] h-auto"
        />
        <p className="text-left text-[15px] mb-[5px] leading-relaxed flex-wrap ">
          Số 34, đường Quang Trung, quận Cẩm Lệ, Thành Phố Đà Nẵng
        </p>
        <p className="text-left text-[15px] text-[#999999] mb-[5px]">
          Copyright © CÔNG TY CỔ PHẦN APPLANCER
        </p>
        <p className="text-left text-[15px]  text-[#999999] mb-[5px]">
          Liên Hệ:{" "}
          <span className=" cursor-pointer hover:text-[#fd7e14]">
            028 6273 3496
          </span>{" "}
          -{" "}
          <span className=" cursor-pointer hover:text-[#fd7e14] ">
            contact@topdev.vn
          </span>
        </p>
      </div>
      <FooterComponent list={list1} listName="Về Job4U" />
      <FooterComponent list={list2} listName="Ứng viên" />
      <FooterComponent list={list3} listName="Nhà tuyển dụng" />
    </div>
  );
}

export default Footer;
