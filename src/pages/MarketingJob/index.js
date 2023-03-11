import axios from "axios";
import { useEffect, useState } from "react";
import JobPageContent from "../../components/JobPageContent";
import SearchBox from "../../components/SearchBox";

function MarketingPage() {
  const [marketingJobs, setMarketingJobs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/marketingjob")
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
