import { useEffect, useState } from "react";
import { GetMarketingJobs } from "../../API/Services/GET";
import JobPageContent from "../../components/JobPageContent";
import SearchBox from "../../components/SearchBox";

function MarketingPage() {
  const [marketingJobs, setMarketingJobs] = useState([]);

  useEffect(() => {
    GetMarketingJobs()
      .then((res) => setMarketingJobs(res.data))
      .catch((e) => {
        throw e;
      });
  }, []);

  return (
    <div className="w-[100%] min-h-screen flex flex-col items-center">
      <SearchBox />
      <JobPageContent jobdata={marketingJobs} jobtype="Marketing" />
    </div>
  );
}

export default MarketingPage;
