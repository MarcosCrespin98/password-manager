"use client"

import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Copy, Shuffle } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@radix-ui/react-label";
import { copyClipBoard } from "@/lib/copyClipBoard";
import { generatePassword } from "@/lib/generatePassword";
import { PasswordGenerator } from "./PasswordGenerator";
import { generateCustomPassword } from "@/lib/generateCustomPassword";

export function FormGenerator() {
    const [selectedValue, setSelectedValue] = useState<'password' | 'user' | string>('password')
    const [itemValueInput, setItemValueInput] = useState('')
    const [userTypeSelected, setUserTypeSelected] = useState('username')

    const [lengthPassword, setLengthPassword] = useState(11)
    const [isMayusSelected, setIsMayusSelected] = useState(true)
    const [isMinusSelected, setIsMinusSelected] = useState(true)
    const [isNumberSelected, setIsNumberSelected] = useState(true)
    const [isSpecialCharacters, setIsSpecialCharacters] = useState(true)

    useEffect(() => {
        if(selectedValue === 'password'){
            const newPassword = generateCustomPassword(lengthPassword, isMayusSelected, isMinusSelected, isNumberSelected, isSpecialCharacters)
            setItemValueInput(newPassword)
        }    
    }, [lengthPassword, selectedValue, isMayusSelected, isMinusSelected, isNumberSelected, isSpecialCharacters])


    const handleShuffleClick = () => {
        if(selectedValue === 'password'){
            const password = generateCustomPassword(lengthPassword, isMayusSelected, isMinusSelected, isNumberSelected, isSpecialCharacters)
            setItemValueInput(password)
        }
    }

    return (
        <div className="mt-5 max-w-2xl">
            <div className="relative w-full">
                <Input 
                    placeholder="input..." 
                    value={itemValueInput} 
                    //onChange={()=> setItemValueInput()} 
                />
                <Copy 
                    className="absolute right-12 top-2 cursor-pointer h-5 w-5" 
                    onClick={()=> copyClipBoard(itemValueInput)} 
                />
                <Shuffle 
                    className="absolute right-2 top-2 cursor-pointer h-5 w-5"
                    onClick={handleShuffleClick}
                />
            </div>
            <PasswordGenerator
                lengthPassword={lengthPassword}
                setLengthPassword={setLengthPassword}
                isMayusSelected={isMayusSelected}
                setIsMayusSelected={setIsMayusSelected}
                isMinusSelected={isMinusSelected}
                setIsMinusSelected={setIsMinusSelected}
                isNumberSelected={isNumberSelected}
                setIsNumberSelected={setIsNumberSelected}
                isSpecialCharacters={isSpecialCharacters}
                setIsSpecialCharacters={setIsSpecialCharacters}
            />
        </div>
    )
}