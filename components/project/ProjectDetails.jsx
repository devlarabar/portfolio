import Link from 'next/link'

const ProjectDetails = ({ project }) => {

    const description = { __html: project.description }

    return (
        <section className="w-full rounded-3xl flex flex-col gap-3 items-center justify-start bg-neutral p-6 max-2xs:p-5 h-full">
            <Link href={`/portfolio/${project.id}`}>
                <img
                    src={project.image}
                    className="w-full rounded-xl"
                    alt={project.name}
                />
            </Link>
            <h3>{project.name}</h3>
            <div className="flex gap-3 w-full justify-start">
                {project.demo && <Link href={project.demo} className="w-full">
                    <button className="border-2 border-secondary bg-secondary text-base-100 font-semibold ease-in-out duration-200 hover:border-accent hover:bg-transparent hover:text-accent py-1 px-2 2xs:py-1 2xs:px-2 w-full" role="button">
                        View
                    </button>
                </Link>}
                {project.repository && <Link href={project.repository} className="w-full">
                    <button className="border-2 border-secondary text-secondary font-semibold ease-in-out duration-200 hover:border-accent hover:text-base-100 hover:bg-accent  py-1 px-2 2xs:py-1 2xs:px-2 w-full" role="button">
                        GitHub
                    </button>
                </Link>}
            </div>
            <div dangerouslySetInnerHTML={description} className="w-full flex flex-col gap-3 text-sm"></div>
            <div className="flex flex-wrap gap-3 2xs:gap-3 w-full">
                {project.tools.split(', ').map((tool, index) => {
                    return (
                        <span
                            key={index}
                            className="block border-2 border-base-200 text-sm py-1 px-2 2xs:text-sm 2xs:py-1 2xs:px-2 max-2xs:text-2xs">
                            {tool}
                        </span>
                    )
                })}
            </div>
        </section>
    )
}

export default ProjectDetails