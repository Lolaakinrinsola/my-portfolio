import { useNavigate } from "react-router-dom"

const NotFound = () => {
    const navigate=useNavigate()
  return (
    <div className=" bg-light dark:bg-dark py-[100px] pt-[200px] dark:text-white text-dark  font-bold text-center  grid gap-2 text-[40px] w-full"><p className="uppercase">404! Page Not Found</p> 
    <p className="text-[10px] underline cursor-pointer text-green hover:text-opacity-50" onClick={()=>navigate('/')}>Go to the Homepage</p></div>
  )
}

export default NotFound