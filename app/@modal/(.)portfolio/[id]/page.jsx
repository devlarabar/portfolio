import Modal from "@/components/Modal"
import ProjectDetails from "@/components/project/ProjectDetails";
import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation"


const ProjectModal = async ({ params }) => {
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
        <Modal>
            <section className="w-full max-w-4xl mx-auto rounded-3xl bg-neutral px-6 pb-6 pt-4 max-2xs:p-5 overflow-auto">
                <ProjectDetails project={project} />
            </section>
        </Modal>
    )
}

export default ProjectModal