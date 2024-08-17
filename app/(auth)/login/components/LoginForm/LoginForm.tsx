"use client"
 
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
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
import { useRouter } from "next/navigation" 
import { signIn } from "next-auth/react"
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
})

export function LoginForm(){
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })
    
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const response = await signIn("credentials", {
            email: values.email,
            password: values.password,
            redirect: false,
        })

        if(response?.status === 200){
            toast({
                title: "Login realizado con exito",
            })
            router.push("/")
        }else{
            toast({
                title: "Error al loguear",
                variant: "destructive"
            })
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full mt-5 space-y-3 text-black">
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                    <Input placeholder="email@email.com" {...field} />
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
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                    <Input placeholder="password" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            <Button type="submit" className="w-full">Submit</Button>
            </form>
        </Form>
    )
}