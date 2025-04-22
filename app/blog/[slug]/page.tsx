import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

// This would typically come from a CMS or database
const getBlogPost = (slug: string) => {
  return {
    title: "Typography in Web Design: Best Practices",
    date: "March 1, 2025",
    author: "John Doe",
    category: "Design",
    image: "/placeholder.svg?height=600&width=1200",
    content: `
      <p class="text-xl leading-relaxed mb-6">Typography is one of the most important elements of web design. It's not just about choosing a nice font; it's about creating a hierarchy, establishing rhythm, and ensuring readability across all devices.</p>
      
      <h2 class="text-3xl font-bold mt-12 mb-6">The Importance of Typography</h2>
      
      <p class="text-lg leading-relaxed mb-6">Good typography can make the difference between a user staying on your site or leaving. It affects readability, user experience, and even how your brand is perceived.</p>
      
      <p class="text-lg leading-relaxed mb-6">When designing for the web, consider these key factors:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
        <li>Readability across devices</li>
        <li>Appropriate font pairings</li>
        <li>Hierarchy and visual flow</li>
        <li>Consistent spacing and rhythm</li>
        <li>Accessibility considerations</li>
      </ul>
      
      <h2 class="text-3xl font-bold mt-12 mb-6">Choosing the Right Fonts</h2>
      
      <p class="text-lg leading-relaxed mb-6">When selecting fonts for your web project, consider both aesthetics and functionality. A beautiful font that's difficult to read defeats the purpose of good typography.</p>
      
      <blockquote class="border-l-4 border-zinc-900 pl-6 italic my-8 text-xl">
        "Typography is what language looks like."
        <cite class="block text-sm mt-2 not-italic">— Ellen Lupton</cite>
      </blockquote>
      
      <p class="text-lg leading-relaxed mb-6">For body text, prioritize readability over style. Sans-serif fonts like Inter, Roboto, and Open Sans work well for body copy on screens. For headings, you have more freedom to use decorative or serif fonts that reflect your brand's personality.</p>
      
      <h2 class="text-3xl font-bold mt-12 mb-6">Creating Hierarchy</h2>
      
      <p class="text-lg leading-relaxed mb-6">Typographic hierarchy guides users through your content, helping them understand what's most important and how information is organized.</p>
      
      <p class="text-lg leading-relaxed mb-6">Use size, weight, color, and spacing to create clear distinctions between different levels of content. A well-structured hierarchy makes your content more scannable and digestible.</p>
    `,
    relatedPosts: [
      {
        id: 2,
        title: "Building Responsive Layouts with CSS Grid",
        slug: "responsive-layouts-css-grid",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 5,
        title: "Designing for Accessibility: Beyond the Basics",
        slug: "designing-for-accessibility",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  return (
    <div className="pt-20">
      <article className="container-custom section-spacing">
        {/* Back Button */}
        <div className="mb-10">
          <Button asChild variant="ghost" className="group">
            <Link href="/blog" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Blog</span>
            </Link>
          </Button>
        </div>

        {/* Post Header */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="text-sm font-medium text-zinc-500 mb-4">
            {post.category} • {post.date}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{post.title}</h1>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-zinc-200 overflow-hidden">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt={post.author}
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-zinc-600">By {post.author}</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="aspect-[16/9] bg-zinc-100 rounded-lg overflow-hidden">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={1200}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Post Content */}
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-zinc max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Author Bio */}
        <div className="max-w-3xl mx-auto mt-16 p-8 bg-zinc-100 rounded-lg">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-zinc-200 overflow-hidden flex-shrink-0">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt={post.author}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">About {post.author}</h3>
              <p className="text-zinc-600">
                Full Stack Developer with a passion for typography and user experience. Writing about web development,
                design, and the intersection of technology and creativity.
              </p>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="max-w-3xl mx-auto mt-16">
          <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {post.relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                href={`/blog/${relatedPost.slug}`}
                className="group block bg-white rounded-lg overflow-hidden border border-zinc-200 hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-zinc-100 overflow-hidden">
                  <Image
                    src={relatedPost.image || "/placeholder.svg"}
                    alt={relatedPost.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold group-hover:text-zinc-600 transition-colors">{relatedPost.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
