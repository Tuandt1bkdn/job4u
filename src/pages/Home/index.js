import SearchBox from "../../components/SearchBox";

function Home() {
  const blog = [
    {
      title: "Xử lý bất đồng bộ với Promise.all trong JavaScript",
      shortDecription:
        "Anh em lập trình viên JavaScript chắc không xa lạ gì với Promise hay async/await trong việc xử lý các [...]",
      time: "9 days ago",
    },
    {
      title: "Kiến trúc hệ thống là gì?",
      shortDecription:
        "Với 1 hệ thống bất kỳ, việc xây dựng kiến trúc luôn là bước đầu tiên và quan trọng nhất quyết định tính khả thi của cả ...",
      time: "9 days ago",
    },
    {
      title: "Tổng hợp 5 xu hướng dẫn dắt “làn sóng” công nghệ trong năm 2023",
      shortDecription:
        "Công nghệ ngày càng phát triển với nhịp độ nhanh và cải tiến không ngừng. Cập nhật và đón đầu các xu hướng công nghệ mớ...",
      time: "11 days ago",
    },
    {
      title:
        "Embedded Developer là gì? Cần học gì để trở thành Embedded Developer",
      shortDecription:
        "Những năm trở lại đây, cứ nhắc đến công nghệ là người ta lại nhắc đến 4.0, nhắc đến IoT, smartthing, … Với lĩnh vực [....]",
      time: "11 days ago",
    },
    {
      title:
        "Năm 2022 rực rỡ tại EPAM Vietnam – Hiện thực hoá tương lai từ nguồn lực nhân sự mạnh mẽ",
      shortDecription:
        "Vào tháng 12 vừa qua, EPAM chính thức kỉ niệm 3 năm thành lập với nhiều sự tăng trưởng mới tại thị trường Việt Nam. EPA...",
      time: "12 days ago",
    },
    {
      title: "9 project nhỏ mà bạn có thể code để luyện tập kỹ năng lập trình",
      shortDecription:
        "Bài viết được cho phép bởi tác giả Phạm Huy Hoàng Hôm trước, mình có giới thiệu về JavaScript, đánh giá nó là [...]",
      time: "15 days ago",
    },
  ];
  return (
    <div class=" bg-white min-h-screen flex flex-col items-center">
      {/* SearchBox */}
      <SearchBox />
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
      <div className="w-full h-[200px] bg-[#efefef] mt-[40px] flex flex-row justify-start">
        <div className="w-[15%] h-full"></div>
        <div className="w-[70%] h-full flex flex-col items-start">
          <p className="text-[20px] font-semibold text-black mt-[20px]">
            Nhà tuyển dụng nổi bật
          </p>
          <ul>
            <li></li>
          </ul>
        </div>
        <div className="w-[15%] h-full"></div>
      </div>
      <div className="w-[70%] min-h-[600px] mt-[50px]  flex flex-col items-start">
        <h2 className="text-[20px] font-semibold">Blog việc làm</h2>
        <div className="w-[100%]  flex  mt-[20px] flex-row flex-wrap justify-between items-start">
          {blog.map((item, index) => (
            <div
              key={index}
              className="w-[19%] h-[450px] border border-[#cdcdcd] flex flex-col justify-start items-start relative">
              <div className="my-[10px] w-[100%] h-[35%] bg-red-300 cursor-pointer"></div>
              <p className="text-[18px] font-semibold mt-[5px] text-left cursor-pointer">
                {item.title}
              </p>
              <p className="absolute top-[280px] text-[15px] mt-[20px] text-left">
                {item.shortDecription}
              </p>
              <span className="w-[100%] text-[13px] absolute bottom-2 flex flex-row justify-between">
                <p className="text-[#d34127]">Read more</p>
                <p className="text-[#666666]">{item.time}</p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
