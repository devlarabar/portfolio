import { getAllPosts, getPostBySlug } from "@/lib/blog"
import { notFound } from "next/navigation"
import Link from "next/link"

export async function generateStaticParams() {
    const posts = getAllPosts()
    return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    const posts = getAllPosts()
    const match = posts.find((p) => p.slug === slug)
    if (!match) return {}
    return {
        title: `${match.title} — Lara S.A.`,
        description: match.description,
    }
}

export default async function PostPage({ params }) {
    const { slug } = await params
    let post

    try {
        post = await getPostBySlug(slug)
    } catch {
        notFound()
    }

    return (
        <main className="mx-auto pt-24">
            <article className="max-w-3xl flex flex-col gap-8 px-8 max-2xs:px-4 md:px-12 w-full m-auto">
                <Link href="/blog" className="text-sm text-base-content/60 hover:text-accent">
                    ← Back to blog
                </Link>

                <header className="flex flex-col gap-3">
                    <h1>{post.title}</h1>
                    <time
                        dateTime={post.date}
                        className="text-sm text-base-content/60"
                    >
                        {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </time>
                </header>

                {post.thumbnail && (
                    <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="w-full rounded-lg object-cover"
                    />
                )}

                <div
                    className="prose prose-base max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.contentHtml }}
                />
            </article>
        </main>
    )
}
