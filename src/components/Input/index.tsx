interface inputProps{
    value: string
    label: string
}

export function Input ({value, label}:inputProps){
    return(
        <>  
            <label htmlFor="form">{label}</label>
            <form id="form" name="form" action="" className="flex font-normal w-[70vw]  max-w-[348px] h-12 bg-bgForm gap-3 rounded-lg pl-[14px]">
                <input autoFocus autoComplete="email" className="bg-transparent w-full outline-none font-normal text-base " placeholder={value}></input>
            </form>            
        </>
    )
}