//[Img]
import logo1 from "../../logo/tma.jpg";
import logo2 from "../../logo/mgm.jpg";
import logo3 from "../../logo/ntt.jpg";
import logo4 from "../../logo/lvietpostbank.jpg";

//[Style]
import "./index.css";

//[Components]
import SpotlightJob from "../../components/Spotlight/Job";
import SearchBox from "../../components/SearchBox";
import { blogs } from "../../static/blogs";

//[Library]
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

//[HOOK]
import { useEffect, useState } from "react";

function Home() {
  // eslint-disable-next-line no-unused-vars
  const [active, setActive] = useState(1);

  // eslint-disable-next-line no-unused-vars
  const [spotlightCompanys, setSpotlightCompanys] = useState([
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
  ]);
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

  const loadShow = () => {
    var listItems = document.querySelectorAll(".item");
    console.log(listItems);
    let stt = 0;
    for (var i = active + 1; i < 7; i++) {
      stt++;
      console.log(active);
      console.log(i);
      listItems[i].style.transform = `translateX(${256 * stt}px)`;
      console.log(i);
      listItems[active - 1].style.display = "none";
      console.log(i);

      listItems[active + 5].style.display = "none";
      listItems[active + 6].style.display = "none";
    }
  };
  //const [abc, setAbc] = useState(1);
  const nextButton = () => {
    setActive(active + 1);
    // let item = spotlightCompanys[0];
    // spotlightCompanys.shift();
    // spotlightCompanys.push(item);
    // setSpotlightCompanys(spotlightCompanys);
    // loadShow();
  };
  useEffect(() => {
    loadShow(active);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <div class=" bg-white min-h-screen flex flex-col items-center">
      {/* SearchBox */}
      <SearchBox />
      {/* Cong ty noi bat  */}
      <div className="w-[65%] h-[350px]  mt-[25px] flex flex-row justify-between items-center font-sans">
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

          {spotlightJobs.map((spotlightJob, index) => (
            <SpotlightJob
              key={index}
              companyName={spotlightJob.companyName}
              shortDescription={spotlightJob.jobName}
              salary={spotlightJob.salary}
            />
          ))}
        </div>
      </div>
      {/* Tuyển dụng nổi bật  */}
      <div className="w-full min-h-[250px] bg-[#efefef] mt-[40px] flex flex-row items-center justify-center">
        <div className="w-[7%] h-1/2 flex justify-end items-center mb-[20px] text-[35px]">
          <FontAwesomeIcon onClick={nextButton} icon={faChevronLeft} />
        </div>
        <div className="w-[65%] h-full flex flex-col justify-start items-start pb-[20px]">
          <p className="text-[20px] font-semibold text-black mt-[30px]">
            Nhà tuyển dụng nổi bật
          </p>
          <div
            id="hrspotlight"
            className="mt-[20px] h-[165px] flex flex-row justify-start ">
            {spotlightCompanys.map((spotlightCompany, index) => (
              <div
                key={index}
                className="item w-[220px] h-[150px]  flex flex-col justify-between  absolute">
                <div className="w-[220px] h-[100px] bg-white flex justify-center items-center">
                  <img
                    alt=""
                    src={spotlightCompany.img}
                    className="h-[50px] w-auto"
                  />
                </div>
                <div className="w-[200px] h-[30px] font-medium text-[#444444] break-words">
                  {spotlightCompany.name}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[7%] z-[10] h-1/2 flex justify-start items-center ml-[13px] mb-[20px] text-[35px]">
          <FontAwesomeIcon onClick={nextButton} icon={faChevronRight} />
        </div>
      </div>
      {/* End Tuyển dụng nổi bật  */}
      {/*  [Blog Việc làm] */}
      <div className="w-[65%] min-h-[600px] mt-[50px]  flex flex-col items-start">
        <h2 className="text-[20px] font-semibold">Blog việc làm</h2>
        <div className="w-[100%]  flex  mt-[20px] flex-row flex-wrap justify-between items-start">
          {blogs.map((item, index) => (
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
