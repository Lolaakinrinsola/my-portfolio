
const Button = ({className,title,onClick,light}:any) => {
  return (
    <button className={`py-[10px] px-[20px] rounded-full  hover:bg-opacity-70 font-bold border-[1px] ${className} ${light?'bg-light dark:bg-dark  border-darkwhite dark:text-light text-dark':'bg-green text-black border-green'}`} onClick={onClick}>{title}</button>
  )
}

export default Button