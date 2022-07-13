import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      <main className="content">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
