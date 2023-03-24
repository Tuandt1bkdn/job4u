//import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DefaultLayout from "./components/DefaultLayout";
import Feature1 from "./pages/Feature1";
import OfficePage from "./pages/Office";
import MarketingPage from "./pages/MarketingJob";
//import CustomerCarePage from "./pages/CustomerCarePage";
import Hiring from "./pages/Hiring";
import AllJobs from "./pages/AllJob";
import SavedJob from "../src/components/SavedJobFixedCSS";
import Feature2 from "./pages/Feature2";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Context from "./store/Context";
import { useContext } from "react";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(Context);
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
            path="/login"
            element={
              <DefaultLayout>
                <Login />
              </DefaultLayout>
            }
          />
          <Route
            path="/signup"
            element={
              <DefaultLayout>
                <Signup />
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
          <Route path="/feature2" element={<Feature2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
