import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Router from "../routes/Routers";
const Layout = () => {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
};

export default Layout;
