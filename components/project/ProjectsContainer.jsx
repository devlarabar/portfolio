"use client"
import Project from "@/components/project/Project"
import { useState, useEffect } from "react"
import ProjectModal from "@/components/project/ProjectModal"
import ProjectDetails from "./ProjectDetails"
import { XMarkIcon } from "@heroicons/react/24/outline"

const ProjectsContainer = ({ projects }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedProject, setSelectedProject] = useState(null)

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
        setSelectedProject(null)
    }

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [isModalOpen])

    return (
        <section>
            {selectedProject &&
                <ProjectModal isOpen={isModalOpen} toggleModal={toggleModal} closeOnOutsideClick={true}>
                    <button
                        onClick={toggleModal}
                        className="bg-neutral mb-5"
                    >
                        <XMarkIcon className="w-6 h-6 hover:fill-secondary" />
                    </button>
                    <ProjectDetails project={selectedProject} />
                </ProjectModal>
            }
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-self-end mb-8 mx-auto" id="portfolio">
                {projects.map((project, index) => {
                    return project.id !== "cln2btgny0003ti1szh6t8k1k" && <Project project={project} key={index} setIsModalOpen={setIsModalOpen} setSelectedProject={setSelectedProject} />
                })}
            </section>
        </section>
    )
}

export default ProjectsContainer