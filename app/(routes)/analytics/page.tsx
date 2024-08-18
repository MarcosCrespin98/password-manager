import { countPasswords } from "@/lib/countPasswords"
import { db } from "@/lib/db"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { RepeatedPasswordsChart } from "./components/RepeatedPasswordsChart"
import { ViewsAnalyticsChart } from "./components/ViewsAnalyticsChart"
import { countPages } from "@/lib/countPages"

export default async function AnalyticsPage() {
  const session = await getServerSession()

  if(!session || !session?.user?.email){
    return redirect('/')
  }

  const user = await db.user.findUnique({
      where: {
        email: session?.user?.email
      },
      include: {
        elements: {
          orderBy: {
            createdAt: "desc",
          },
        },
      },
  })
  
  if(!user || !user?.elements){
      return redirect('/')
  }

  const { unique ,repeated } = countPasswords(user.elements)

  console.log(unique ,' ñññ unique ')
  console.log(repeated ,' ñññ repeated ')


  const { pageNameCounts, totalPages } = countPages(user.elements)

  return (
      <div>
          <div className="grid md:grid-cols-2 gap-5 mb-4">
              <div>
                  <RepeatedPasswordsChart unique={unique} repeated={repeated} />
              </div>
              <div>
                  <ViewsAnalyticsChart pageNameCounts={pageNameCounts} totalPages={totalPages} />
              </div>
          </div>
          <div>
                  Block
          </div>
      </div>
  )
}