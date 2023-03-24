//import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { GetAllJobs } from "../../API/Services/GET";
import JobPageContent from "../../components/JobPageContent";
import SearchBox from "../../components/SearchBox";
import Context from "../../store/Context";

function AllJobs() {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(Context);
  console.log("state", state);
  const [allJob, setAllJob] = useState([]);
  useEffect(() => {
    GetAllJobs()
      .then((res) => setAllJob(res.data))
      .catch((e) => {
        throw e;
      });
  }, []);

  return (
    <div className="w-[100%] min-h-screen flex flex-col items-center">
      <SearchBox />
      <JobPageContent jobdata={allJob} jobtype="" />
    </div>
  );
}

export default AllJobs;
