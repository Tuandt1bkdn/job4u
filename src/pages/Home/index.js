import SearchBox from "../../components/SearchBox";
import HrSpotlight from "../../components/Spotlight/Hr";
import logo1 from "../../logo/tma.jpg";
import logo2 from "../../logo/mgm.jpg";
import logo3 from "../../logo/ntt.jpg";
import logo4 from "../../logo/lvietpostbank.jpg";
import SpotlightJob from "../../components/Spotlight/Job";
import blog1 from "../../logo/blog1.jpeg";
import blog2 from "../../logo/blog2.png";
import blog3 from "../../logo/blog3.png";
import blog4 from "../../logo/blog4.png";
import blog5 from "../../logo/blog5.png";
import blog6 from "../../logo/blog6.png";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
function Home() {
  const blog = [
    {
      title: "Xử lý bất đồng bộ với Promise.all trong JavaScript",
      shortDecription:
        "Anh em lập trình viên JavaScript chắc không xa lạ gì với Promise hay async/await trong việc xử lý các [...]",
      time: "9 days ago",
      blog: blog1,
    },
    {
      title: "Kiến trúc hệ thống là gì?",
      shortDecription:
        "Với 1 hệ thống bất kỳ, việc xây dựng kiến trúc luôn là bước đầu tiên và quan trọng nhất quyết định tính khả thi của cả ...",
      time: "9 days ago",
      blog: blog2,
    },
    {
      title: "Tổng hợp 5 xu hướng dẫn dắt “làn sóng” công nghệ trong năm 2023",
      shortDecription:
        "Công nghệ ngày càng phát triển với nhịp độ nhanh và cải tiến không ngừng. Cập nhật và đón đầu các xu hướng công nghệ mớ...",
      time: "11 days ago",
      blog: blog3,
    },
    {
      title:
        "Embedded Developer là gì? Cần học gì để trở thành Embedded Developer",
      shortDecription:
        "Những năm trở lại đây, cứ nhắc đến công nghệ là người ta lại nhắc đến 4.0, nhắc đến IoT, smartthing, … Với lĩnh vực [....]",
      time: "11 days ago",
      blog: blog4,
    },
    {
      title:
        "Năm 2022 rực rỡ tại EPAM Vietnam – Hiện thực hoá tương lai từ nguồn lực nhân sự mạnh mẽ",
      shortDecription:
        "Vào tháng 12 vừa qua, EPAM chính thức kỉ niệm 3 năm thành lập với nhiều sự tăng trưởng mới tại thị trường Việt Nam. EPA...",
      time: "12 days ago",
      blog: blog5,
    },
    {
      title: "9 project nhỏ mà bạn có thể code để luyện tập kỹ năng lập trình",
      shortDecription:
        "Bài viết được cho phép bởi tác giả Phạm Huy Hoàng Hôm trước, mình có giới thiệu về JavaScript, đánh giá nó là [...]",
      time: "15 days ago",
      blog: blog6,
    },
  ];

  const spotlightCompanys = [
    {
      img: logo1,
      name: "TMA Tech Group",
    },
    {
      img: logo2,
      name: "mgm technology partners Vietnam",
    },
    {
      img: logo3,
      name: "NTT Data Viet Nam",
    },
    {
      img: logo4,
      name: "Liên Việt Post Bank",
    },
    {
      img: logo1,
      name: "TMA Tech Group",
    },
    {
      img: logo2,
      name: "mgm technology partners Vietnam",
    },
    {
      img: logo3,
      name: "NTT Data Viet Nam",
    },
    {
      img: logo4,
      name: "Liên Việt Post Bank",
    },
  ];
  const spotlightJobs = [
    {
      logo: logo1,
      companyName: "TMA Tech Group",
      jobName: "Embedded C/C++",
      salary: "Cạnh tranh",
    },
    {
      logo: logo3,
      companyName: "NTT Data Viet Nam",
      jobName: "Business Analyst",
      salary: "800$",
    },
    {
      logo: logo4,
      companyName: "Lien Viet Post Bank",
      jobName: "Giao dịch viên",
      salary: "7-10tr",
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
        <div
          className="w-[33%] h-[90%] bg-white flex flex-col items-start"
          id="spotlightJob">
          <p className="text-[20px] font-semibold text-[#d34126]">
            Công việc <span className="text-[#444]">nổi bật</span>
          </p>

          {spotlightJobs.map((spotlightJob) => (
            <SpotlightJob
              companyName={spotlightJob.companyName}
              shortDescription={spotlightJob.jobName}
              salary={spotlightJob.salary}
            />
          ))}
        </div>
      </div>
      {/* Tuyển dụng nổi bật  */}
      <div className="w-full min-h-[250px] bg-[#efefef] mt-[40px] flex flex-row items-center justify-center">
        <div className="w-[5%] h-1/2 flex justify-end items-center mb-[20px] text-[35px]">
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div className="w-[70%] h-full flex flex-col justify-start items-start pb-[20px]">
          <p className="text-[20px] font-semibold text-black mt-[30px]">
            Nhà tuyển dụng nổi bật
          </p>
          <div
            id="hrspotlight"
            className="mt-[20px] h-[165px] flex flex-row justify-start ">
            {spotlightCompanys.map((spotlightCompany) => (
              <HrSpotlight
                logo={spotlightCompany.img}
                name={spotlightCompany.name}
              />
            ))}
          </div>
        </div>
        <div className="w-[5%] h-1/2 flex justify-start items-center ml-[13px] mb-[20px] text-[35px]">
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
      {/* End Tuyển dụng nổi bật  */}
      {/*  [Blog Việc làm] */}
      <div className="w-[70%] min-h-[600px] mt-[50px]  flex flex-col items-start">
        <h2 className="text-[20px] font-semibold">Blog việc làm</h2>
        <div className="w-[100%]  flex  mt-[20px] flex-row flex-wrap justify-between items-start">
          {blog.map((item, index) => (
            <div
              key={index}
              className="w-[19%] h-[450px]  flex flex-col justify-start mb-[20px] items-start relative hover:scale-[1.05]">
              <div className="w-[100%] h-[60%]  flex flex-col justify-start border border-[#cdcdcd] ">
                <div className="my-[10px] w-[100%] h-[50%] bg-red-300 cursor-pointer ">
                  <img
                    src={item.blog}
                    alt=""
                    className="w-[100%] h-[100%] object-fill "
                  />
                </div>
                <p className="text-[18px] font-semibold mt-[5px] text-left cursor-pointer hover:text-[#d08b3c] ">
                  {item.title}
                </p>
              </div>
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
      </div>{" "}
      {/* End Blog Việc làm */}
    </div>
  );
}

export default Home;
