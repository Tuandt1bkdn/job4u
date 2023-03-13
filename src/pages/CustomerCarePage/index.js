import { useEffect, useState } from "react";
import { GetCustomerCareJobs } from "../../API/Services/GET";
import JobPageContent from "../../components/JobPageContent";
import SearchBox from "../../components/SearchBox";

function CustomerCarePage() {
  const [ctmcareJob, setCtmCareJob] = useState();

  useEffect(() => {
    GetCustomerCareJobs()
      .then((res) => setCtmCareJob(res.data))
      .catch((e) => {
        throw e;
      });
  });
  return (
    <div className="w-[100%] min-h-screen flex flex-row justify-center">
      <SearchBox />
      <JobPageContent jobdata={ctmcareJob} jobtype="CSKH" />
    </div>
  );
}

export default CustomerCarePage;
