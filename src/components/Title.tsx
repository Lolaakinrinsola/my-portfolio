
const Title = ({title}:any) => {
  return (
    <div className="relative py-[10px] px-[20px] border-[1px] dark:border-gray-800 border-borderLight w-fit font-bold z-20">
        <div className="bg-green absolute top-[-9%] left-[-5%] w-[12px] h-[8px]"></div>
        <div className="bg-green absolute top-[-9%] right-[-5%] w-[12px] h-[8px]"></div>
        <div className="bg-green absolute bottom-[-9%] left-[-5%] w-[12px] h-[8px]"></div>
        <div className="bg-green absolute bottom-[-9%] right-[-5%] w-[12px] h-[8px]"></div>
        <p className="text-dark dark:text-light">{title}</p>

        <p className="absolute text-[60px] md:text-[80px] lg:text-[100px] z-10 text-lightMuted opacity-5 whitespace-nowrap top-[-200%] left-[-200%]">{title}</p>
    </div>
  )
}

export default Title