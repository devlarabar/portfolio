import ProjectDetails from "@/components/project/ProjectDetails"
import { PrismaClient } from "@prisma/client"
import { notFound } from "next/navigation"


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
        <ProjectDetails project={project} />
    )
}

export default ProjectPage