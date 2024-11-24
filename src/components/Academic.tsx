import React from 'react'

const Academic = () => {
    const data=[{title:'Education',icon:'',val:[{name:'Algonquin College',desp:'PGC in Cloud Development',time:'2025-2026'},{name:'Caleb University',desp:'BS.c in Computer Science',time:'2019-2022'}]},{title:'Work Experience',icon:'',val:[{name:'Build Microfinace Bank',desp:'Frontend Developer',time:'2022-2024'},{name:'Jamub Group',desp:'Contract Frontend Developer',time:'2024-2024'},{name:'Keystone Bank',desp:'Frontend Developer',time:'2020-2022'}]}]
  return (
    <>
    {data.map((val,index)=>(

    <div className="border-[1px] border-borderLight bg-lightBackground dark:border-borderDark dark:bg-lightDark p-3 rounded-md grid relative" key={index}>
            <div className="w-1 h-8 rounded-l-md top-[20px] bg-green left-[-5px] absolute"></div>
            <div className="border-b-[1px] border-borderLight   dark:border-borderDark py-3 flex gap-2 h-fit">
              <p className="text-green text-[20px]">{val.icon}</p>
              <p className="text-[20px] font-bold text-lightText dark:text-white">
                {val.title}
              </p>
            </div>
            {val.val.map((item,ind)=>(

            <div className="pt-3 grid gap-[20px] h-fit" key={ind}>
              <div className="flex items-center justify-between gap-[30px] ">
                <div className="grid">
                  <p className="text-lightText text-[20px] dark:text-white">
                    {item.name}
                  </p>
                  <p className="text-lightMuted dark:text-lightdarkwhite text-[15px]">
                    {item.desp}
                  </p>
                </div>
                <div className="rounded-full py-[5px] px-[10px] bg-green text-dark whitespace-nowrap">
                  {item.time}
                </div>
              </div>
            </div>
            ))}
          </div>
    ))}
    </>
  )
}

export default Academic