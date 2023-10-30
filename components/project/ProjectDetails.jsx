import Link from 'next/link'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import SubtleSeparator from "@/components/ui/SubtleSeparator"

const ProjectDetails = ({ project }) => {

    const images = project.images.split(', ')
    const description = { __html: project.description }
    const svgSize = "w-6 h-6"

    return (
        <section className="flex flex-col gap-3 items-center justify-start">
            <header className="w-full flex flex-col xs:flex-row gap-5 justify-start">
                <h3>{project.name}</h3>
                <div className="flex gap-4 justify-start">
                    {project.demo && <Link href={project.demo} target="_blank" className="flex gap-2 items-center">
                        <ArrowTopRightOnSquareIcon className={`${svgSize}`} />
                        View
                    </Link>}
                    {project.repository && <Link href={project.repository} target="_blank" className="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={`${svgSize}`}>
                            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" className="fill-current hover:fill-accent" />
                        </svg>
                        GitHub
                    </Link>}
                </div>
            </header>
            <SubtleSeparator />

            <div dangerouslySetInnerHTML={description} className="project-description w-full flex flex-col gap-3 text-sm mt-2"></div>
            <div className="flex flex-wrap gap-3 2xs:gap-3 w-full mt-2">
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
            <h3 className="mt-5">Take a look!</h3>
            <section className="w-full grid gap-12">
                {images.map((image, index) => {
                    return <img src={`/assets/images${image}`} key={index} class="project-preview-image" />
                })}
            </section>
        </section>
    )
}

export default ProjectDetails