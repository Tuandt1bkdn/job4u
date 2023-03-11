import axios from "axios";
import { useEffect, useState } from "react";
import JobPageContent from "../../components/JobPageContent";
import SearchBox from "../../components/SearchBox";

function AllJobs() {
  const [allJob, setAllJob] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/alljob")
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
