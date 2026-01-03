import { PrismaClient } from "@prisma/client"
import Project from "@/components/project/Project"
import About from "@/components/About"
import Contact from "@/components/Contact"
import Separator from "@/components/ui/Separator"
import Toolkit from "@/components/Toolkit"
import Link from "next/link"
import ProjectsContainer from "@/components/project/ProjectsContainer"

export default async function Home() {

	const prisma = new PrismaClient()
	const projects = await prisma.project.findMany({
		where: { archived: false }
	  })
	// Sort projects by the `order` field in ascending order
	projects.sort((a, b) => a.order - b.order);

	return (
		<main className="mx-auto pt-24">
			<a href="#main" className="skip-to-main-content-link">Skip to main content</a>
			<section id="main" className="max-w-7xl flex flex-col gap-20 justify-between px-8 max-2xs:px-4 md:px-12 w-full max-w-8xl m-auto">
				<section className="flex flex-col items-center gap-5" id="about">
					<About />
					<Separator />
				</section>
				<section className="flex flex-col gap-16">
					<div className="flex flex-col gap-2">
						<h2>Recent Works</h2>
						<span className="font-nexa block text-center italic text-2xl">click for more info!</span>
					</div>
					<ProjectsContainer projects={projects} />
				</section>
				<section className="flex flex-col gap-16">
					<h2>Toolkit</h2>
					<Toolkit />
				</section>
			</section>
			<div className="flex flex-col gap-8 px-4 2xs:px-8 lg:px-16 mt-24 py-20 bg-neutral" id="contactmobile">
				<Separator />
				<Contact />
			</div>
		</main>
	);
}
