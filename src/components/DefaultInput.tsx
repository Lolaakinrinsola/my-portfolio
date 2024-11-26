const DefaultInput = ({name,type,value,onChange,error,placeHolder,label,rows,maxLength}:any) => {
    const isTextArea = type === "textarea";
    return (
      <div className="grid">
        <label htmlFor={name} className={`text-lightText dark:text-light font-bold text-[12px] ${error&&'text-[#CD2C2C]'} peer-invalid:text-[#CD2C2C]`}>
          {label}*
        </label>
        {isTextArea?(
            <textarea id={name}
            className={`peer border-[1px] rounded-[8px] dark:bg-lightDark py-[18px] px-[24px] focus:border-primary focus:outline-none invalid:border-[#CD2C2C] dark:border-borderDark  invalid:border-[2px] ${error&&'border-[#CD2C2C] border-[2px] '} border-borderLight bg-lightBackground dark:text-darkwhite text-dark`}
            value={value}
            onChange={onChange}
            placeholder={placeHolder}
            name={name}
            rows={rows || 2} // Default to 4 rows if not provided
            maxLength={maxLength || 250}/>
        ):(

        <input
          type={type}
          id={name}
          className={`peer border-[1px] rounded-[8px] dark:bg-lightDark py-[18px] px-[24px] focus:border-primary focus:outline-none invalid:border-[#CD2C2C] dark:border-borderDark  invalid:border-[2px] ${error&&'border-[#CD2C2C] border-[2px]'} border-borderLight bg-lightBackground dark:text-darkwhite text-dark`}
          value={value}
          onChange={onChange}
          placeholder={placeHolder}
          name={name}
        />
        )}
        {error&&<p className="text-[10px] text-[#CD2C2C]">{error}</p>}
      </div>
    );
  };
  
  export default DefaultInput;
  