import ProjectDetails from "@/components/project/ProjectDetails"
import { PrismaClient } from "@prisma/client"
import { notFound } from "next/navigation"
import { ArrowLeftIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

const ProjectPage = async ({ params }) => {
    const prisma = new PrismaClient()
    const project = await prisma.project.findFirst({
        where: {
            id: params.id,
        }
    })

    if (project.status === 404) {
        notFound()
    }

    return (
        <section className="w-full max-w-3xl max-xs:p-5 p-8 mx-auto">
            <Link href="/">
                <button className="block p-5 rounded-full bg-neutral mb-5">
                    <ArrowLeftIcon className="w-6 h-6" />
                </button>
            </Link>
            <ProjectDetails project={project} />
        </section>
    )
}

export default ProjectPage