//import Home from "../../pages/Home";
import Header from "../Header";

function DefaultLayout({ children }) {
  return (
    <div class="w-full h-full">
      <Header />
      <div class="w-full h-30 bg-red-200">{children}</div>
    </div>
  );
}

export default DefaultLayout;
