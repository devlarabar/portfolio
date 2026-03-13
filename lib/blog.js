import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

const postsDirectory = path.join(process.cwd(), "content/blog")

export function getAllPosts() {
    if (!fs.existsSync(postsDirectory)) return []

    const fileNames = fs.readdirSync(postsDirectory)

    const posts = fileNames
        .filter((name) => name.endsWith(".md"))
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, "")
            const fullPath = path.join(postsDirectory, fileName)
            const fileContents = fs.readFileSync(fullPath, "utf8")
            const { data } = matter(fileContents)

            return {
                slug,
                title: data.title,
                date: data.date,
                description: data.description || "",
                thumbnail: data.thumbnail || null,
            }
        })

    return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
}

export async function getPostBySlug(slug) {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    const processed = await remark().use(html).process(content)
    const contentHtml = processed.toString()

    return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description || "",
        thumbnail: data.thumbnail || null,
        contentHtml,
    }
}
