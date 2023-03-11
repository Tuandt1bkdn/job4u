//import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DefaultLayout from "./components/DefaultLayout";
import Feature1 from "./pages/Feature1";
import OfficePage from "./pages/Office";
import MarketingPage from "./pages/MarketingJob";
import CustomerCarePage from "./pages/CustomerCarePage";
import Hiring from "./pages/Hiring";
import AllJobs from "./pages/AllJob";
import SavedJob from "../src/components/SavedJobFixedCSS";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <DefaultLayout>
                <Home />
              </DefaultLayout>
            }
          />
          <Route
            path="/vieclam-marketing"
            element={
              <DefaultLayout>
                <SavedJob />
                <MarketingPage />
              </DefaultLayout>
            }
          />
          <Route
            path="/vieclam-cskh"
            element={
              <DefaultLayout>
                <SavedJob />
                <CustomerCarePage />
              </DefaultLayout>
            }
          />
          <Route
            path="/vieclam-vanphong"
            element={
              <DefaultLayout>
                <SavedJob />
                <OfficePage />
              </DefaultLayout>
            }
          />
          <Route
            path="/tuyendung"
            element={
              <DefaultLayout>
                <Hiring />
              </DefaultLayout>
            }
          />
          <Route
            path="/alljob"
            element={
              <DefaultLayout>
                <SavedJob />
                <AllJobs />
              </DefaultLayout>
            }
          />
          <Route path="/feature1" element={<Feature1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
