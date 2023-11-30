const Toolkit = () => {
    const size = "max-xs:w-9 max-xs:h-9 w-14 h-14"
    return (
        <section className="px-6 rounded-3xl max-2xs:p-4">
            <section className="languages flex flex-wrap gap-4 2xs:gap-8 justify-center content-center items-center">
                <img src="assets/svg/tools/tool_html5.svg" className={size} />
                <img src="assets/svg/tools/tool_css3.svg" className={size} />
                <img src="assets/svg/tools/tool_tailwind.svg" className={size} />
                <img src="assets/svg/tools/tool_js.svg" className={size} />
                <img src="assets/svg/tools/tool_ts.svg" className={size} />
                <img src="assets/svg/tools/tool_mongodb.svg" className={size} />
                <img src="assets/svg/tools/tool_node.svg" className={size} />
                <img src="assets/svg/tools/tool_react.svg" className={size} />
                <img src="assets/svg/tools/tool_nextjs.svg" className={size} />
                <img src="assets/svg/tools/tool_python.svg" className={size} />
                <img src="assets/svg/tools/tool_django.svg" className={size} />
                <img src="assets/svg/tools/tool_git.svg" className={size} />
                <img src="assets/svg/tools/tool_photoshop.svg" className={size} />
                <img src="assets/svg/tools/tool_illustrator.svg" className={size} />
                <img src="assets/svg/tools/tool_figma.svg" className={size} />
            </section>
        </section>
    )
}

export default Toolkit