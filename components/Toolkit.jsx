const Toolkit = () => {
    const size = "max-xs:w-9 max-xs:h-9 w-14 h-14"
    return (
        <section className="px-6 rounded-3xl max-2xs:p-4">
            <section className="languages flex flex-wrap gap-4 2xs:gap-8 justify-center content-center items-center">
                <img src="assets/svg/tools/tool_html5.svg" className={size} alt="HTML5" />
                <img src="assets/svg/tools/tool_css3.svg" className={size} alt="CSS3" />
                <img src="assets/svg/tools/tool_tailwind.svg" className={size} alt="Tailwind CSS" />
                <img src="assets/svg/tools/tool_js.svg" className={size} alt="JavaScript" />
                <img src="assets/svg/tools/tool_ts.svg" className={size} alt="TypeScript" />
                <img src="assets/svg/tools/tool_mongodb.svg" className={size} alt="MongoDB" />
                <img src="assets/svg/tools/tool_postgres.svg" className={size} alt="PostgreSQL" />
                <img src="assets/svg/tools/tool_supabase.svg" className={size} alt="Supabase" />
                <img src="assets/svg/tools/tool_node.svg" className={size} alt="Node.js" />
                <img src="assets/svg/tools/tool_react.svg" className={size} alt="React" />
                <img src="assets/svg/tools/tool_nextjs.svg" className={size} alt="Next.js" />
                <img src="assets/svg/tools/tool_python.svg" className={size} alt="Python" />
                <img src="assets/svg/tools/tool_django.svg" className={size} alt="Django" />
                <img src="assets/svg/tools/tool_php.svg" className={size} alt="PHP" />
                <img src="assets/svg/tools/tool_wordpress.svg" className={size} alt="WordPress" />
                <img src="assets/svg/tools/tool_git.svg" className={size} alt="Git" />
                <img src="assets/svg/tools/tool_photoshop.svg" className={size} alt="Adobe Photoshop" />
                <img src="assets/svg/tools/tool_illustrator.svg" className={size} alt="Adobe Illustrator" />
                <img src="assets/svg/tools/tool_figma.svg" className={size} alt="Figma" />
            </section>
        </section>
    )
}

export default Toolkit