import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: "Typography in Web Design: Best Practices",
    excerpt: "Learn how to use typography effectively to create beautiful and readable web experiences.",
    date: "March 1, 2025",
    category: "Design",
    image: "/placeholder.svg?height=400&width=600",
    slug: "typography-in-web-design",
  },
  {
    id: 2,
    title: "Building Responsive Layouts with CSS Grid",
    excerpt: "A comprehensive guide to creating flexible and responsive layouts using CSS Grid.",
    date: "February 15, 2025",
    category: "Development",
    image: "/placeholder.svg?height=400&width=600",
    slug: "responsive-layouts-css-grid",
  },
  {
    id: 3,
    title: "The Future of JavaScript: What's Coming in 2025",
    excerpt: "Exploring the upcoming features and trends in JavaScript that will shape web development.",
    date: "February 1, 2025",
    category: "Development",
    image: "/placeholder.svg?height=400&width=600",
    slug: "future-of-javascript-2025",
  },
  {
    id: 4,
    title: "Optimizing Web Performance: A Case Study",
    excerpt: "How I improved loading times by 70% on a client project through strategic optimizations.",
    date: "January 20, 2025",
    category: "Performance",
    image: "/placeholder.svg?height=400&width=600",
    slug: "web-performance-case-study",
  },
  {
    id: 5,
    title: "Designing for Accessibility: Beyond the Basics",
    excerpt: "Taking your accessibility knowledge to the next level with advanced techniques and considerations.",
    date: "January 5, 2025",
    category: "Accessibility",
    image: "/placeholder.svg?height=400&width=600",
    slug: "designing-for-accessibility",
  },
  {
    id: 6,
    title: "From Figma to Next.js: A Designer's Journey",
    excerpt: "My personal experience transitioning from design to development and lessons learned along the way.",
    date: "December 15, 2024",
    category: "Career",
    image: "/placeholder.svg?height=400&width=600",
    slug: "figma-to-nextjs-journey",
  },
]

export default function BlogPage() {
  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-xl mb-6">Blog</h1>
          <p className="body-lg text-zinc-600">
            Thoughts, insights, and perspectives on design, development, and the digital landscape.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-20">
          <Link href={`/blog/${blogPosts[0].slug}`} className="group block">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="text-sm font-medium text-zinc-500 mb-2">
                  {blogPosts[0].category} • {blogPosts[0].date}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 group-hover:text-zinc-600 transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="text-xl text-zinc-600 mb-6">{blogPosts[0].excerpt}</p>
                <Button
                  variant="outline"
                  size="lg"
                  className="group-hover:bg-zinc-900 group-hover:text-white transition-colors"
                >
                  Read Article
                </Button>
              </div>
              <div className="order-1 md:order-2 overflow-hidden rounded-lg">
                <div className="aspect-video bg-zinc-200 rounded-lg overflow-hidden">
                  <Image
                    src={blogPosts[0].image || "/placeholder.svg"}
                    alt={blogPosts[0].title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Blog Post Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group block bg-white rounded-lg overflow-hidden border border-zinc-200 hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-zinc-100 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-sm font-medium text-zinc-500 mb-2">
                  {post.category} • {post.date}
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-zinc-600 transition-colors">{post.title}</h3>
                <p className="text-zinc-600">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
