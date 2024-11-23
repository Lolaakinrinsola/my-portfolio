import {useState} from "react";
import { RiSunLine } from "react-icons/ri";
import { IoMoonSharp } from "react-icons/io5";
import useStore from "../store/useStore";
import Button from "./Button";
import { useLocation, useNavigate } from "react-router-dom";
import Backdrop from "./Backdrop";
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenuDropdown() {
    setIsOpen(!isOpen);
  }
  const { isDarkMode, toggleTheme, space } = useStore();
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/service" },
    { name: "Projects", link: "/project" },
    { name: "About Me", link: "/about" },
  ];
  return (
    <nav className={`${space} py-[20px] flex justify-between items-center`}>
      <div className="flex items-center gap-2 font-bold " onClick={()=>navigate('/')}>
        <div className="flex items-center justify-center bg-green rounded-full  w-[30px] h-[30px] font-bold text-light">
          <p>L</p>
        </div>
        <p className="text-[25px] text-dark dark:text-light">LOLADE</p>
      </div>
      <div className="md:flex gap-[20px] font-bold hidden text-dark dark:text-light text-[15px] ">
        {navLinks.map((val, index) => (
          <p
          key={index}
          className={`cursor-pointer hover:text-green hover:opacity-50 ${
            location.pathname === val.link && "text-green"
          }`}
          onClick={() => navigate(val.link)}
        >
          {val.name}
        </p>
        ))}
      </div>
      <div className="flex gap-[20px] items-center">
        <div
          className="text-[25px] cursor-pointer text-dark dark:text-light w-[40px] h-[40px] rounded-full border-[1px] dark:border-gray-700 border-gray-200 bg-lightBackground dark:bg-lightDark  grid justify-center items-center"
          onClick={toggleTheme}
        >
          {isDarkMode ? <RiSunLine /> : <IoMoonSharp />}
        </div>
        <Button title="Let talk" className="hidden md:block" onClick={()=>navigate('/contact')} />
        <div className="md:hidden cursor-pointer" onClick={toggleMenuDropdown}>
          <div
            className={`w-6 h-0.5 bg-dark dark:bg-light transition-transform duration-300 ${
              isOpen ? "translate-y-1.5 rotate-45" : "mb-1"
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-dark dark:bg-light transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "mb-1"
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-dark dark:bg-light transition-transform duration-300 ${
              isOpen ? "-translate-y-1.5 -rotate-45" : ""
            }`}
          ></div>
{isOpen&&<Backdrop onClose={toggleMenuDropdown} className='top-[0px] left-0 justify-end'>
          <div className="w-[60%] bg-light text-dark dark:text-light dark:bg-dark h-[100vh] p-[20px] absolute right-0 z-40">
            <div className="h-fit grid gap-[20px] p-2 " onClick={toggleMenuDropdown}>
<div className="relative grid justify-items-end">
<div
            className={`w-6 h-0.5 bg-dark dark:bg-light transition-transform duration-300 ${
              isOpen ? "translate-y-1.5 rotate-45" : "mb-1"
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-dark dark:bg-light transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "mb-1"
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-dark dark:bg-light transition-transform duration-300 ${
              isOpen ? "-translate-y-1.5 -rotate-45" : ""
            }`}
          ></div>
</div>
            </div>

            <div className="grid gap-[20px] font-bold text-dark dark:text-light text-[20px] text-center mt-[50px]">
        {navLinks.map((val, index) => (
          <p
          key={index}
          className={`cursor-pointer hover:text-green hover:opacity-50 ${
            location.pathname === val.link && "text-green"
          }`}
          onClick={() => navigate(val.link)}
        >
          {val.name}
        </p>
        ))}
        <p className={`cursor-pointer hover:text-green hover:opacity-50 ${
            location.pathname === '/contact' && "text-green"
          }`} onClick={() => navigate('/contact')}>Contact </p>
      </div>
          </div>
          </Backdrop>}
          
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
