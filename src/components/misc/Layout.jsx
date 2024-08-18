import Header from "./../header/Header";
import Navbar from "./../misc/Navbar";
import Footer from "./../misc/Footer";
import Router from "../../routes/Routers";

const Layout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Router />
      <Footer />
    </>
  );
};

export default Layout;
