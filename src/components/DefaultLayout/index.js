//import Home from "../../pages/Home";
import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../Navbar";
//import SavedJob from "../SavedJobFixedCSS";
import { useEffect } from "react";
import { gapi } from "gapi-script";

const clientId =
  "104319102501-h53nqs7514f4mh3sq3bhrr8fb7ahobsn.apps.googleusercontent.com";

function DefaultLayout({ children, savedtable }) {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });
  return (
    <div className="w-full min-h-full flex flex-col">
      {/* <!-- Header -->  */}
      <Header />
      {/* <!-- Narbar -->  */}
      <Navbar />
      <div>{savedtable}</div>
      <div className="w-full min-h-screen bg-white flex flex-row justify-center">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
