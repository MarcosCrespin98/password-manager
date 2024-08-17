"use client"
import { FormEditElementProps } from "./FormEditElement.types";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { z } from "zod"
import { copyClipBoard } from "@/lib/copyClipBoard"
import { generatePassword } from "@/lib/generatePassword"
import axios from "axios"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Copy, Earth, Eye, Shuffle } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import { formSchema } from "./FormEditElement.form";

export function FormEditElement(props: FormEditElementProps) {
    const { dataElement } = props
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            typeElement: dataElement?.typeElement || "",
            isFavourite: dataElement?.isFavourite,
            name: dataElement?.name || "",
            directory: dataElement?.directory || "",
            username: dataElement?.username || "",
            password: dataElement?.password || "",
            urlWebsite: dataElement?.urlWebsite || "",
            notes: dataElement?.notes || "",
            userId: dataElement?.userId || "",
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try{
            await axios.patch(`/api/items/${dataElement.id}`, values)
            toast({
                title: "Item actualizado",
            })
            router.push('/')
        }catch(e){
            toast({
                title: "Algo no es correcto",
                variant: "destructive",
            })
        }
    }

    const generateRandomPassword = () => {
        const password = generatePassword()
        form.setValue("password", password)
    }
    const updateUrl = () => {
        form.setValue("urlWebsite", window.location.href)
    }

    return (
        <Form {...form}>
                <form 
                    onSubmit={form.handleSubmit(onSubmit)} 
                    className=" md:grid-cols-2 gap-y-2 space-x-4 grid"
                >
                    <div className="hidden"/>
                    <FormField
                        control={form.control}
                        name="typeElement"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Que tipo de elemento necesitas?</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Selecciona un directorio para tu contraseña"/>
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="Inicio de Sesion">
                                        Inicio de Sesion
                                    </SelectItem>
                                    <SelectItem value="Tarjeta">
                                        Tarjeta
                                    </SelectItem>
                                    <SelectItem value="Identidad">
                                        Identidad
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="isFavourite"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Quieres seleccionar tu contraseña como favorita?</FormLabel>
                                <div className="flex flex-row items-start space-x-3 space-y-0 p-3 mt-0">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel>Marcar como favorito</FormLabel>
                                    </div>
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nombre</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="directory"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Directorio</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Elige el directorio"/>
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="Social">
                                        Social
                                    </SelectItem>
                                    <SelectItem value="Shopping">
                                        Shopping
                                    </SelectItem>
                                    <SelectItem value="Arts">
                                        Arts
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Usuario</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input {...field} />
                                        <Copy 
                                            className="absolute right-4 top-3 cursor-pointer" 
                                            size={18}
                                            onClick={() => copyClipBoard(field.value)}
                                        />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="urlWebsite"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Url website</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input {...field} />
                                        <Earth 
                                            className="absolute top-3 right-2 cursor-pointer"
                                            size={18}
                                            onClick={updateUrl}
                                        />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="flex justify-between">
                                    Contraseña
                                    <Shuffle 
                                        className="cursor-pointer" 
                                        size={15} 
                                        onClick={generateRandomPassword} 
                                    />
                                </FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input {...field} type={showPassword ? "text" : "password"} />
                                        <Eye 
                                            className="absolute top-3 right-10 cursor-pointer"
                                            size={18}
                                            onClick={()=> setShowPassword(!showPassword)}
                                        />
                                        <Copy 
                                            className="absolute top-3 right-2 cursor-pointer"
                                            size={18}
                                            onClick={() => copyClipBoard(field.value)}
                                        />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="notes"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Notas</FormLabel>
                                <FormControl>
                                    <Textarea {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div />
                    <Button type="submit">Guardar</Button>
                </form>
            </Form>
    )
}