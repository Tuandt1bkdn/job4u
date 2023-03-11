import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";

function JobPageContent({ jobdata, jobtype }) {
  const handleSavedJob = (item) => {
    const body = {
      CompanyName: item.CompanyName,
      JobName: item.JobName,
      Address: item.Address,
      AccountID: "tuanqb12",
      idJob: item.idJob,
    };
    axios.post("http://localhost:5000/savedjob", body).then();
    //console.log(item);
  };

  return (
    <>
      <div className="w-[70%] min-h-[1000px] mt-[20px]">
        {/* So viec lam tim thay  */}

        <div className="w-[100%] h-[50px] border border-slate-200 flex flex-row items-center ">
          <p className="ml-[12px] text-[22px] text-[#d34127] font-semibold">
            {jobdata.length}
            <span className="text-[22px] text-black font-normal">
              {" "}
              Việc làm
            </span>{" "}
            <span className="font-medium">{jobtype}</span>
          </p>
        </div>

        {/* Thong tin viec lam */}
        <div className="w-[100%] min-h-[1000px mt-[20px]">
          <div className="w-[70%] min-h-[1000px] ">
            {jobdata.map((item, index) => (
              <div
                key={index}
                className=" w-[100%] min-h-[50px] border-t-[2px] border-x border-[#b1b1b1] flex flex-row justify-between bg-gradient-to-r from-[#f7d4d3]  to-[#f7e9e0]">
                <div className="w-[20%] h-[100px] flex flex-row justify-center items-center mt-[10px]">
                  <img
                    alt=""
                    src="https://www.job4u.rs/wp-content/uploads/2018/01/final5logo-NOVO.png"
                    className="w-[100px] h-auto object-fill"
                  />
                </div>
                <div className="w-[75%] h-[100%] flex flex-col justify-start item-start text-left text-[#393e46] ">
                  <p className="text-[#d34127] font-medium text-[16px] mt-[5px]">
                    {item.JobName}
                  </p>
                  <p className="text-[14px]">{item.CompanyName}</p>
                  <div className="flex flex-row justify-start">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="text-[14px] mt-[5px]"
                    />
                    <p className="text-[14px] ml-[5px]">{item.Address}</p>
                  </div>
                  <ul className="pb-[10px] list-disc ml-[20px] text-[14px]">
                    {item.Benefit1 && <li>{item.Benefit1}</li>}
                    {item.Benefit2 && <li>{item.Benefit2}</li>}
                    {item.Benefit3 && <li>{item.Benefit3}</li>}
                  </ul>
                </div>
                {/* { (savedJobs.some(index)) ? <>acc</> : <>abc</>} */}
                <div
                  className="mt-[5px] mr-[5px] z-[9] relative top-0 right-0 cursor-pointer"
                  onClick={() => handleSavedJob(item)}>
                  <FontAwesomeIcon icon={faBookmark} />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Het thong tin Viec lam  */}
      </div>
    </>
  );
}

export default JobPageContent;
