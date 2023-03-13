import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxArchive, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
//import axios from "axios";
import { GetSavedJobs } from "../../API/Services/GET";
import "./index.css";

function SavedJob() {
  //
  const [showSavedJob, setShowSavedJob] = useState(false);

  const [savedJobs, setSavedJob] = useState([]);

  useEffect(() => {
    GetSavedJobs()
      .then((res) => setSavedJob(res.data))
      .catch((e) => {
        throw e;
      });
  }, [showSavedJob]);

  const handleShowJobSaved = () => {
    setShowSavedJob(!showSavedJob);
  };
  return (
    <>
      <div
        className="fixed bottom-[20px] right-[20px] w-[60px] h-[60px]  flex flex-row justify-center items-center "
        onClick={handleShowJobSaved}>
        <FontAwesomeIcon
          icon={faBoxArchive}
          className=" text-[40px] text-[#d34127] cursor-pointer"
        />
      </div>
      {/* Saved Job Box  */}
      {showSavedJob ? (
        <div className="fixed rounded-[15px] shadow-xl bottom-[80px] right-[30px] w-[300px] h-[400px] bg-white border border-[#f0f0f0] ">
          <p className="h-[40px] text-[20px] text-[#393e46] mt-[10px] ">
            Bài đăng đã lưu
          </p>
          <div
            className="h-[340px] w-[100%] bg-white overflow-y-scroll  "
            id="savedjob">
            {savedJobs.map((savedJob, index) => (
              <div
                key={index}
                className="w-[full] min-h-[60px]  flex flex-row justify-between items-center border-t border-[#f0f0f0]">
                <img
                  className="w-[20%] h-auto object-fill ml-[5px]"
                  alt=""
                  src="https://www.job4u.rs/wp-content/uploads/2018/01/final5logo-NOVO.png"
                />
                <div className="w-[70%] min-h-[60px] text-left flex flex-col items-start break-words">
                  <p className="text-[#d34127] font-medium text-[13px] mt-[5px]  ">
                    {savedJob.JobName}
                  </p>
                  <p className="text-[14px]">{savedJob.CompanyName}</p>
                  <div className="flex flex-row justify-start pr-[4px]">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="text-[13px] mt-[5px]"
                    />
                    <p className="text-[13px] ml-[5px] pb-[10px]">
                      {savedJob.Address}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default SavedJob;
