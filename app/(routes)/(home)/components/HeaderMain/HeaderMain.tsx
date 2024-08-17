"use client"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import {
    Dialog,
    DialogHeader,
    DialogContent,
    DialogTitle,
    DialogTrigger
  } from "@/components/ui/dialog"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { dataHeaderMain } from "./HeaderMain.data"
import { FormAddElement } from "../FormAddElement/FormAddElement"
import { HeaderMainProps } from "./HeaderMain.types"

export function HeaderMain(props: HeaderMainProps){
    const { userId } = props
    const [typeElement, setTypeElement] = useState<"password" | "folder" | "">()
    const [openDialog, setOpenDialog] = useState(false)
    const [openDropdown, setOpenDropdown] = useState(false)
    const closeDialogAndDropdown = () => {
        setOpenDialog(false)
        setOpenDropdown(false)
    }

    return(
        <div className="flex justify-between items-center">
            <h1 className="text-xl md:text-3xl font-semibold">
                MainPage
            </h1>
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DropdownMenu open={openDropdown} onOpenChange={setOpenDropdown}>
                    <DropdownMenuTrigger asChild>
                        <Button>
                            Nueva <ChevronDown />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="p-0">
                        <DropdownMenuLabel>
                            <DialogTrigger asChild>
                                <div className="flex flex-col">
                                    {dataHeaderMain.map(({ icon: Icon, typeElement, text }) => (
                                        <Button 
                                            key={typeElement} 
                                            className="justify-start" 
                                            variant="ghost" 
                                            onClick={()=> setTypeElement(typeElement)}
                                        >
                                            <Icon className="w-4 h-4 mr-2"/>
                                            {text}
                                        </Button>
                                    ))}
                                </div>
                            </DialogTrigger>
                        </DropdownMenuLabel>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DialogContent className="sm:max-w-[825px]">
                    <DialogHeader>
                        <DialogTitle>Añadir nuevo Elemento</DialogTitle>
                        {typeElement === "password" && <FormAddElement userId={userId} closeDialog={closeDialogAndDropdown} />}
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}