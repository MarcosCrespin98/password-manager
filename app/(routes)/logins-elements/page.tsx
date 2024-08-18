import { DataTableItems } from "@/components/Shared/DataTableItems"
import { db } from "@/lib/db"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function LoginsElementsPage() {
    const session = await getServerSession()
    
    if(!session || !session?.user?.email) {
        return redirect("/")
    }

    const user = await db.user.findUnique({
        where: {
            email: session?.user?.email
        },
        include: {
            elements: {
                where: {
                    typeElement: "Inicio de Sesion"
                },
                orderBy: {
                    createdAt: "desc"
                }
            }
        }
    })

    if(!user || !user.elements) {
        redirect("/")
    }

    console.log(user ,' ñññ user ')


    return (
        <div>
            <h1 className="text-xl md:text-3xl font-semibold">Lista de Pagina de Logins</h1>
            <DataTableItems elements={user.elements} />
        </div>
    )
}