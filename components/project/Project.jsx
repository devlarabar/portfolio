import Image from 'next/image'
import Link from 'next/link'

const Project = ({ project }) => {

    const description = { __html: project.description }

    return (
        <div className="gradient-bg p-[2.5px] rounded-3xl">
            <section className="w-full rounded-3xl flex flex-col gap-8 items-center justify-start bg-neutral p-8 md:p-12">
                <h2>{project.name}</h2>
                <Image
                    src={project.image}
                    width={300}
                    height={200}
                    className="w-full rounded-xl"
                    alt={project.name}
                />
                <div className="flex gap-5 w-full justify-start">
                    {project.demo && <Link href={project.demo} className="w-1/2">
                        <button className="border-2 border-secondary bg-secondary text-base-100 font-semibold ease-in-out duration-200 hover:border-accent hover:bg-transparent hover:text-accent py-3 px-6 w-full" role="button">
                            Demo
                        </button>
                    </Link>}
                    {project.repository && <Link href={project.repository} className="w-1/2">
                        <button className="border-2 border-secondary text-secondary font-semibold ease-in-out duration-200 hover:border-accent hover:text-base-100 hover:bg-accent py-3 px-6 w-full" role="button">
                            GitHub
                        </button>
                    </Link>}
                </div>
                <div dangerouslySetInnerHTML={description} className="w-full flex flex-col gap-3"></div>
                <div className="flex flex-wrap gap-5 w-full">
                    {project.tools.split(', ').map((tool, index) => {
                        return (
                            <span
                                key={index}
                                className="block border-2 border-base-200 py-2 px-3">
                                {tool}
                            </span>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default Project