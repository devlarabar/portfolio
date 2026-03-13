import { getAllPosts } from "@/lib/blog"
import Link from "next/link"

export const metadata = {
    title: "Blog — Lara S.A.",
    description: "Thoughts on software, game dev, and everything in between.",
}

export default function BlogPage() {
    const posts = getAllPosts()

    return (
        <main className="mx-auto pt-24">
            <section className="max-w-3xl flex flex-col gap-12 px-8 max-2xs:px-4 md:px-12 w-full m-auto">
                <h1>Blog</h1>

                {posts.length === 0 ? (
                    <p className="text-base-content/60">No posts yet. Check back soon.</p>
                ) : (
                    <ul className="flex flex-col gap-8">
                        {posts.map((post) => (
                            <li key={post.slug}>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="group flex flex-col gap-2 no-underline"
                                >
                                    <h2 className="group-hover:text-accent transition-colors">
                                        {post.title}
                                    </h2>
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
                                    {post.description && (
                                        <p className="text-base-content/80">{post.description}</p>
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </main>
    )
}
