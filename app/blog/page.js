import { getAllPosts } from "@/lib/blog"
import Link from "next/link"

export const metadata = {
    title: "Blog — Lara S.A.",
    description: "Thoughts on software, game dev, and everything in between.",
}

export default function BlogPage() {
    const posts = getAllPosts()

    return (
        <main className="mx-auto pt-24 pb-24">
            <section className="blog-content max-w-2xl flex flex-col gap-12 px-8 max-2xs:px-6 md:px-16 w-full m-auto">
                <Link href="/" className="text-sm text-base-content/60 hover:text-accent no-underline">
                    ← Back to home
                </Link>
                <h1>Blog</h1>

                {posts.length === 0 ? (
                    <p className="text-base-content/60">No posts yet. Check back soon.</p>
                ) : (
                    <ul className="flex flex-col">
                        {posts.map((post, index) => (
                            <li key={post.slug}>
                                {index > 0 && <hr className="border-base-200 my-6" />}
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="group flex flex-col gap-2 p-3 no-underline py-2"
                                >
                                    <h2 className="text-xl font-semibold text-base-content
                                        group-hover:text-accent transition-colors normal-case
                                        tracking-normal text-left mx-0">
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
