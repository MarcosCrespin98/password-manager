"use client"

import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import { Element } from "@prisma/client"
import { DropdownMenuLabel, DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import { Copy, MoreHorizontal, User } from "lucide-react"

export type ColumnProps = Element

export const columns: ColumnDef<ColumnProps>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "typeElement",
    header: "Type Element",
  },
  {
    accessorKey: "urlWebsite",
    header: "Url Website",
  },
  {
    accessorKey: "directory",
    header: "Directory",
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({row}) => {
      const password = row.original.password
      const username = row.original.username

      const onEditElement = () => {
        window.location.href=`/element/${row.original.id}`
      }

      const copyItemClipBoard = (item: string, name: string) => {
        navigator.clipboard.writeText(item)
        toast({
          title: `${name} copied to clipboard`,
        })
      }

      return (
        <div className="flex gap-2 justify-center items-center">
          {password && (
            <Copy className=" w-4 h-4 cursor-pointer" onClick={() => copyItemClipBoard(password, "Password")} />
          )}
          {username && (
            <User className=" w-4 h-4 cursor-pointer" onClick={() => copyItemClipBoard(username, "Username")} />
          )}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                className="h-8 w-8 p-0"
              >
                <p className="sr-only">
                  Abrir Menu
                </p>
                <MoreHorizontal className="h-4 w-4"/>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Opciones</DropdownMenuLabel>
              <DropdownMenuItem onClick={onEditElement}>Editar</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )
    }
  },
]