"use client"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import{ Menu } from "lucide-react";
import { SidebarRoutes } from "../SidebarRoutes";
import { Button } from "@/components/ui/button";

export function SidebarMobile(){
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button>
                    <Menu size={24}/>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-green-800 text-white">
                <SheetHeader className="text-left mb-5">
                <SheetTitle className="text-white">PasswordManager</SheetTitle>
                <SheetDescription className="text-slate-100">
                    Create and manage your passwords
                </SheetDescription>
                </SheetHeader>
                <SidebarRoutes/>
            </SheetContent>
        </Sheet>
    )
}
