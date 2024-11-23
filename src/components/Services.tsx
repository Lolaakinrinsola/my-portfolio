
const Services = ({service}:any) => {
  return (
    <>
    {service.map((val:any,index:any)=>(
    <div className="rounded-md h-[200px]  dark:bg-lightDark grid gap-[15px] py-[20px] border-[1px]  dark:border-0 border-borderLight bg-lightBackground" key={index}>
                <div className="border-l-[4px] border-l-green rounded-l-md h-[55px] px-[15px] text-dark dark:text-light text-[30px]">
                    <div className="h-[60px] w-[60px] grid justify-center bg-white dark:bg-[#2A2A2A] items-center rounded-full">
                    {val.icon}
                    </div>
                    </div>
                    <div className="px-[15px]">

                    <p className="text-dark dark:text-light text-[20px] font-bold">{val.name}</p>
                    <p className="text-lightDark dark:text-darkwhite text-[15px]">{val.descrp}</p>
                    </div>

            </div>

    ))}
    </>
  )
}

export default Services