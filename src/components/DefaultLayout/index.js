//import Home from "../../pages/Home";
import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../Navbar";

function DefaultLayout({ children }) {
  return (
    <div class="w-full h-full">
      <Header />
      <Navbar />
      <div class="w-full h-[1000px] bg-white">{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
