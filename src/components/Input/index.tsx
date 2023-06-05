import { HTMLInputTypeAttribute } from "react"

interface inputProps {
    value: string
    label: string
    type?: HTMLInputTypeAttribute
    cvc?: boolean
    cardNumber?: boolean
    validateMonth?: boolean
}

const id = String(Math.floor(Math.random() * 100))

export function Input({ value, label, type, cardNumber, cvc, validateMonth }: inputProps) {
    if (cvc) {
        return (
            <div className="flex flex-col gap-2 ">
                <label htmlFor="form">{label}</label>
                <form id={id} name={id} className="flex  focus-within:ring-1 ring-white font-normal w-[25vw]  max-w-[166px] h-12 bg-bgForm gap-3 rounded-lg pl-[14px]">
                    <input type='number' pattern="\d\d\d" required className="bg-transparent  w-full outline-none font-normal text-base " placeholder={value}></input>
                </form>
            </div >
        )
    }

    if (validateMonth) {
        return (
            <div className="flex flex-col gap-2 ">
                <label htmlFor="form">{label}</label>
                <form id={id} name={id} className="flex  focus-within:ring-1 ring-white font-normal w-[25vw]  max-w-[166px] h-12 bg-bgForm gap-3 rounded-lg pl-[14px]">
                    <input type='text' pattern="\d\d/\d\d" required className="bg-transparent  w-full outline-none font-normal text-base " placeholder={value}></input>
                </form>
            </div >
        )
    }

    if (cardNumber) {
        return (
            <div className="flex flex-col gap-2 ">
                <label htmlFor="form">{label}</label>
                <form id={id} name={id} className="flex  focus-within:ring-1 ring-white font-normal w-[60vw]  max-w-[348px] h-12 bg-bgForm gap-3 rounded-lg pl-[14px]">
                    <input type='text' pattern="\d\d\d\d\s\d\d\d\d\s\d\d\d\d\s\d\d\d\d" required className="bg-transparent  w-full outline-none font-normal text-base " placeholder={value}></input>
                </form>
            </div >
        )
    }
    return (
        <div className="flex flex-col gap-2 ">
            <label htmlFor="form">{label}</label>
            <form id={id} name={id} className="flex  focus-within:ring-1 ring-white font-normal w-[80vw]  max-w-[348px] h-12 bg-bgForm gap-3 rounded-lg pl-[14px]">
                <input type={type} required className="bg-transparent  w-full outline-none font-normal text-base " placeholder={value}></input>
            </form>
        </div >
    )
}