interface inputProps{
    value: string
    label: string
}

const id = String(Math.floor(Math.random() * 100))

export function Input ({value, label}:inputProps){
    return(
        <div className="flex flex-col gap-2 ">  
            <label htmlFor="form">{label}</label>
            <form id={id} name={id}  className="flex  focus-within:ring-1 ring-white font-normal w-[80vw]  max-w-[348px] h-12 bg-bgForm gap-3 rounded-lg pl-[14px]">
                <input className="bg-transparent  w-full outline-none font-normal text-base " placeholder={value}></input>
            </form>            
        </div >
    )
}