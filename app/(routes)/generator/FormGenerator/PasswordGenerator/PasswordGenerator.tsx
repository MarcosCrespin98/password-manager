import { Checkbox } from "@/components/ui/checkbox";
import { PasswordGeneratorProps } from "./PasswordGenerator.types";

export function PasswordGenerator(props: PasswordGeneratorProps) {
    const { lengthPassword, isMayusSelected, isMinusSelected, isSpecialCharacters, isNumberSelected, setLengthPassword, setIsMayusSelected, setIsMinusSelected, setIsSpecialCharacters, setIsNumberSelected } = props;
    const handlerLengthPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLengthPassword(Number(e.target.value))
    }
    return (
        <div>
            <>
                <div className="w-full p-4 bg-slate-100 mt-6 rounded-md shadow-md flex gap-2 items-center">
                    <label className="block text-sm font-medium text-gray-700 min-w-32">
                        Longitud {lengthPassword}
                    </label>
                    <input 
                        type="range" 
                        min="8" 
                        max="50" 
                        className="w-full h-2 bg-gray-200 rounded-md appearance-none cursor-pointer"
                        value={lengthPassword}
                        onChange={handlerLengthPassword}
                    />
                </div>
                <div>
                    <div className="flex items-center space-x-2 my-4 bg-slate-100 rounded-md shadow-md p-4">
                        <Checkbox 
                            id="mayus" 
                            checked={isMayusSelected} 
                            onCheckedChange={() => setIsMayusSelected((prev)=> !prev)} 
                        />
                        <label 
                            htmlFor="mayus"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Mayusculas A-Z
                        </label>
                    </div>
                    <div className="flex items-center space-x-2 my-4 bg-slate-100 rounded-md shadow-md p-4">
                        <Checkbox 
                            id="minus" 
                            checked={isMinusSelected} 
                            onCheckedChange={() => setIsMinusSelected((prev)=> !prev)} 
                        />
                        <label 
                            htmlFor="minus"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Minusculas a-z
                        </label>
                    </div>
                    <div className="flex items-center space-x-2 my-4 bg-slate-100 rounded-md shadow-md p-4">
                        <Checkbox 
                            id="numbers" 
                            checked={isNumberSelected} 
                            onCheckedChange={() => setIsNumberSelected((prev)=> !prev)} 
                        />
                        <label 
                            htmlFor="numbers"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Numeros 0-9
                        </label>
                    </div>
                    <div className="flex items-center space-x-2 my-4 bg-slate-100 rounded-md shadow-md p-4">
                        <Checkbox 
                            id="special" 
                            checked={isSpecialCharacters} 
                            onCheckedChange={() => setIsSpecialCharacters((prev)=> !prev)} 
                        />
                        <label 
                            htmlFor="special"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Caracteres Especiales (!@#$%^&)
                        </label>
                    </div>
                </div>
            </>
        </div>
    )
}