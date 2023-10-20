import { PrismaClient } from "@prisma/client"
import Project from "@/components/project/Project"
import About from "@/components/About"
import Contact from "@/components/Contact"
import Separator from "@/components/ui/Separator"
import Toolkit from "@/components/Toolkit"
import Link from "next/link"

export default async function Home() {

	const prisma = new PrismaClient()
	const projects = await prisma.project.findMany()

	return (
		<main className="mx-auto pt-24">
			<a href="#main" className="skip-to-main-content-link">Skip to main content</a>
			<section id="main" className="max-w-7xl flex flex-col gap-20 justify-between px-8 max-2xs:px-4 md:px-12 w-full max-w-8xl m-auto">
				<section className="flex flex-col items-center gap-5" id="about">
					<About />
					<Separator />
				</section>
				<section className="flex flex-col gap-16">
					<h2>Recent Works</h2>
					<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-self-end mb-16 mx-auto" id="portfolio">
						{projects.map((project, index) => {
							return <Project project={project} key={index} />
						})}
					</section>
				</section>
				<section className="flex flex-col gap-16">
					<h2>Toolkit</h2>
					<Toolkit />
				</section>
			</section>
			<div className="flex flex-col gap-8 px-4 2xs:px-8 lg:px-16 mt-32 py-20 bg-neutral" id="contactmobile">
				<Separator />
				<Contact />
			</div>
		</main>
	);
}
