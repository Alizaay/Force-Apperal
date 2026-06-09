import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-0">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
