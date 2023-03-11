//import Home from "../../pages/Home";
import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../Navbar";
//import SavedJob from "../SavedJobFixedCSS";

function DefaultLayout({ children, savedtable }) {
  return (
    <div className="w-full min-h-full flex flex-col">
      {/* <!-- Header -->  */}
      <Header />
      {/* <!-- Narbar -->  */}
      <Navbar />
      <>{savedtable}</>
      <div className="w-full min-h-screen bg-white flex flex-row justify-center">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
