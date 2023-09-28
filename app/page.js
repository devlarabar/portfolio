import { PrismaClient } from "@prisma/client"
import Project from "@/components/project/Project"
import About from "@/components/About"
import Contact from "@/components/Contact"
import Separator from "@/components/ui/Separator"

export default async function Home() {

	const prisma = new PrismaClient()
	const projects = await prisma.project.findMany()

	return (
		<main>
			<a href="#main" class="skip-to-main-content-link">Skip to main content</a>
			<section name="main" className="flex flex-col lg-plus:flex-row gap-16 justify-between px-8 md:px-12 w-full max-w-[1400px] m-auto">
				<section className="flex flex-col items-center px-8 gap-5">
					<About />
					<Separator />
					<div className="hidden lg-plus:block">
						<Contact name="contact" />
					</div>
				</section>
				<section className="flex flex-col gap-16 justify-self-end mb-16" name="portfolio">
					{projects.map((project, index) => {
						return <Project project={project} key={index} />
					})}
				</section>
			</section>
			<div className="flex flex-col gap-8 lg-plus:hidden px-8 md:px-16" name="contactmobile">
				<Separator />
				<Contact />
			</div>
		</main>
	);
}
