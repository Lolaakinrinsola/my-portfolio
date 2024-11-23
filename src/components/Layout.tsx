import { useLayoutEffect, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ContactMe from "./ContactMe";
import FlowingServices from "./FlowingServices";
import Footer from "./Footer";
import Navbar from "./Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

const Layout = ({ children }: any) => {
  const locationN = useLocation();

  const Wrapper = ({ children }: any) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a default animation duration
  }, []);
  return (
    <Wrapper className='dark:bg-dark bg-light'>
      <div className="dark:bg-dark bg-light">
      
        <Navbar />
      {children}
      {locationN.pathname==='/contact'?
      <ContactMe />
      :
      <div data-aos="zoom-in">
        <ContactMe />
      </div>
      }
      <FlowingServices />
      <Footer />

      </div>
    </Wrapper>
  );
};

export default Layout;
