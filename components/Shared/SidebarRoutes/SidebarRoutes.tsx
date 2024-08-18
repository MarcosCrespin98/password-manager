"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {BarChart, DoorClosed, House, RectangleEllipsis} from "lucide-react"
import Link from "next/link"
import { SingleItem } from "../SingleItem"
import { dataSidebarElements, dataSidebarConfiguration } from "./SidebarRoutes.data"
import { sign } from "crypto"
import { signOut } from "next-auth/react"


export function SidebarRoutes() {
    return (
        <div>

            <SingleItem
                href="/"
                icon={House}
                label="Homepage"
            />

            <SingleItem
                href="/analytics"
                icon={BarChart}
                label="Analytics"
            />

            <SingleItem
                href="/generator"
                icon={RectangleEllipsis}
                label="Generator"
            />

            {dataSidebarElements.map(({title, icon: Icon, children}) => (
                <Accordion 
                    type="single" 
                    collapsible 
                    key={title} 
                    className="w-full px-2"
                >
                    <AccordionItem value="item-1" className="border-b-0">
                        <AccordionTrigger>
                            <div className="flex gap-2 items-center">
                                <div className="bg-green-100/20 p-2 rounded-md">
                                    <Icon size={20} />
                                </div>
                                {title}
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            {children.map(({title, href, icon: Icon}) => (
                                <div 
                                key={title} 
                                className="flex items-center justify-between mt-2 
                                hover:bg-green-100/20 duration-300 transition-all rounded-md pr-1"
                            >
                                <Link 
                                    href={href}
                                    className="px-6 py-2 flex gap-2 items-center"
                                >
                                    <Icon size={20} />
                                    {title}
                                </Link>
                            </div>
                            ))}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            ))}

            {dataSidebarConfiguration.map(({title, icon: Icon, children}) => (
                <Accordion 
                type="single" 
                collapsible 
                key={title} 
                className="w-full px-2"
            >
                <AccordionItem value="item-1" className="border-b-0">
                    <AccordionTrigger>
                        <div className="flex gap-2 items-center">
                            <div className="bg-green-100/20 p-2 rounded-md">
                                <Icon size={20} />
                            </div>
                            {title}
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        {children.map(({title, href, icon: Icon, premium}) => (
                            <div 
                                key={title} 
                                className="flex items-center justify-between mt-2 
                                hover:bg-green-100/20 duration-300 transition-all rounded-md pr-1"
                            >
                                <Link 
                                    href={href}
                                    className="px-6 py-2 flex gap-2 items-center"
                                >
                                    <Icon size={20} />
                                    {title}
                                </Link>
                                {premium && (
                                    <span className="flex gap-2 test-xs px-2 py-1 bg-green-400 rounded-md">
                                        Premium
                                    </span>
                                )}
                            </div>
                        ))}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            ))}

            <SingleItem
                href="#"
                label="Close Session"
                icon={DoorClosed}
                onClick={() => signOut()} 
            />

        </div>
    )
}