import Link from 'next/link'
const Project = ({ project, setIsModalOpen, setSelectedProject }) => {
    const onClick = () => {
        setSelectedProject(project)
        setIsModalOpen(true)
    }
    return (
        <section className="w-full rounded-3xl flex flex-col gap-3 items-center justify-start bg-neutral">
            <button
                onClick={onClick}
                className="w-full rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
                aria-label={`View details for ${project.name}`}
            >
                <img
                    src={`/assets/images${project.image}`}
                    className="w-full rounded-xl"
                    alt={project.name}
                />
            </button>
        </section>
    )
}
export default Project