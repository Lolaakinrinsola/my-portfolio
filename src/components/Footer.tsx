import { useLocation, useNavigate } from "react-router-dom";
import useStore from "../store/useStore";

const Footer = () => {
    const navigate=useNavigate()
    const location = useLocation();
    const { space } = useStore();

    const contact=['ololadeakinrinsola@gmail.com','Ontario, Canada']
    const navLinks=[{name:'Home',link:'/'},{name:'Services',link:'/service'},{name:'Projects',link:'/project'},{name:'About Me',link:'/about'}]
  return (
    <>
    <div className={`${space} py-[70px] gap-[30px]  m-auto grid`}>
        <div className="border-b-[1px] dark:border-b-borderDark pb-[20px]">
            <p className="text-[40px] text-dark dark:text-light font-bold">Let's <span className="text-green">Connect </span> there</p>
        </div>
        <div className="grid gap-[40px] md:grid-cols-[2fr_1fr_1fr] p-3">
            <div className="grid gap-[20px]">
            <div className="flex items-center gap-2 font-bold ">
        <div className="flex items-center justify-center bg-green rounded-full  w-[30px] h-[30px] font-bold text-light"><p>L</p></div>
<p className='text-[25px] text-dark dark:text-light'>LOLADE</p>
        </div>
        <p className="text-dark dark:text-lightdarkwhite text-[15px]">
            I turn designs into interactive, pixel-perfect masterpieces—mostly
            on purpose! With 4+ years of experience wrangling React, Typescript,
            and tailwind, I create user-friendly interfaces that work like a
            charm .
          </p>
            </div>
            <div className="grid gap-[20px] h-fit font-bold">
                <p className="text-green text-[20px]">Navigation</p>
            {navLinks.map((val,index)=>(
                <p className={`dark:text-darkwhite text-dark cursor-pointer text-[15px] ${location.pathname === val.link && "text-green"}`} onClick={()=>navigate(val.link)} key={index}>{val.name}</p>
            ))}
            </div>
            <div className="grid gap-[20px] h-fit font-bold">
                <p className="text-green text-[20px]">Contact</p>
            {contact.map((val,index)=>(
                <p className="dark:text-darkwhite text-dark text-[15px]" key={index} >{val}</p>
            ))}
            </div>
        </div>
    </div>
        <div className={`${space}  text-center md:text-left gap-2 text:light  dark:text-light  text-[18px] !bg-green w-screen py-3 grid md:flex md:justify-between`}>
            
            <p >Copyright ©2024 Ololade. All Rights Reserved.</p>
            <p >User Terms & Conditions | Privacy Policy</p>

            
        </div>
    </>
  )
}

export default Footer