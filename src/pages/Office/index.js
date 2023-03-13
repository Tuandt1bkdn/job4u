import SearchBox from "../../components/SearchBox";
import { useEffect, useState } from "react";

import "./index.css";
import JobPageContent from "../../components/JobPageContent";
import { GetOfficeJobs } from "../../API/Services/GET";

function OfficePage() {
  const [job, setJob] = useState([]);

  // const [savedJobs, setSavedJob] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/savedjob")
  //     .then((res) => {
  //       setSavedJob(res.data);
  //       //setIdJob(res.data.idJob);
  //     })
  //     .catch((e) => {
  //       throw e;
  //     });
  // }, []);

  //Call API
  useEffect(() => {
    GetOfficeJobs()
      .then((res) => {
        setJob(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <div className="w-[100%] min-h-screen flex flex-col items-center ">
      <SearchBox />

      {/* Main Content   */}

      <JobPageContent jobdata={job} jobtype="Văn phòng" />
    </div>
  );
}

export default OfficePage;
